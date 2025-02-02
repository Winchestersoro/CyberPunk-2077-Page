import { clsx } from "clsx";
import styles from "./Form.module.css";

interface PhotoProps {
  children?: React.ReactNode;
  size: "standard" | "small" | "large";
  src?: string;
  alt?: string;
}

const Form: React.FC<PhotoProps> = ({ children, size, src, alt }) => {
  // const sizeClass = size === 'small' ? styles.small : size === 'large' ? styles.large : styles.standard;

  return (
    // <div className={`${styles.InfoForm} ${sizeClass}`}>
    <div className={clsx(styles.infoForm, styles[size])}>
      {src && alt && <img src={src} alt={alt} className={styles.photo} />}
      {children}
    </div>
  );
};

export default Form;
