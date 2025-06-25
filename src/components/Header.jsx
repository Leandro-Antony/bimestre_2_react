import styles from './Header.module.css'
import tomato from "../assets/tomato.png"

export default function Header({children}) {
    return (
        <div className={styles.header}>
            <img className={styles.img} src={tomato} alt="Tomato" />
            <h1 className={styles.phrase}>{children}</h1>
        </div>
    )
    }