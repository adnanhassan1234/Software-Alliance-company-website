import Head from "next/head";
import Layout from "../components/layouts/layout";
import PageTitle from "../components/pagetitle/pagetitle";
import Banner from '../components/banner';
import OurTeamPortfolio from "../components/OurTeamPortfolio";
import Cto from "../components/cto/cto";



export default function PrivacyPolicy(props) {
    return (
        <>
            <Head>
                <title>Our Team</title>
            </Head>
            <Layout>
               <Banner />
               <OurTeamPortfolio />
               <Cto />
            </Layout>

        </>
    )
}





