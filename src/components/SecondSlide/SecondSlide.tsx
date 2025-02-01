import Photo from "../UI/FormPhoto/Photo";
import styles from "./SecondSlide.module.css";
import Photo1 from "../../assets/photo/c035da59c21a6ae999fdb8660cc9a4ce.png";
import Photo3 from "../../assets/photo/8dfd066535b9f02d859e2bd951f27644.png";
import Photo2 from "../../assets/photo//732233ec3c7b0acf70041615c8404563.png";

const SecondSlide = () => {
  return (
    <section className={styles.SecondSlide}>
      <div className={styles.description}>
        <h3 className={styles.title}>Найт-Сити изменит тебя навсегда!</h3>
        <p className={styles.text}>
          <a
            href="https://www.cyberpunk.net"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Cyberpunk 2077
          </a>{" "}
          — приключенческая ролевая игра, действие которой происходит в
          мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся
          выше всего. Ты играешь за V, наёмника в поисках устройства,
          позволяющего обрести бессмертие. Ты сможешь менять киберимпланты,
          навыки и стиль игры своего персонажа, исследуя открытый мир, где твои
          поступки влияют на ход сюжета и всё, что тебя окружает.
        </p>
      </div>

      <div className={styles.photoContainer}>
        <div className={styles.twoPhotos}>
          <Photo size="small" src={Photo1} alt="Фото 1">
            {" "}
          </Photo>
          <Photo size="small" src={Photo2} alt="Фото 2">
            {" "}
          </Photo>
        </div>
        <div className={styles.onePhoto}>
          <Photo size="large" src={Photo3} alt="Фото 3">
            {" "}
          </Photo>
        </div>
      </div>

      <div className={styles.photoDown}></div>
    </section>
  );
};

export default SecondSlide;
