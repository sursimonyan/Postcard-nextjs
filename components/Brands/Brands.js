import styles from '../../styles/Brands.module.scss';

const Brands = () => {
    return (
        <div className={styles.brands}>
            <div className={`${styles.brands__inner} container`}>
                <div className={styles.brands__item}>
                    <img src="./images/brand1.png" alt="Brand Name" />
                </div>
                <div className={styles.brands__item}>
                    <img src="./images/brand2.png" alt="Brand Name" />
                </div>
                <div className={styles.brands__item}>
                    <img src="./images/brand3.png" alt="Brand Name" />
                </div>
                <div className={styles.brands__item}>
                    <img src="./images/brand4.png" alt="Brand Name" />
                </div>
                <div className={styles.brands__item}>
                    <img src="./images/brand5.png" alt="Brand Name" />
                </div>
                <div className={styles.brands__item}>
                    <img src="./images/brand6.png" alt="Brand Name" />
                </div>
            </div>
        </div>
    );
};

export default Brands;
