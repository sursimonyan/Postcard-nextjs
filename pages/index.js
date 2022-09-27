import cn from 'classnames';
import styles from '../styles/Home.module.scss';
import ProductItem from '../components/ProductItem/ProductItem';
import ShippingItem from '../components/ShippingItem/ShippingItem';
import SliderItem from '../components/SliderItem/SliderItem';
import { useState } from 'react';
import MainBanner from '../components/MainBanner/MainBanner';
import MorePromo from '../components/MorePromo/MorePromo';

export default function Home() {
  const [activePromo, setActivePromo] = useState(true);

  return (
    <div className={styles.container}>
      <SliderItem />
      <div className='container'>
        <div className={styles.shipping}>
          <ShippingItem />
          <ShippingItem />
          <ShippingItem />
        </div>
        <div className={styles.products}>
          <div className={styles.products__promo}>
            <span className={cn(styles.products__promo_item, { [styles.active]: activePromo })}>Օրվա առաջարկ</span>
            <span className={styles.products__promo_item}>Պահանջված տեսականի</span>
            <span className={styles.products__promo_item}>Նոր տեսականի</span>
          </div>
          <div className={styles.products__slider}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </div>
      <MainBanner />
      <div className='container'>
        <MorePromo />
      </div>
    </div>
  )
}
