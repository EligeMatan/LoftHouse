import styles from '@/styles/scss/Testimonials.module.scss';
import bench from '@/assets/bench.png';
import building from '@/assets/building.png';
import fountain from '@/assets/fountain.png';
import bicycle from '@/assets/bicycle.png';


export default function Testimonials() {
    return (
        <section className={styles.Testimonials}>
            <img src={bench} alt="bench" />
            <img src={building} alt="building" />
            <img src={fountain} alt="fountain" />
            <img src={bicycle} alt="bicycle" />
        </section>
    )
}