import Container from 'components/Container/container'
import Logo from '../Logo/logo'
import styles from 'components/Footer/footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <Container>
            <div className={styles.flexContainer}>
                <Logo />
                [ソーシャル]
                </div>
                </Container>
        </footer>
    )
}