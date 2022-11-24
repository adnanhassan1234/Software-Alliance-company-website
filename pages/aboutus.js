import Head from "next/head";
import Layout from "../components/layouts/layout";
import Cto from "../components/cto/cto";
import PageTitle from "../components/pagetitle/pagetitle";
import Banner from "../components/aboutusPageComponent/banner/banner";
import Reviews from "../components/reviews/reviews";
import StatCounter from "../components/statcounter/statcounter";
import LogoSlider from "../components/logoslider/logoslider";



export default function Services(props) {
    return (
        <>
            <Head>
                <title>Services</title>
            </Head>
            <Layout>
                <PageTitle title={"About Us"} />
                <Banner />
                <StatCounter />
                <LogoSlider />
                <Reviews />
                <Cto />
            </Layout>

        </>
    )
}