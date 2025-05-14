import styles from '@/styles/scss/Header.module.scss';
import logo from '@/assets/first-screen__logo.png';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.logoBlock}>
        <img src={logo} alt="Логотип" />
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><a href='#'>Про комплекс</a></li>
          <li><a href='#'>Район</a></li>
          <li><a href='#'>Каталог квартир</a></li>
          <li><a href='#'>Іпотека</a></li>
          <li><a href='#'>Контакти</a></li>
        </ul>
      </nav>
    </header>
  );
}
