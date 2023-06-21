import styles from "../css/Nav.module.css";
import { Noto_Sans } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Nav() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <img className={styles.logo} src="/joyko.png" alt="Joyko Logo" />
        <nav>
          <ul className={`${noto_sans.className} ${styles.navlist}`}>
            <li className={styles.nav__list__elements}>Home</li>
            <li className={styles.nav__list__elements}>Products</li>
            <li className={styles.nav__list__elements}>About Us</li>
            <li className={styles.nav__list__elements}>Contact Us</li>
          </ul>
        </nav>
        <div className={styles.shopping__links}>
          <span className={`${noto_sans.className} ${styles.register__button}`}>
            Register Now
          </span>
          <div className={styles.shoppingcart}>
            <FontAwesomeIcon icon={faCartShopping} color="#44BB9F" />
          </div>
        </div>
      </div>
    </div>
  );
}
