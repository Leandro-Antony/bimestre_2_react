import { useState } from "react";
import styles from "./LuckyNumber.module.css";

export default function LuckyNumber() {
  const [luckynumber, setLuckyNumber] = useState(0); //useState pede o valor inicial da variável
  const [array, setArray] = useState([]); // Estado para armazenar o array de números sorteados
  
  function handleClick() {
    const newNumber = Math.floor(Math.random() * 40) + 1;

    if (array.includes(newNumber)) {
      alert(`Número ${newNumber} já sorteado, tente novamente!`); // Verifica se o número já foi sorteado      
    } else {
      setLuckyNumber(newNumber)
      setArray([...array, newNumber]); // Adiciona o número sorteado ao array
    }
  }

  return (
    <div className={styles.container}>
      {luckynumber === 0 ? (
        <h1>Lucky Number 🎲</h1>
      ) : (
        <h1>Lucky Number = {luckynumber}</h1>
      )}
      <button className={styles.button} onClick={handleClick}>
        Acho que estou com sorte hoje
      </button>

      <h3 className={styles.sorted}>Números sorteados:</h3>
      <p>[{array.toString()}]</p>

    </div>
  );
}
