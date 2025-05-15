import '@/styles/scss/global.scss';
import styles from '@/styles/scss/Footer.module.scss';
import logo from '@/assets/first-screen__logo.png';
import { Youtube } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Facebook } from 'react-bootstrap-icons';

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <img src={logo} alt="Логотип" />
            <ul className={styles.navList}>
                <li>Про комплекс</li>
                <li>Район</li>
                <li>Каталог квартир</li>
                <li>Іпотека</li>
                <li>Контакти</li>
            </ul>

            <ul className="serviceList">
                <li>Поселення та переїзд</li>
                <li>Сервісні послуги</li>
                <li>Екологічна стійкість</li>
                <li>Інвестиційні можливості</li>
                <li>Програма лояльності</li>
            </ul>

            <ul className="contactList">
                <li>Адреса: вулиця Межигірська, 78</li>
                <li>Телефон: +38 063 652-26-18</li>
                <li>Відділ продажів: 10:00 - 20:00</li>
                <li>E-mail: vip@lofthouse.ua</li>
                <li className={styles.liSocial}>
                    <a href='https://www.youtube.com/'><Youtube /></a>
                    <a href='https://www.facebook.com/'><Facebook /></a>
                    <a href='https://www.instagram.com/'><Instagram /></a>
                </li>
            </ul>
        </footer>
    )
}