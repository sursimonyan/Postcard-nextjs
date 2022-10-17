import cn from 'classnames';
import Link from 'next/link';
import styles from '../../styles/CategoriesMenu.module.scss';

const CategoriesMenu = ({ openMenu, setOpenMenu }) => {

    const closeMenu = () => {
        setOpenMenu(false);
        document.querySelector('body').style.overflowY = 'inherit';
    }

    return (
        <div className={cn(styles.menu__wrap, { [styles.opened]: openMenu })}>
            <div className={styles.categories}>
                <div className={styles.categories__top}>
                    <h3 className={styles.categories__title}>Կատեգորիա</h3>
                    <i
                        className={`${styles.categories__close} icon-close`}
                        onClick={closeMenu}
                    ></i>
                </div>
                <div className={styles.categories__list}>
                    <span className={styles.categories__item}>
                        <i className='icon-stationery'></i>
                        Գրենական պիտույքներ
                    </span>
                    <span className={styles.categories__item}>
                        <i className='icon-clothes'></i>
                        Հագուստ, կոշիկ, պայուսակ
                    </span>
                    <span className={styles.categories__item}>
                        <i className='icon-techniques'></i>
                        Տեխնիկա և աքսեսուարներ
                    </span>
                    <span className={styles.categories__item}>
                        <i className='icon-home'></i>
                        Ապրանքներ տան համար
                    </span>
                    <span className={styles.categories__item}>
                        <i className='icon-Perfume'></i>
                        Գեղեցկություն և առողջություն
                    </span>
                    <span className={styles.categories__item}>
                        <i className='icon-food-and-drink'></i>
                        Սնունդ և ըմպելիքներ
                    </span>
                    <span className={styles.categories__item}>
                        <i className='icon-games-joyes'></i>
                        Խաղալիքներ և հոբի
                    </span>
                    <span className={styles.categories__item}>
                        <i className='icon-books'></i>
                        Գրքեր
                    </span>
                    <span className={styles.categories__item}>
                        <i className='icon-ball'></i>
                        Սպորտ և հանգիստ
                    </span>
                    <span className={styles.categories__item}>
                        <i className='icon-cars'></i>
                        Ավտոապրանքներ
                    </span>
                    <span className={styles.categories__item}>
                        <i className='icon-animal'></i>
                        Կենդանական ապրանքներ
                    </span>
                    <span className={styles.categories__item}>
                        <i className='icon-jewerly'></i>
                        Զարդեր
                    </span>
                    <span className={styles.categories__item}>
                        <i className='icon-souvenir'></i>
                        Հուշանվերներ
                    </span>
                    <span className={styles.categories__item}>
                        <i className='icon-tools'></i>
                        Շինանյութ և վերանորոգում
                    </span>
                    <span className={styles.categories__item}>
                        <i className='icon-sofa'></i>
                        Կահույք
                    </span>
                    <span className={styles.categories__item}>
                        <i className='icon-brands'></i>
                        Բրենդներ
                    </span>
                </div>
                <div className={styles.categories__bottom}>
                    <div className={styles.categories__lang}>
                        <span className={styles.categories__lang_current}>
                            Հայերեն
                            <span className={`${styles.categories__lang_icon} icon-down`}></span>
                        </span>
                    </div>
                    <Link href="/"><a className={styles.categories__link}>Մեր մասին</a></Link>
                    <Link href="/"><a className={styles.categories__link}>Վճարման մեթոդներ</a></Link>
                    <Link href="/"><a className={styles.categories__link}>Վճարման մեթոդներ</a></Link>
                    <span className={styles.categories__contact}>Contact info 055 45 45 45</span>
                </div>
            </div>
            <div className={styles.submenu}>
                <div className={styles.submenu__categories}>
                    <div className={styles.submenu__subcategory}>
                        <h3 className={styles.submenu__subcategory_title}>Մանկական</h3>
                        <Link href="/">
                            <a className={styles.submenu__subcategory_link}>Վերնաշապիկներ</a>
                        </Link>
                        <Link href="/">
                            <a className={styles.submenu__subcategory_link}>Վերարկուներ</a>
                        </Link>
                        <Link href="/">
                            <a className={styles.submenu__subcategory_link}>Տաբատներ</a>
                        </Link>
                    </div>
                    <div className={styles.submenu__subcategory}>
                        <h3 className={styles.submenu__subcategory_title}>Մանկական</h3>
                        <Link href="/">
                            <a className={styles.submenu__subcategory_link}>Վերնաշապիկներ</a>
                        </Link>
                        <Link href="/">
                            <a className={styles.submenu__subcategory_link}>Վերարկուներ</a>
                        </Link>
                        <Link href="/">
                            <a className={styles.submenu__subcategory_link}>Տաբատներ</a>
                        </Link>
                    </div>
                    <div className={styles.submenu__subcategory}>
                        <h3 className={styles.submenu__subcategory_title}>Մանկական</h3>
                        <Link href="/">
                            <a className={styles.submenu__subcategory_link}>Վերնաշապիկներ</a>
                        </Link>
                        <Link href="/">
                            <a className={styles.submenu__subcategory_link}>Վերարկուներ</a>
                        </Link>
                        <Link href="/">
                            <a className={styles.submenu__subcategory_link}>Տաբատներ</a>
                        </Link>
                    </div>
                </div>
                <div className={styles.submenu__image}>
                    <Link href="/">
                        <>
                            <div className={styles.submenu__image_wrap}>
                                <img src="./images/category-image.png" alt="Category Name" />
                            </div>
                            <h4 className={styles.submenu__image_title}>ՆՈՐ ՏԵՍԱԿԱՆԻ</h4>
                        </>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoriesMenu;