import styles from './Footer.module.css';
import photoLeft from '../../assets/Footer/logo.svg';
import photoRight from '../../assets/Footer/g10.svg';

const Footer = () => {
    return (
        <footer className={styles.footerCDPR}>

            <div className={styles.up}>

                <div className={styles.leftPart}>
                   <a href="https://www.cyberpunk.net" target="_blank" rel="noopener noreferrer"> 
                        <img className={styles.photo} src={photoLeft} alt="2077" />
                    </a> 

                    <a href="https://www.cdprojektred.com/en" target="_blank" rel="noopener noreferrer"> 
                        <img className={styles.photo} src={photoRight} alt="CDPR" />
                    </a> 
                    
                </div>

                <div className={styles.rightPart}>

                    <a href="https://www.cyberpunk.net/ru/user-agreement/" target="_blank" rel="noopener noreferrer"> 
                        <p  className={styles.rightText}>Лицензия</p>
                    </a>

                    <a href="https://regulations.cdprojektred.com/ru/privacy_policy" target="_blank" rel="noopener noreferrer"> 
                        <p  className={styles.rightText}>Политика конфиденциальности</p>
                    </a>
                    
                </div>

            </div>

            <div className={styles.down}>
                <p className={styles.downText}>CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</p>
            </div>

        </footer>
    );
};

export default Footer;