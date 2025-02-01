import styles from './FifthSlide.module.css';

import disk from '../../assets/icons/Subtract.svg';
import desc from '../../assets/icons/desc.svg';
import vector from '../../assets/icons/Vector.svg';
import pc from '../../assets/icons/PC.svg';
import xbox from '../../assets/icons/xbox.svg';
import stadia from '../../assets/icons/stadia.svg';
import playstation from '../../assets/icons/Playstation.svg';


const FifthSlide = () => {
    return (
        <section className={styles.fifthSlide}>

            <div className={styles.photoSec}>

            </div>

            <div className={styles.textSec}>

                <div className={styles.hSec}>
                    <h1 className={styles.hFirst}>Купить игру </h1>
                    <h1 className={styles.hFirst}>Cyberpunk 2077</h1>
                </div>

                <div className={styles.containBlock}>
                    <p className={styles.pDesc}>В комплект входит:</p>

                    <div className={styles.iconBlock}>
                        <img src={disk} alt="disk" />
                        <p className={styles.iconDesc}>Футляр с игровыми дисками</p>
                    </div>

                    <div className={styles.iconBlock}>
                        <img src={desc} alt="desc" />
                        <p className={styles.iconDesc}>Футляр с кодом для загрузки игры и дисками (pc)</p>
                    </div>

                    <div className={styles.iconBlock}>
                        <img src={vector} alt="vector" />
                        <p className={styles.iconDesc}>Справочник с информацией об игровом мире</p>
                    </div>
                </div>

                <div className={styles.containBlock}>
                    <p className={styles.pDesc}>Доступно на всех платформах:</p>

                    <div className={styles.moreIcons}>

                        <div className={styles.iconSec}>
                            <img className={styles.svgIc1} src={pc} alt="vector" />
                            <img className={styles.svgIc2} src={xbox} alt="vector" />
                        </div>

                        <div className={styles.iconSec}>
                            <img className={styles.svgIc1} src={stadia} alt="vector" />
                            <img className={styles.svgIc2} src={playstation} alt="vector" />
                        </div>
                        
                    </div>

                </div>

            </div>

            
        </section>
    );
};

export default FifthSlide;