import styles from "./FirstSlide.module.css";
;
import Banner from "../UI/Banner/Banner";
const FirstSlide: React.FC = () => {
  return (
    <section  className={styles.LendingPage}>
      <div className={styles.CenterSection}>
        <Banner />
      </div>
    </section>
  );
};

export default FirstSlide;
