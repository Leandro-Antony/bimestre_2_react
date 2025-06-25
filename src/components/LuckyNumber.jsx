
import { useState } from "react";
import styles from "./LuckyNumber.module.css";
import { LucideCuboid } from "lucide-react";

export default function LuckyNumber() {
  const [luckynumber, setLuckyNumber] = useState(0);  //useState pede o valor inicial da variável

  function handleClick() {
    setLuckyNumber(Math.floor(Math.random() * 40) + 1); // Incrementa o número da sorte  
    console.log(luckynumber);
  }

  return (
    <div className={styles.container}>
      <h1>Lucky Number = {luckynumber}</h1>
      <button className={styles.button} onClick={handleClick}>
        Acho que estou com sorte hoje
      </button>
    </div>
  );
}
