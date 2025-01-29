import {useForm } from 'react-hook-form';
import styles from './InputForm.module.css';

interface IFormInput {
    name: string;
    email: string;
    consent: boolean;
}


const InputForm = () => {

    const { register, handleSubmit, reset } = useForm <IFormInput> ();

    const onSubmit = (data: IFormInput) => {
        console.log(`Name: ${data.name}, Email: ${data.email}`);
        reset();
    };

    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputGroup}>
                    <input
                        type="text"
                        id="name"
                        placeholder=" "
                        {...register('name', { required: true })}
                    />
                    <label htmlFor="name">Имя:</label>
                </div>

                <div className={styles.inputGroup}>
                    <input
                        type="email"
                        id="email"
                        placeholder=" "
                        {...register('email', { required: true })}
                    />
                    <label htmlFor="email">Email:</label>
                </div>

                <div className={styles.checkboxGroup}>
                    <input
                        type="checkbox"
                        id="consent"
                        {...register('consent', { required: true })}
                    />
                    <label htmlFor="consent">Я согласен на обработку данных</label>
                </div>

                <button className={styles.button} type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default InputForm;