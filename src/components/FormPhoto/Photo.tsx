import styles from './Photo.module.css';

interface PhotoProps {
    children: React.ReactNode; 
}
const Photo: React.FC<PhotoProps> = ({ children }) => {
    return (
        <div className={styles.InfoForm}>
            {children} {}
        </div>
    );
};

export default Photo;