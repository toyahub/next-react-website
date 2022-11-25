export default function Hero(props) {
    const { title, subTitle, imageOn } = props;
}

return (
    <div className={StyleSheet.text}>
        <h1 className={StyleSheet.title}>( title )</h1>
        <p className={StyleSheet.subtitle}>(subtitle)</p>
        {imageOn && (
        <figure>
            [画像]
        </figure>
        )}
        <Link href="/about">
            ABOUT
        </Link>
    </div>
)