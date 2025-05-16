import '@/styles/scss/global.scss';
import styles from '@/styles/scss/Appartaments.module.scss';
import loftolimp from '@/assets/Loft_Olimp.png';
import niceloft from '@/assets/Nice_Loft.png';
import loftstudio from '@/assets/Loft_Studio.jpg';
import prestizh from '@/assets/Prestizh.jpg';

export default function Appartaments() {
  return (
    <section className={styles.Appartaments}>
      <h1>Наші квартири</h1>

      <div className={styles.ApartmtGrid}>
        <div className={styles.Item}>
          <img src={loftolimp} alt="Loft Olimp" />
          <p>Пентхаус “Loft Олімп”</p>
        </div>

        <div className={styles.Item}>
          <img src={niceloft} alt="Nice Loft" />
          <p>Апартаменти “Nice Loft”</p>
        </div>
        
        <div className={styles.Item}>
          <img src={loftstudio} alt="Loft Studio" />
          <p>Апартаменти “Loft Studio”</p>
        </div>
        
        <div className={styles.Item}>
          <img src={prestizh} alt="Престиж" />
          <p>Loft квартира “Престиж”</p>
        </div>
      </div>
    </section>

  )
};
