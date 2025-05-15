import '@/styles/scss/global.scss';
import styles from '@/styles/scss/Question.module.scss';

export default function Question() {
    return (
        <section className={styles.Question}>
            <h1>Є питання?</h1>

            <p>
                *Ми нікому не передаємо ваші дані.
                І не зберігаємо ваш номер у базу.
            </p>

            <input placeholder="Ваше ім'я"></input>
            <input placeholder="Ваш телефон"></input>
            <div>Подивитись район</div>
        </section>
    );
};
