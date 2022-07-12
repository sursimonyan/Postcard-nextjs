import styles from '../../styles/SliderItem.module.scss';
import BtnMain from '../UI/BtnMain';

const SliderItem = () => {
    return (
        <div className={styles.slideritem}>
            <span className={`${styles.slideritem__arrow} ${styles.slideritem__arrow_left}`}>
                <i className='icon-arrow-right'></i>
            </span>
            <span className={`${styles.slideritem__arrow} ${styles.slideritem__arrow_right}`}>
                <i className='icon-arrow-right'></i>
            </span>
            <div className={styles.slideritem__wrap}>
                <div className={`${styles.slideritem__inner} container`}>
                    <div className={styles.slideritem__text}>
                        <h2 className={styles.slideritem__title}>NIke Men Running</h2>
                        <p className={styles.slideritem__desc}>Performance and design. Taken right to the edge.</p>
                        <BtnMain btnTitle={'Shop Now'} />
                    </div>
                    <div className={styles.slideritem__image}>
                        <img src='./images/product-image.png' alt='product image' />
                    </div>
                </div>
            </div>
            <div className={styles.slideritem__bullets}>
                <span></span>
                <span></span>
                <span className={styles.slideritem__bullets_active}></span>
            </div>
        </div>
    );
};

export default SliderItem;
