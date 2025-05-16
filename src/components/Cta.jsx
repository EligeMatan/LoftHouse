import '@/styles/scss/global.scss';
import styles from '@/styles/scss/Cta.module.scss';

export default function Cta() {
    return (
        <section className={styles.Cta}>
            <h1>Бажаєте подивитись?</h1>

            <div className={styles.Wrapper}>
                <p className={styles.PDescribe}>
                    ЖК LoftHouse - це проект бізнес-класу, розташований в центрі міста,
                    на вулиці Межигірська, 78. Комплекс пропонує своїм мешканцям
                    квартири площею від 40 до 170 кв. м. У будівлі буде три секції, в яких
                    розміститься лише 56 квартир.
                </p>

                <div className={styles.GridLayot}>
                    <input placeholder="Ваше ім'я"></input>
                    <input placeholder="Ваш телефон"></input>

                    <p>
                        *Ми нікому не передаємо ваші дані.
                        І не зберігаємо ваш номер у базу.
                    </p>

                    <a className={styles.btnLookRegion} href='#geoplace'>Подивитись район</a>
                </div>
            </div>

        </section>
    );
};
