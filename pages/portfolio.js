import Head from "next/head";
import Layout from "../components/layouts/layout";
import Banner from "../components/portfolioPageComponent/banner/banner";
import ServicesList from "../components/services/services";
import Cto from "../components/cto/cto";
import PageTitle from "../components/pagetitle/pagetitle";
import SaPortfolio from "../components/saportfolio/saportfolio";



export default function Services(props) {
    return (
        <>
            <Head>
                <title>Portfolio</title>
            </Head>
            <Layout>
                <PageTitle title={"Portfolio"} />
                <Banner />
                <SaPortfolio />
                <Cto />
            </Layout>

        </>
    )
}