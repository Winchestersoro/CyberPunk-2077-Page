
import classes from './InfoForm.module.css';
const InfoForm = () => {
    return (
        <div className={classes.InfoForm}> 
            <p className={classes.Text}>Доступно на <br /> всех платформах</p>
            <a href="https://www.cyberpunk.net"  rel="noopener noreferrer">
            <button className={classes.Button}>Узнать больше</button>
            </a>
        </div>
    );
};

export default InfoForm;