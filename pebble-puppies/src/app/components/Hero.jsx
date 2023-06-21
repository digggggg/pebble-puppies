import styles from "../css/Hero.module.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Hero() {
  return (
    <div>
      <div className={styles.hero__img}>
        <div className={`${styles.hero__text__container} ${roboto.className}`}>
          <h2 className={styles.hero__h2}>
            Discover the Joy of Pebble Puppies
          </h2>
          <h3 className={styles.hero__h3}>Welcome to Our Playful Universe!</h3>
          <div className={styles.hero__button}>Buy Now</div>
        </div>
      </div>
    </div>
  );
}
