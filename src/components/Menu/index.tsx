import styles from './styles.module.css'

export default function Menu() {

    return (
        <nav className={styles.nav}>
        <a href='/home' className={styles.link}>Home</a>
        <a href='/contato' className={styles.link}>Contato</a>
        <a href='https://www.mercadolivre.com.br/' target='_blank' className={styles.link}>Mercado Livre</a>
        </nav>
    )

}