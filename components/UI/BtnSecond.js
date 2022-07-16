import cn from 'classnames';
import styles from '../../styles/UI/BtnSecond.module.scss';

const BtnSecond = ({ btnTitle, morePromoBtn }) => {
    return (
        <button className={cn(styles.btnsecond, { [styles.morePromoBtn]: morePromoBtn })}>{btnTitle}</button>
    );
};

export default BtnSecond;
