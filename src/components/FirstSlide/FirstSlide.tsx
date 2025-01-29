import styles from "./FirstSlide.module.css";
import Protoganist from "../../assets/Protoganist.jpeg";
import InfoForm from "../UI/InfoForm/InfoForm";
const FirstSlide: React.FC = () => {
  return (
    <div
      className={styles.LendingPage}
      style={{ backgroundImage: `url(${Protoganist})` }}
    >
      <div className={styles.CenterSection}>
        <InfoForm />
      </div>
    </div>
  );
};

export default FirstSlide;
