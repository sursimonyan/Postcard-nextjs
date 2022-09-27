import styles from '../../styles/Footer.module.scss';
import Brands from '../Brands/Brands';
import FooterMenuItem from '../FooterMenuItem/FooterMenuItem';
import FooterSocials from '../FooterSocials/FooterSocials';

const Footer = () => {
    const title = 'Մեր մասին';
    const items = ['Մեր մասին', 'Մեր թիմը', 'Կարիերա', 'Մեր ցանցը', 'Ֆիրմային ոճ'];

    return (
        <footer className={styles.footer}>
            <Brands />
            <div className={`${styles.footer__inner} container`}>
                <div className={styles.footer__top}>
                    <div className={styles.footer__menu}>
                        <FooterMenuItem title={title} items={items} />
                        <FooterMenuItem title={title} items={items} />
                        <FooterMenuItem title={title} items={items} />
                    </div>
                    <FooterSocials />
                </div>
            </div>
            <p className={styles.footer__bottom}>
                Copyright © “Haypost” CJSC Բոլոր իրավունքները պաշտպանված են: 2020
            </p>
        </footer>
    );
};

export default Footer;
