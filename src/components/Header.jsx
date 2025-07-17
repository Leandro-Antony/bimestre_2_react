import styles from "./Header.module.css";

export default function Header({ cart }) {
  return (
    <div className={styles.header}>
      <h1 className={styles.phrase}>TRJ MEGASTORE</h1>

      <div className={styles.cart}>
        {cart.length > 0 && <p>{cart.length} Products</p>}
        <p>
          Total $: {cart.reduce((total, product) => total + product.price, 0).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
