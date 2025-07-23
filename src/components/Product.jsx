import styles from "./Product.module.css";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function Product({ product, addToCart, removeFromCart }) {
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(0);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setQty(qty + 1);
  };

  const handleRemove = () => {
    if (qty > 1) {
      removeFromCart(product);
      setQty(qty - 1);
    } else if (qty === 1) {
      removeFromCart(product);
      setQty(0);
      setAdded(false);
    }
  };

  return (
    <div className={styles.product}>
      <img
        src={product.thumbnail}
        alt={product.title}
      />
      <h2 className={styles.productTitle}>{product.title}</h2>
      <p className={styles.productDescription}>{product.description}</p>
      <div className={styles.productQty}>
        <p className={styles.productPrice}>${product.price}</p>
        {added && (
          <div className={styles.productQty}>
            <button onClick={handleRemove}>-</button>
            <p>{qty}</p>
            <button onClick={handleAdd}>+</button>
          </div>
        )}
      </div>
      <button
        className={styles.btn}
        onClick={handleAdd}
      >
        ADD TO CART <ShoppingCart />
      </button>
    </div>
  );
}

