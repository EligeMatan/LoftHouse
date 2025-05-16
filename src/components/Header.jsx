import '@/styles/scss/global.scss';
import styles from '@/styles/scss/Header.module.scss';
import logo from '@/assets/first-screen__logo.png';

export default function Header() {
  
  const handleLinkClick = (event) => {
    alert('Замовник ще не надав макет по цій сторінці ;)')
  } 

  return (
    <header className={styles.Header}>
      <div className={styles.logoBlock}>
        <img src={logo} alt="Логотип" />
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><a href='#' onClick={ handleLinkClick }> Про комплекс</a></li>
          <li><a href='#geoplace'> Район</a></li>
          <li><a href='#' onClick={ handleLinkClick }> Каталог квартир</a></li>
          <li><a href='#' onClick={ handleLinkClick }> Іпотека</a></li>
          <li><a href='#contacts'> Контакти</a></li>
        </ul>
      </nav>
    </header>
  );
}
