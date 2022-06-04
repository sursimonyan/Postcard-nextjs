import styles from '../../styles/UserNav.module.scss';

const UserNav = ({ showSearch, logedIn, setShowSearch, setLogedIn }) => {
    return (
        <div className={styles.usernav}>
            {
                showSearch ? (
                    <div
                        className={styles.usernav__item}
                        onClick={() => setShowSearch(false)}
                    >
                        <i className={`${styles.usernav__icon} icon-close`}></i>
                        <span className={styles.usernav__text}>Հեռացնել</span>
                    </div>
                ) : (
                    <div
                        className={styles.usernav__item}
                        onClick={() => setShowSearch(true)}
                    >
                        <i className={`${styles.usernav__icon} icon-search`}></i>
                        <span className={styles.usernav__text}>Որոնել</span>
                    </div>
                )
            }
            {
                logedIn ? (
                    <>
                        <div className={styles.usernav__item}>
                            <i className={`${styles.usernav__icon} icon-fav-alt`}></i>
                            <span className={styles.usernav__text}>Իմ նախընտրածները</span>
                        </div>
                        <div
                            className={styles.usernav__item}
                            onClick={() => setLogedIn(!logedIn)}
                        >
                            <i className={`${styles.usernav__icon} icon-user-account`}></i>
                            <span className={styles.usernav__text}>Անձնական Էջ</span>
                        </div>
                    </>
                ) : (
                    <div
                        className={styles.usernav__item}
                        onClick={() => setLogedIn(!logedIn)}
                    >
                        <i className={`${styles.usernav__icon} icon-login`}></i>
                        <span className={styles.usernav__text}>Մուտք</span>
                    </div>
                )
            }
            <div className={styles.usernav__item}>
                <i className={`${styles.usernav__icon} ${styles.usernav__basket} icon-basket`}>
                    <span className={styles.usernav__products}>1</span>
                </i>
                <span className={styles.usernav__text}>Զամբյուղ</span>
            </div>
        </div>
    );
};

export default UserNav;