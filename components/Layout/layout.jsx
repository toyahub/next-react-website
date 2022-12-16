import Header from 'components/Header/header'
import Footer from 'components/Footer/footer'
export default function Layout({ children }) {
    return (
        <>
            <Header />

            <main>{children}</main>

            <Footer />
        </>
    )
}