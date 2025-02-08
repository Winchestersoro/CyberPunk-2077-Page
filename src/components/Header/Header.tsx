import React from 'react';
import classes from './Header.module.css';
import LeftIcon from '../../assets/Cyberpunk_2077_logo 1.svg';
import RightIcon1 from '../../assets/icons/instagram-square logo.svg';
import RightIcon2 from '../../assets/icons/vk logo.svg';
import RightIcon3 from '../../assets/icons/youtube logo.svg';
import RightIcon4 from '../../assets/icons/telegram.svg';

interface Icon {
    src: string;
    link: string;
}

const rightIcons: Icon[] = [
    { src: RightIcon1, link: 'https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fcyberpunkgame%2F&is_from_rle' },
    { src: RightIcon2, link: 'https://vk.com/cyberpunkgame' },
    { src: RightIcon3, link: 'https://www.youtube.com/channel/UC4zyoIAzmdsgpDZQfO1-lSA' },
    { src: RightIcon4, link: 'https://www.cyberpunk.net/ru/news/49753/obshchaites-kak-kiberpank-so-stikerami-v-telegram' }
];

const Header: React.FC = () => {
    return (
        <header className={classes.headerCyber}>

             <a href="https://www.cyberpunk.net" target="_blank" rel="noopener noreferrer">
                <img src={LeftIcon} alt="Left Icon" className={classes.leftIcon} />
            </a>

            <div className={classes.rightIcons}>
                {
                    rightIcons.map((icon, index) => <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
                    <img src={icon.src} alt={`Right Icon ${index + 1}`} className={classes.rightIcon} />
                </a>)
                }
            </div>

        </header>
    );
};

export default Header;