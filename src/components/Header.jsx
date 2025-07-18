import { Link } from "react-router";  
import styles from "./Header.module.css";
import { ShoppingBasket } from "lucide-react";

export default function Header({ cart }) {
  return (
    <div className={styles.header}>
      <Link to="/"><h1 className={styles.phrase}>TRJ MEGASTORE</h1></Link>
        <div className={styles.cart}>
        <Link to="/cart"><ShoppingBasket size={24} /></Link>
        <p>
          Total $: {cart.reduce((total, product) => total + product.price, 0).toFixed(2)}
        </p>
        </div>
    </div>
  );
}
