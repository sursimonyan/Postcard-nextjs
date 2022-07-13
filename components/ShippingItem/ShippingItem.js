import styles from '../../styles/ShippingItem.module.scss';

const ShippingItem = ({ icon, text }) => {
    return (
        <div className={styles.shippingitem}>
            <div className={styles.shippingitem__icon}>
                <i className='icon-shipping'></i>
            </div>
            <div className={styles.shippingitem__text_wrap}>
                <p className={styles.shippingitem__text}>Անվճար առաքում</p>
            </div>
        </div>
    );
};

export default ShippingItem;
