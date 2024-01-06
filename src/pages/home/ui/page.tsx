import { Navbar, Header, Features, Footer, Codebase } from "./widgets"
import { Head } from '@/shared/ui/head'
import { BRAND_NAME } from "@/shared/constants"

export default function Home () {
    return (
        <>
            <Head>
                <title>{BRAND_NAME} | Home</title>
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
