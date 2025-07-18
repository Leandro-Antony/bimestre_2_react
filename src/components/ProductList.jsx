import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";
import CircularProgress from '@mui/material/CircularProgress';
import { ShoppingCart } from 'lucide-react';

export function ProductList({ product, addToCart }) {
  const category = "laptops";
  const limit = 12;
  const apiURL = `https://dummyjson.com/products/category/${category}?limit=${limit}&select=id,thumbnail,title,price,description,stock`;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(0);

  
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.items}>
      {products.map((product) => (
        <div key={product.id} className={styles.product}>
          <img src={product.thumbnail} alt={product.title} />
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>R$ {product.price.toFixed(2)}</p>
          {added && (
            <div className={styles.productQty}>
              <button>-</button>
              <p>{qty}</p>
              <button>+</button>
            </div>
          )}

          <button className={styles.btn} onClick={() => {
            addToCart(product);
            setAdded(true);
            setQty(qty + 1);
          }}>ADD TO CART <ShoppingCart /></button>
        </div>
      ))}
      </div>

      {loading && (
        <div>
            <CircularProgress
            size="10rem"
            thickness={5}
            style={{ margin: "2rem auto", display: "block" }}
            sx={{
                color: "#001111",
            }}/>
            <p>Loading products...</p>
        </div>
      )
      }
    </div>
  );
}
