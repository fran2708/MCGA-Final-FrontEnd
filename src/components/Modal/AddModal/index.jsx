import styles from './addModal.module.css'

function index ({ newProductData, setNewProductData }) {
    const handleChange = (e) => {
        const { name, value } = e.target
        setNewProductData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    return (
        <div className={styles.createContainer}>
            <form action ="submit">
                <div className={styles.inputContainer}>
                    <label htmlFor='name'>Name</label>
                    <input
                        className={styles.createInput}
                        type='text'
                        id='name'
                        name='name'
                        value={newProductData.name}
                        placeholder="Enter new product's name"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor='name'>Price</label>
                    <input
                        className={styles.createInput}
                        type='text'
                        id='price'
                        name='price'
                        value={newProductData.price}
                        placeholder="Enter new product's price"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor='name'>Stock</label>
                    <input
                        className={styles.createInput}
                        type='text'
                        id='stock'
                        name='stock'
                        value={newProductData.stock}
                        placeholder="Enter new product's stock"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor='name'>Description</label>
                    <input
                        className={styles.createInput}
                        type='text'
                        id='description'
                        name='description'
                        value={newProductData.description}
                        placeholder="Enter new product's description"
                        onChange={handleChange}
                        required
                    />
                </div>
            </form>
        </div>
    )
}

export default index
