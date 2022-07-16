import styles from '../../styles/MorePromo.module.scss';
import BtnSecond from '../UI/BtnSecond';

const MorePromo = () => {
    return (
        <div className={styles.morepromo}>
            <p className={styles.morepromo__title}>Ավելի պահանջված տեսակները</p>
            <div className={styles.morepromo__categories}>
                <div className={styles.morepromo__item}>
                    <img src="./images/morepromo1.png" alt="More promo" />
                    <BtnSecond btnTitle={'Հագուստ'} morePromoBtn={true} />
                </div>
                <div className={styles.morepromo__items}>
                    <div className={styles.morepromo__item_inner}>
                        <img src="./images/morepromo2.png" alt="More promo" />
                        <BtnSecond btnTitle={'Հագուստ'} morePromoBtn={true} />
                    </div>
                    <div className={styles.morepromo__items_small}>
                        <div className={styles.morepromo__subitem}>
                            <img src="./images/morepromo3.png" alt="More promo" />
                            <BtnSecond btnTitle={'Հագուստ'} morePromoBtn={true} />
                        </div>
                        <div className={styles.morepromo__subitem}>
                            <img src="./images/morepromo4.png" alt="More promo" />
                            <BtnSecond btnTitle={'Հագուստ'} morePromoBtn={true} />
                        </div>
                    </div>
                </div>
                <div className={styles.morepromo__item}>
                    <img src="./images/morepromo5.png" alt="More promo" />
                    <BtnSecond btnTitle={'Հագուստ'} morePromoBtn={true} />
                </div>
            </div>
        </div>
    );
};

export default MorePromo;
