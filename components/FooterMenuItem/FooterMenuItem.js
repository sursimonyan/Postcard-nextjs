import cn from 'classnames';
import Link from 'next/link';
import styles from '../../styles/FooterMenuItem.module.scss';

const FooterMenuItem = ({ title, items }) => {
    return (
        <div className={styles.footerMenuItem}>
            <h4 className={styles.footerMenuItem__title}>{title}</h4>
            <div className={styles.footerMenuItem__items_wrap}>
                {
                    items && items.map((item) => (
                        <Link href={item}>
                            <a className={styles.footerMenuItem__item}>{item}</a>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default FooterMenuItem;
