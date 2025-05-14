import Header from '@/components/Header';
import styles from '@/styles/scss/FirstScreen.module.scss';
import mouse from '@/assets/mouse.png';
import { GeoAlt } from 'react-bootstrap-icons';
import { Telephone } from 'react-bootstrap-icons';


export default function FirstScreen() {
    return (
        <section className={styles.FirstScreen}>
            <Header />
            <div className={styles.content}>
                <h1>Жилий комплекс в історичному центрі</h1>
                <img src={mouse} alt="click ^_^" />

                <div className={styles.contacts}>
                    <span><GeoAlt/> вулиця Межигірська, 78</span>
                    <span><Telephone/> +38 (063) 652-26-18</span>
                </div>
            </div>
        </section>
    )
}