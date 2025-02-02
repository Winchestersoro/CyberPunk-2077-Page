import classes from "./Banner.module.css";
import Photo from "../Form/Form";

const Banner = () => {
  return (
    <Photo size="standard">
      <div className={classes.inSec}>
        <div className={classes.textSec}>
          <p className={classes.TextA}>Доступно на </p>
          <p className={classes.TextA}> всех платформах</p>
        </div>
        <a
          href="https://www.cyberpunk.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={classes.Button}>Узнать больше</button>
        </a>
      </div>
    </Photo>
  );
};

export default Banner;
