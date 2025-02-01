import styles from "./FirstSlide.module.css";
import Protoganist from "../../assets/Protoganist.jpeg";
import InfoForm from "../UI/Banner/Banner";
const FirstSlide: React.FC = () => {
  return (
    <section
      className={styles.LendingPage}
      style={{ backgroundImage: `url(${Protoganist})` }}
    >
      <div className={styles.CenterSection}>
        <InfoForm />
      </div>
    </section>
  );
};

export default FirstSlide;
