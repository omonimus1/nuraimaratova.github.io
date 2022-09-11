import Layout from "../components/layout";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

export default function AnotherPage() {
    let { t } = useTranslation();
    return (
        <Layout>
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>{t("about:title")}</h1>
            <h2>
                {t("about:introduction", {
                    name: "Nurai",
                    age: 24,
                })}
            </h2>
            <div>
                {t("about:description")}
            </div>
        </Layout>
    );
}
