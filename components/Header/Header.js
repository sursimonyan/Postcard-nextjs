import cn from 'classnames';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.scss';
import Nav from '../Nav/Nav';
import UserNav from '../UserNav/UserNav';

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [logedIn, setLogedIn] = useState(false);
    const [langOpen, setLangOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.header__top}>
                <div className={`${styles.header__info} container`}>
                    <span className={styles.header__text}>COVID-19 համավարակով պայմանավորված՝ հնարավոր են առաքման ժամկետների ուշացումներ:</span>
                    <span className={styles.header__contact}>Contact info 055 45 45 45</span>
                    <span className={`${styles.lang} lang`}>
                        <span
                            className={styles.lang__current}
                            onClick={() => setLangOpen(!langOpen)}
                        >
                            Հայ
                            <i className={`${styles.lang__arrow} icon-down`}></i>
                        </span>
                        <span className={cn(styles['lang__wrap'], { [styles['opened']]: langOpen })}>
                            <span
                                className={styles.lang__sub}
                                onClick={() => setLangOpen(false)}
                            >Рус</span>
                            <span
                                className={styles.lang__sub}
                                onClick={() => setLangOpen(false)}
                            >Eng</span>
                        </span>
                    </span>
                </div>
            </div>
            <div className={`${styles.header__main} container`}>
                <div className={styles.header__left}>
                    <Link href="/">
                        <a className={styles.header__logo}>
                            <img src="./logo.png" alt="logo" />
                        </a>
                    </Link>
                    <Nav showSearch={showSearch} />
                </div>
                <UserNav showSearch={showSearch} setShowSearch={setShowSearch} logedIn={logedIn} setLogedIn={setLogedIn} />
            </div>
        </header>
    );
};

export default Header;