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
        <div className={styles.container}>
            <h2>HOME</h2>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            return (
                                <tr key={product._id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.description}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default index
