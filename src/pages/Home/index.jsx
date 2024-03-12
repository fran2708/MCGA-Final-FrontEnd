import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getProducts, clearError } from '../../Redux/Products/thunks'

import styles from './home.module.css'

function index () {
    const { products, error, isLoading } = useSelector((store) => store.products)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!products || products.length === 0) {
            dispatch(getProducts())
        }
    }, [dispatch, products])

    const handleClearError = () => {
        dispatch(clearError())
    }

    if (error) {
        return (
            <div className={styles.errorContainer}>
                <p>Error</p>
                <button onClick={handleClearError}>Clear Error</button>
            </div>
        )
    }
    if (isLoading) return <p>Loading...</p>

    return (
        <div>
            <h2>HOME</h2>
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
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default index
