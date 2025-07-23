import styles from "./Cart.module.css";
import { Link } from "react-router";
import {
  ArrowBigRightDash,
  Minus,
  Plus,
  Trash2,
  NotebookPen,
} from "lucide-react";

export default function Cart({ cart, onQuantityChange, onRemove }) {
  return (
    <>
      <h2>Shopping Cart</h2>
      <div className={styles.container}>
        {cart.length === 0 ? (
          <p className={styles.empty}>Seu setup tá pedindo um upgrade!</p>
        ) : (
          <>
            <div className={styles.track}>
              <h3>Carrinho</h3> <ArrowBigRightDash />
              <h3>Endereço</h3> <ArrowBigRightDash />
              <h3>Entrega</h3> <ArrowBigRightDash />
              <h3>Pagamento</h3> <ArrowBigRightDash />
              <h3>Confirmação</h3> <ArrowBigRightDash />
              <h3>Concluir</h3>
            </div>

            <div className={styles.container2}>
              <ul className={styles.cart}>
                {cart.map((product, index) => (
                  <li key={index}>
                    <div className={styles.product}>
                      <img
                        className={styles.image}
                        src={product.thumbnail}
                        alt={product.title}
                      />
                      <h3 className={styles.title}>{product.title}</h3>
                      <p className={styles.price}>
                        ${product.price.toFixed(2)}
                      </p>
                      <div className={styles.quantityContainer}>
                        <h3 className={styles.h3qtd}>Quantidade:</h3>
                        <div className={styles.quantity}>
                          <button
                            onClick={() =>
                              onQuantityChange(product.id, product.quantity - 1)
                            }
                            disabled={product.quantity <= 1}
                          >
                            <Minus size={20} />
                          </button>
                          <h3>{product.quantity}</h3>
                          <button
                            onClick={() =>
                              onQuantityChange(product.id, product.quantity + 1)
                            }
                          >
                            <Plus size={20} />
                          </button>
                          <button
                            onClick={() => onRemove(product.id)}
                            className={styles.removeBtn}
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className={styles.summary}>
                <div className={styles.resumo}>
                  <div className={styles.resume}>
                    <NotebookPen /> <h3>Resumo</h3>
                  </div>{" "}
                  <br />
                  <br />
                  <p>
                    Valor dos produtos: $
                    {cart
                      .reduce(
                        (acc, product) =>
                          acc + product.price * product.quantity,
                        0
                      )
                      .toFixed(2)}
                  </p>{" "}
                  <br />
                  <p>
                    Valor do frete: {cart.length > 0 ? "Grátis" : "R$ 0,00"}
                  </p>{" "}
                  <br />
                  <p>
                    <strong>
                      Valor no PIX: $
                      {(
                        cart.reduce(
                          (acc, product) =>
                            acc + product.price * product.quantity,
                          0
                        ) * 0.9
                      ).toFixed(2)}
                    </strong>
                    <span> (10% de desconto)</span>
                  </p>
                </div>
                <div className={styles.continue}>
                  <h1 id={styles.continueBtn}>
                    <strong>CONTINUAR</strong>
                  </h1>
                  <Link className={styles.continue} to="/cart">
                    <h1>
                      <strong>VOLTAR</strong>
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
