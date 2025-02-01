
import Photo from '../UI/FormPhoto/Photo';
import styles from './FourthSlide.module.css'
import Phantom from '../../assets/photo/Phantom.jpeg';
const FourthSlide = () => {
    return (
        <section className={styles.yellowSection}>

            <div className={styles.middleSection}>

                <div className={styles.monitor}>

                </div>

                <div className={styles.descriptionBlock}>
                    
                    
                    <h2 className={styles.phantomLib}>Cyperpunk 2077: Phantom Liberty</h2>

                    <p className={styles.phantomLibP}>Исследуйте новые районы Найт-Сити, откройте для себя новые миссии и персонажей, и погрузитесь в еще более глубокий мир Cyberpunk 2077 с дополнением "Phantom Liberty".</p>

                    <a href="https://www.cyberpunk.net/ru/ru/phantom-liberty" target="_blank" rel="noopener noreferrer">
                        <Photo size="small" src = {Phantom} alt='Phantom'>
                            {" "}
                        </Photo>
                    </a>
                    
                </div>

            </div>
        </section>
    );
};

export default FourthSlide;