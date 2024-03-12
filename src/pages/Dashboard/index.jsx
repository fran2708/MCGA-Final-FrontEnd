import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../models/routes'
import { useEffect, useState } from 'react'

import { getProducts, deleteProduct, clearError } from '../../Redux/Products/thunks'
import { logOut } from '../../Redux/Login/thunks'
import Modal from '../../components/Modal'
import useModal from '../../helpers/hooks/useModal'
import { actionTypes } from '../../models/actionTypes'

import styles from './dashboard.module.css'

function index () {
    const [modalAction, setModalAction] = useState('')
    const [productToEdit, setProductToEdit] = useState({})
    const [selectedRow, setSelectedRow] = useState(null)
    const [isModalOpen, handleToggleModal] = useModal()
    const { products, error, isLoading } = useSelector((store) => store.products)
    const userState = useSelector((store) => store.login.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!products || products.length === 0) {
            dispatch(getProducts())
        }
    }, [dispatch, products])

    const dashboardLogOut = () => {
        dispatch(logOut())
        navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
    }

    const handleButtonClick = (actionType, product) => {
        if (actionType === actionTypes.EDIT) {
            setModalAction(actionTypes.EDIT)
            setProductToEdit(product)
            handleToggleModal()
        } else {
            setModalAction(actionTypes.CREATE)
            handleToggleModal()
        }
    }

    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct(id))
    }

    const handleClearError = () => {
        dispatch(clearError())
    }

    if (error) {
        return (
            <div className={styles.errorContainer}>
                <p>Error</p>
                <button onClick={handleClearError}>Clear Error</button>
                <button onClick={dashboardLogOut}>LOGOUT</button>
            </div>
        )
    }
    if (isLoading) return <p>Loading...</p>
    return (
        <div>
            <button onClick={dashboardLogOut}>LOGOUT</button>
            <h2>DASHBOARD</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.thead}>Name</th>
                        <th className={styles.thead}>Price</th>
                        <th className={styles.thead}>Stock</th>
                        <th className={styles.thead}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr key={product._id}>
                                <td className={styles.tbody}>{product.name}</td>
                                <td className={styles.tbody}>{product.price}</td>
                                <td className={styles.tbody}>{product.stock}</td>
                                <td className={styles.tbody}>{product.description}</td>
                                <td>
                                    <button value="Update" onClick={() => handleButtonClick(actionTypes.EDIT, product)}>Update</button>
                                    <button value="Delete" onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div>
                <h3>Add a product</h3>
                <button onClick={() => handleButtonClick(actionTypes.CREATE)}>Add</button>
            </div>
            <Modal
                isOpen={isModalOpen}
                handleClose={handleToggleModal}
                action={modalAction}
                product={productToEdit}
            />
        </div>
    )
}

export default index
