import styles from "./Cart.module.css";
import { ArrowBigRightDash } from "lucide-react";

export default function Cart({ cart }) {
  return (
    <>
    <h2>Shopping Cart</h2>
    <div className={styles.container}>
      {cart.length === 0 ? (
        <p className={styles.empty}>Seu setup tá pedindo um upgrade!</p>
      ) : (
        <>
        <div className={styles.track}>
          <h3> Carrinho <ArrowBigRightDash /> Endereço <ArrowBigRightDash />Entrega <ArrowBigRightDash /> Pagamento <ArrowBigRightDash /> Confirmação <ArrowBigRightDash /> Concluir</h3>
        </div>

        <ul className={styles.cart}>
          {cart.map((product, index) => (
            <li key={index}>
              <div className={styles.product}>
              <img className={styles.image} src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
              </div>
              <div>
                <h3>Quantidade</h3>
                <div className={styles.quantity}>
                </div>
              </div>
            </li>
          ))
          }
        </ul>
        </>
      )}
    </div>
    </>
  );
}