import Container from 'components/Container/container'
import Logo from '../Logo/logo'
import Nav from '../Nav/nav'
import styles from 'components/Header/header.module.css'

export default function Header() {
    return (
        <header>
            <Container large>
            <div className={styles.flexContainer}>
        <Logo boxOn />
            <Nav />
            </div>
            </Container>
    </header>
    )
}