import styles from "./Cart.module.css";

export default function Cart({ cart }) {
  return (
    <>
    <h2>Shopping Cart</h2>
    <div className={styles.container}>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className={styles.cart}>
          {cart.map((product, index) => (
            <li key={index}>
              <div className={styles.product}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
              </div>
            </li>
          ))
          }
        </ul>
      )}
    </div>
    </>
  );
}