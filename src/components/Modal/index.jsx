import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addProduct, updateProduct } from '../../Redux/Products/thunks'
import { actionTypes } from '../../models/actionTypes'

import styles from './modal.module.css'

const Modal = ({ isOpen, handleClose, action, product }) => {
    const dispatch = useDispatch()
    const [isConfirming, setIsConfirming] = useState(false)
    const [newProductData, setNewProductData] = useState({
        name: '',
        price: '',
        stock: '',
        description: ''
    })

    const handleCancelButtonClick = () => {
        handleClose()
        setNewProductData({
            name: '',
            price: '',
            stock: '',
            description: ''
        })
        setIsConfirming(false)
    }
    const handleChange = (event) => {
        setNewProductData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = () => {
        dispatch(updateProduct(product._id, newProductData))
        handleClose()
    }

    return (
        <div className={isOpen ? styles.modalOpen : styles.modal}>
            <div className={styles.modalContent}>
                {/* TOP ROW */}
                <div className={styles.topRow}>
                    <h2>{action === actionTypes.EDIT ? `Editing: ${product.name}` : 'Adding new product'}</h2>
                    <button className={styles.cancelButton} onClick={handleCancelButtonClick}>Cancel</button>
                </div>
                {/* MIDDLE ROW */}
                { action === actionTypes.EDIT
                    ? <EditModal
                        newProductData={newProductData}
                        setNewProductData={setNewProductData}
                        product={product}
                    />
                    : <AddModal
                        newProductData={newProductData}
                        setNewProductData={setNewProductData}
                    />
                }
                {/* BOTTOM ROW */}
                <div className={styles.bottomRow}>
                    { isConfirming
                        ? <div className={styles.confirmationContainer}>
                            <p>Do you confirm this action?</p>
                            <button
                                className={styles.confirmButton}
                                type="submit"
                                onClick={handleChange}>
                            Confirm
                            </button>
                            <button
                                className={styles.cancelConfirmButton}
                                onClick={() => setIsConfirming(!isConfirming)} >
                            Cancel</button>
                        </div>
                        : <button
                            className={styles.saveButton}
                            type="submit"
                            onClick={() => setIsConfirming(!isConfirming)} >
                            Save
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Modal
