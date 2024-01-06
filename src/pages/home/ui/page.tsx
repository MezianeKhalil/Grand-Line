import { Navbar, Header, Features, Footer, Codebase } from "./components"
import { Head } from '@/shared/ui/head'

export default function Home () {
    return (
        <>
            <Head>
                <title>Grand Line | Home</title>
            </Head>
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
