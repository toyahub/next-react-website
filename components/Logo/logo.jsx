import Link from 'next/link';

export default function Logo({ boxOn = false}) {
    return (
        <Link href="/">
            <a className={boxOn ? StyleSheet.box : StyleSheet.basic}>CUBE</a>
        </Link>
    )
}