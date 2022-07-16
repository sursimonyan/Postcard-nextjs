import styles from '../../styles/MainBanner.module.scss';
import BtnMain from '../UI/BtnMain';

const MainBanner = () => {
    return (
        <div className={styles.mainbanner} style={{'backgroundImage': 'url(./images/main-banner.jpg)'}}>
            <div className={styles.mainbanner__wrap}>
                <div className={`${styles.mainbanner__inner} container`}>
                    <div className={styles.mainbanner__info}>
                        <h2 className={styles.mainbanner__title}>All Adidas bags</h2>
                        <p className={styles.mainbanner__desc}>Performance and design. Taken right to the edge.</p>
                        <BtnMain btnTitle={'Shop Now'} />
                    </div>
                    {/* <div className={styles.mainbanner__image}>
                        <img src='./images/product-image.png' alt='product image' />
                    </div> */}
                </div>
            </div>
            <div className={styles.mainbanner__bullets}>
                <span></span>
                <span></span>
                <span className={styles.mainbanner__bullets_active}></span>
            </div>
        </div>
    );
};

export default MainBanner;
