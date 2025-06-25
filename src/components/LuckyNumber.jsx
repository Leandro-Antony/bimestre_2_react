import { useState } from "react";
import styles from "./LuckyNumber.module.css";

export default function LuckyNumber() {
  const [luckynumber, setLuckyNumber] = useState(0); //useState pede o valor inicial da variável

  let numbers = [];

  function handleClick() {
    setLuckyNumber(Math.floor(Math.random() * 40) + 1); // Incrementa o número da sorte
    numbers.push(luckynumber);  //joga o setluckynumber no push
    console.log(numbers);
    if (numbers.map((num) => num === luckynumber)) {
        document.getElementById("numbers").innerHTML = "Número já sorteado: " + luckynumber;
    } else {
        document.getElementById("numbers").innerHTML = numbers;
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
      <h1 id="numbers"></h1>
    </div>
  );
}
