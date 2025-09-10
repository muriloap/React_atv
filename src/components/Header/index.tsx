import Logo from '../Logo';
import styles from './styles.module.css'
import Menu from "@/components/Menu";


export default function Header() {

    return (
        <header className={styles.header}>
        <Logo/>
        <Menu/>
        </header>
    )

}