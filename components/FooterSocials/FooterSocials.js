import styles from '../../styles/FooterSocials.module.scss';

const FooterSocials = () => {
    const footerSocial = ['icon-facebook', 'icon-instagram', 'icon-youtube', 'icon-linkedin'];

    return (
        <div className={styles.footerSocials}>
            {
                footerSocial.map((social) => (
                    <a href='#' key={social}>
                        <i className={`${social} ${styles.footerSocials__social}`}></i>
                    </a>
                ))
            }
        </div>
    );
};

export default FooterSocials;
