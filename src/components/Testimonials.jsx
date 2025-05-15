import '@/styles/scss/global.scss';
import styles from '@/styles/scss/Testimonials.module.scss';
import bench from '@/assets/bench.png';
import building from '@/assets/building.png';
import fountain from '@/assets/fountain.png';
import bicycle from '@/assets/bicycle.png';


export default function Testimonials() {
    return (
        <section className={styles.Testimonials}>
            <ul>
                <li>
                    <img src={bench} alt="bench" />
                    <span>Поряд історичні парки та сквери</span>
                </li>
                <li>
                    <img src={building} alt="building" />
                    <span>Повністю облаштований</span>
                </li>
                <li>
                    <img src={fountain} alt="fountain" />
                    <span>10 фонтанів на території</span>
                </li>
                <li>
                    <img src={bicycle} alt="bicycle" />
                    <span>6 км велодоріжок</span>
                </li>
            </ul>
        </section>
    )
}