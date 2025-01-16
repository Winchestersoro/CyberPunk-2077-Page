
import classes from './Header.module.css';
import LeftIcon from '../../assets/Cyberpunk_2077_logo 1.svg' 
import RightIcon1 from '../../assets/icons/instagram-square logo.svg'; 
import RightIcon2 from '../../assets/icons/twitch logo.svg';
import RightIcon3 from '../../assets/icons/twitter-square logo.svg';
import RightIcon4 from '../../assets/icons/vk logo.svg';
import RightIcon5 from '../../assets/icons/youtube logo.svg';

const Header = () => {
    const rightIcons = [RightIcon1, RightIcon2, RightIcon3, RightIcon4, RightIcon5]; 

    return (
        <div className={classes.headerCyber}>
            <img src={LeftIcon} alt="Left Icon" className={classes.leftIcon} />
            <div className={classes.rightIcons}>
                {rightIcons.map((icon, index) => (
                    <img key={index} src={icon} alt={`Right Icon ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default Header;