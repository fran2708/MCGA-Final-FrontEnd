import { useDispatch } from 'react-redux'
import { addProductLoading } from '../../Redux/Products/actions'
import styles from './modal.module.css'
import { useState } from 'react'
import { addProduct, editProduct } from '../../Redux/Products/thunks'

const Modal = ({ isOpen, handleClose, action, product }) => {
    const [newProductData, setNewProductData] = useState({
        name: '',
        price: '',
        stock: '',
        description: ''
    })

    const dispatch = useDispatch()

    const handleCancelButtonClick = () => {
        handleClose()
        setNewProductData({
            name: '',
            price: '',
            stock: '',
            description: ''
        })
    }
    const handleChange = (event) => {
        setNewProductData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = () => {
        dispatch(editProduct(product._id, newProductData))
        handleClose()
    }
    return (
        <div className={isOpen ? styles.modalOpen : styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.topRow}>
                    <h2>{action}</h2>
                    <button className={styles.cancelButton} onClick={handleCancelButtonClick}>Cancel</button>
                </div>
                <div className={styles.middleRow}>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <p>{product.stock}</p>
                    <p>{product.description}</p>
                </div>
                <div className={styles.bottomRow}>
                    <button>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
