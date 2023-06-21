import "../css/Nav.css";
import { Noto_Sans } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Nav() {
  return (
    <div className="container">
      <div className="navbar">
        <img src="./joyko.png" alt="Joyko Logo" />
        <nav>
          <ul className={noto_sans.className}>
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <div className="shopping--links">
          <span className={`${noto_sans.className} register--button`}>
            Register Now
          </span>
          <div className="shoppingcart">
            <FontAwesomeIcon icon={faCartShopping} color="#44BB9F" />
          </div>
        </div>
      </div>
    </div>
  );
}
