import styles from '../../styles/Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__top}>
                <div className={`${styles.header__info} container`}>
                    <span className={styles.header__text}>COVID-19 համավարակով պայմանավորված՝ հնարավոր են առաքման ժամկետների ուշացումներ:</span>
                    <span className={styles.header__contact}>Contact info 055 45 45 45</span>
                    <span className={`${styles.header__lang} lang`}>
                        <span className={styles.lang__current}>Հայ</span>
                        <span className={styles.lang__wrap}>
                            <span className={styles.lang__sub}>Рус</span>
                            <span className={styles.lang__sub}>Eng</span>
                        </span>
                    </span>
                </div>
            </div>
            <div className={`${styles.header__main} container`}>
                <a href="#" className={styles.logo}>
                    <img src="./logo.png" alt="logo" />
                </a>
                <nav className={styles.nav}>
                    <div className={styles.nav__main}></div>
                    <div className={styles.nav__sub}>
                        <a href="#" className={styles.nav__link}></a>
                        <a href="#" className={styles.nav__link}></a>
                        <a href="#" className={styles.nav__link}></a>
                    </div>
                </nav>
                <div className={styles.header__user}>
                    <div className={styles.header__search}>
                        <input type="text" />
                        <i></i>
                    </div>
                    <div className={styles.header__login}>
                        <i></i>
                        <span></span>
                    </div>
                    <div className={styles.header__basket}></div>
                </div>
            </div>
        </header>
    );
};

export default Header;