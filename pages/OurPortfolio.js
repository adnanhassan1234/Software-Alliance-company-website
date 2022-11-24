import Head from "next/head";
import Layout from "../components/layouts/layout";
import OurPortfolioData from '../components/ourPortFolioPage/OurPortfolioData';


export default function OurPortfolio(props) {
    return (
        <>
            <Head>
                <title>Our Portfolio</title>
            </Head>
            <Layout>
                <OurPortfolioData />
            </Layout>

        </>
    )
}





