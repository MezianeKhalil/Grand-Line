import { Navbar, Header, Features, Footer, Codebase } from "./components"

export default function Home () {
    return (
        <>
            <Navbar />
            <Header />
            <main>
                <Features />
                <Codebase />
            </main>
            <Footer />
        </>
    )
}
