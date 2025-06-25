import styles from './card.module.css';

export default function Card({src, title, children}) {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={src} alt="" />
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.txt}>{children}</p>
        </div>
    )
}

