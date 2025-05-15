import '@/styles/scss/global.scss';
import styles from '@/styles/scss/Cta.module.scss';

export default function Cta() {
    return (
        <section className={styles.Cta}>
            <h1>Бажаєте подивитись?</h1>
            <p>
                ЖК LoftHouse - це проект бізнес-класу, розташований в центрі міста,
                на вулиці Межигірська, 78. Комплекс пропонує своїм мешканцям
                квартири площею від 40 до 170 кв. м. У будівлі буде три секції, в яких
                розміститься лише 56 квартир.
            </p>

            <input placeholder="Ваше ім'я"></input>
            <input placeholder="Ваш телефон"></input>

            <p>
                *Ми нікому не передаємо ваші дані.
                І не зберігаємо ваш номер у базу.
            </p>

            <div>Подивитись район</div>

        </section>
    );
};
