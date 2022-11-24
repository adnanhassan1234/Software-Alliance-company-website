import Head from "next/head";
import Layout from "../components/layouts/layout";
import Banner from "../components/servicesPageComponent/banner/banner";
import ServicesList from "../components/services/services";
import Cto from "../components/cto/cto";
import PageTitle from "../components/pagetitle/pagetitle";



export default function Services(props) {
    return (
        <>
            <Head>
                <title>Services</title>
            </Head>
            <Layout>
                <PageTitle title={"services"} />
                <Banner />
                <ServicesList />
                <Cto />
            </Layout>

        </>
    )
}