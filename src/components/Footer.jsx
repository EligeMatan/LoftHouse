import '@/styles/scss/global.scss';
import styles from '@/styles/scss/Footer.module.scss';
import logo from '@/assets/first-screen__logo.png';
import { Youtube } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Facebook } from 'react-bootstrap-icons';

export default function Footer() {

    const handleLinkClick = (event) => {
        alert('Замовник ще не надав макет по цій сторінці ;)')
    }

    return (
        <footer className={styles.Footer}>
            <img src={logo} alt="Логотип" />
            <ul className={styles.navList}>
                <li><a href='#' onClick={handleLinkClick}> Про комплекс</a></li>
                <li><a href='#geoplace'> Район</a></li>
                <li><a href='#' onClick={handleLinkClick}> Каталог квартир</a></li>
                <li><a href='#' onClick={handleLinkClick}> Іпотека</a></li>
                <li><a href='#contacts'> Контакти</a></li>
            </ul>

            <ul className="serviceList">
                <li><a href='#' onClick={ handleLinkClick }>Поселення та переїзд</a></li>
                <li><a href='#' onClick={ handleLinkClick }>Сервісні послуги</a></li>
                <li><a href='#' onClick={ handleLinkClick }>Екологічна стійкість</a></li>
                <li><a href='#' onClick={ handleLinkClick }>Інвестиційні можливості</a></li>
                <li><a href='#' onClick={ handleLinkClick }>Програма лояльності</a></li>
            </ul>

            <ul id='#contacts' className="contactList">
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