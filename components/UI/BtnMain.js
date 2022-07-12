import styles from '../../styles/UI/Btnmain.module.scss';

const BtnMain = ({ btnTitle }) => {
    return (
        <button className={styles.btnmain}>{btnTitle}</button>
    );
};

export default BtnMain;
