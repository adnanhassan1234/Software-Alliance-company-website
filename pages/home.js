import Head from "next/head";
import Banner from "../components/homepageComponent/banner/banner";
import Clients from "../components/clients/clients";
import LogoList from "../components/logolist/logolist";
import Team from "../components/team/team";
import HowWork from "../components/howwork/howwork";
import Benefits from "../components/benefits/benefits";
import Reviews from "../components/reviews/reviews";
import Cto from "../components/cto/cto";


export default function Home(props) {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Banner />
            <Clients />
            <LogoList />

            <Team />
            <HowWork />
            <Benefits />
            <Reviews />
            <Cto />
        </>
    )
}