import '../styles/globals.css'
import Head from "next/head";

const MyApp = ({ Component, pageProps })  => (
    <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
    </>
)

export default MyApp
