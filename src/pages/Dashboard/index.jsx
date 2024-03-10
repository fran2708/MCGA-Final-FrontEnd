import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../models/routes'
import { useEffect, useState } from 'react'
import { getProducts, deleteProduct } from '../../Redux/Products/thunks'
import styles from './dashboard.module.css'
import Modal from '../../components/Modal'
import useModal from '../../helpers/hooks/useModal'
import { actionTypes } from '../../models/actionTypes'

function index () {
    const [modalAction, setModalAction] = useState('')
    const [productToEdit, setProductToEdit] = useState({})
    const [isModalOpen, handleToggleModal] = useModal()
    const user = useSelector((store) => store.login.user)
    const { products, error, isLoading } = useSelector((store) => store.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!products || products.length === 0) {
            dispatch(getProducts())
        }
    }, [dispatch, products])

    const logOut = () => {
        user.email = ''
        user.id = ''
        navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
    }

    const handleButtonClick = (actionType, product) => {
        if (actionType === actionTypes.EDIT) {
            setModalAction(actionTypes.EDIT)
            setProductToEdit(product)
            handleToggleModal()
        } else {
            setModalAction(actionTypes.CREATE)
        }
    }

    const handleDeleteProduct = id => {
        dispatch(deleteProduct(id))
    }

    if (error) {
        return (
            <p>Error</p>
        )
    }
    if (isLoading) return <p>Loading...</p>
    return (
        <div>
            <button onClick={logOut}>LOGOUT</button>
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
                    {products.map((product) => {
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
            <h3>Add a product</h3>
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
