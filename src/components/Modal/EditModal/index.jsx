import styles from './editModal.module.css'

function index ({ newProductData, product, setNewProductData }) {
    const handleChange = (e) => {
        const { name, value } = e.target
        setNewProductData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    return (
        <div className={styles.editContainer}>
            <form action="submit">
                <div className={styles.inpoutContainer}>
                    <label htmlFor='name'>New name</label>
                    <input
                        className={styles.editInput}
                        type='text'
                        id='name'
                        name='name'
                        value={newProductData.name}
                        placeholder={product.name}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inpoutContainer}>
                    <label htmlFor='name'>New price</label>
                    <input
                        className={styles.editInput}
                        type='text'
                        id='price'
                        name='price'
                        value={newProductData.price}
                        placeholder={product.price}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inpoutContainer}>
                    <label htmlFor='name'>New stock</label>
                    <input
                        className={styles.editInput}
                        type='text'
                        id='stock'
                        name='stock'
                        value={newProductData.stock}
                        placeholder={product.stock}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inpoutContainer}>
                    <label htmlFor='name'>New description</label>
                    <input
                        className={styles.editInput}
                        type='text'
                        id='description'
                        name='description'
                        value={newProductData.description}
                        placeholder={product.description}
                        onChange={handleChange}
                    />
                </div>
            </form>
            <span className={styles.infoText}>If no new input is included, the current product information will be used</span>
        </div>
    )
}

export default index
