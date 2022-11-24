import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout({ children }) {
    return <div id='wrapper'>
        <Header />
        <main id={"main"}>
            {children}
        </main>
        <Footer />
    </div>;
}
