import styles from "./Product.module.css";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function Product({ product, addToCart }) {
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(0);

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
            <button>-</button>
            <p>{qty}</p>
            <button>+</button>
          </div>
        )}
      </div>
      <button
        className={styles.btn}
        onClick={() => {
          addToCart(product);
          setAdded(true);
          setQty(qty + 1);
        }}
      >
        ADD TO CART <ShoppingCart></ShoppingCart>
      </button>
    </div>
  );
}
