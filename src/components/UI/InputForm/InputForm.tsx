import { Controller, useForm } from 'react-hook-form';
import styles from './InputForm.module.css';

interface IFormInput {
    name: string;
    email: string;
    consent: boolean;
}

const InputForm = () => {
    const { control, handleSubmit, reset ,  formState: { errors }} = useForm<IFormInput>();

    const onSubmit = (data: IFormInput) => {
        console.log(`Name: ${data.name}, Email: ${data.email}`);
        reset();
    };

    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputGroup}>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Имя обязательно для заполнения' }}
                        render={({ field }) => (
                            <input
                                type="text"
                                id="name"
                                placeholder=" "
                                {...field}
                            />
                        )}
                    />
                    <label htmlFor="name">Имя:</label>
                    {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                </div>

                <div className={styles.inputGroup}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={ { required: 'Email обязателен для заполнения' }}
                        render={({ field }) => (
                            <input
                                type="email"
                                id="email"
                                placeholder=" "
                                {...field}
                            />
                        )}
                    />
                    <label htmlFor="email">Email:</label>
                    {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                </div>

                <div className={styles.checkboxGroup}>
                    <div className={styles.checkbox}>
                        <Controller
                            name="consent"
                            control={control}
                            defaultValue={false}
                            rules={{ required: 'Необходимо согласие на обработку данных' }}
                            render={({ field }) => (
                            <input
                                type="checkbox"
                                id="consent"
                                checked={field.value}
                                onChange={(e) => field.onChange(e.target.checked)}
                            />
                        )}
                        />
                    <label htmlFor="consent">Я согласен на обработку данных</label>
                    </div>
                    
                    
                    {errors.consent && <span className={styles.error}>{errors.consent.message}</span>}
                </div>

                <button className={styles.button} type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default InputForm;