import Logo from '../Logo/logo'
import Nav from '../Nav/nav'
import styles from 'components/Header/header.module.css'

export default function Header() {
    return (
        <header>
            <div className={styles.flexContainer}>
        <Logo boxOn />
            <Nav />
        </div>
    </header>
    )
}