import styles from './footer.module.css'
import { Github } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { MessageCircle } from 'lucide-react'

export default function Footer({txt, nome, github, instagram, whatsapp}) {
    return (
        <>
        <footer className={styles.footer}>
            <p className={styles.txt}>{txt}</p>
            <h3 className={styles.nome}>{nome}</h3>
            <div className={styles.icons}>
                <a href={github} className={styles.link}><Github color='var(--color-background-darker)' /></a>
                <a href={instagram} className={styles.link}><Instagram color='var(--color-background-darker)' /></a>
                <a href={whatsapp} className={styles.link}><MessageCircle color='var(--color-background-darker)' /></a>
            </div>

        </footer>
        </>
    )
}

