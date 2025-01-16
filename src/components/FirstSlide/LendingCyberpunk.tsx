
import styles from './LendingCyberpunk.module.css';
import Protoganist from '../../assets/Protoganist.jpeg';
import InfoForm from '../InfoForm/InfoForm';
const LendingCyberpunk: React.FC = () => {
    return (
        <div className={styles.LendingPage} style={{ backgroundImage: `url(${Protoganist})` }}>
            <div className={styles.CenterSection}>
                <InfoForm />
            </div>      
        </div>
    );
};

export default LendingCyberpunk;