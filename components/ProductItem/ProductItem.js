import styles from '../../styles/ProductItem.module.scss';

const ProductItem = () => {
    return (
        <div className={styles.productitem}>
            <div className={styles.productitem__top}>
                <img src="/images/product-image.png" className={styles.productitem__img} alt="Product name" />
                <div className={styles.productitem__icons}>
                    <i className='icon-fav-alt'></i>
                    <i className='icon-basket'></i>
                </div>
            </div>
            <div className={styles.productitem__bottom}>
                <div>
                    <h4 className={styles.productitem__brand}>SAMSUNG</h4>
                    <h3 className={styles.productitem__title}>SAMSUNG</h3>
                    <div className={styles.price}>
                        <span className={styles.price__new}>35 770 ֏</span>
                        <span className={styles.price__old}>350 770 ֏</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
