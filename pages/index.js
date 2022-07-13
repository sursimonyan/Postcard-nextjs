import ShippingItem from '../components/ShippingItem/ShippingItem';
import SliderItem from '../components/SliderItem/SliderItem';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <SliderItem />
      <div className={`${styles.shipping} container`}>
        <ShippingItem />
        <ShippingItem />
        <ShippingItem />
      </div>
    </div>
  )
}
