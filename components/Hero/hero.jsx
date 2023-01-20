import styles from 'components/Hero/hero.module.css'
import Image from 'next/image'
import cube from 'images/cube.jpg'

export default function Hero({ title, subtitle, imageOn = false }) {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
                <p className={styles}>{subtitle}</p>
            </div>
            {imageOn && (
                <figure>
                    <Image src={cube} alt="" layout="responsive" />
                </figure>)}
        </div>
    )
}