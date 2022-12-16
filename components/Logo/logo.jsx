import Link from 'next/link';
import styles from 'components/Logo/logo.module.css'

export default function Logo({ boxOn = false}) {
    return (
        <Link className={boxOn ? styles.box : styles.basic} href="/">
           CUBE
        </Link>
    )
}