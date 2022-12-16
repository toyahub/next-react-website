import Link from "next/link";
import styles from 'components/Nav/nav.module.css'

export default function Nav() {
    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        blog
                    </Link>
                </li>
            </ul>
        </nav>
    )
}