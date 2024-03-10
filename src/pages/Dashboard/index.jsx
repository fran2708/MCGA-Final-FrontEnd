import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../models/routes'
import { useEffect } from 'react'
import { getProducts } from '../../Redux/Products/thunks'
import styles from './dashboard.module.css'

function index () {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector((store) => store.login.user)
    const { products, error, isLoading } = useSelector((store) => store.products)

    useEffect(() => {
        if (!products || products.length === 0) {
            dispatch(getProducts())
        }
    }, [dispatch, products])

    console.log(products)

    const logOut = () => {
        user.email = ''
        user.id = ''
        navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
    }

    if (error) return <p>Error</p>

    if (isLoading) return <p>Loading...</p>
    return (
        <div>
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
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button onClick={logOut}>LOGOUT</button>
        </div>
    )
}

export default index
