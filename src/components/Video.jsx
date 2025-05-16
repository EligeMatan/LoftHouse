import '@/styles/scss/global.scss';
import styles from '@/styles/scss/Video.module.scss';

export default function Video() {
  return (
    <section className={styles.Video}>
      {/* <video src="https://youtu.be/u9Dg-g7t2l4?list=RDu9Dg-g7t2l4"></video> */}
      <iframe
        src="https://www.youtube.com/embed/u9Dg-g7t2l4?list=RDu9Dg-g7t2l4"
        title="Disturbed  - The Sound Of Silence (Official Music Video) [4K UPGRADE]"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
    </section>
  );
};
