import styles from './ThirdSlide.module.css';
import InputForm from '../UI/InputForm/InputForm';
import Photo from '../UI/FormPhoto/Photo';
import PhotoForm from '../../assets/photo/PhotoForm.jpeg';


const ThirdSlide = () => {

   
    
    return (
        <section className={styles.thirdSlide}>

            <div className={styles.formSection}>

                <div className={styles.descBlock}>

                    <div className={styles.description}>
                        <h1 className={styles.cyberH}>Cyberpunk 2077</h1>
                        <p className={styles.cyberP}>Подпишитесь на официальную новостную рассылку Cyberpunk 2077.</p>
                        <p className={styles.cyberP}>Будьте в курсе всех новостей вселенной</p>
                    </div>

                    <a href="https://www.cdprojektred.com/en" className={styles.photoDownLink} target="_blank" rel="noopener noreferrer">
                        <div className={styles.cdPr}>
                       
                        </div>
                    </a>

                </div>
                
                
                <div className={styles.formBlock}>
                    <InputForm />
                    <Photo size="large" src={PhotoForm} alt="ФотоФорм" > {" "} </Photo>
                </div>

            </div>

                <div className={styles.photoDown}>

                </div>
            
        
        </section>
    );
};

export default ThirdSlide;