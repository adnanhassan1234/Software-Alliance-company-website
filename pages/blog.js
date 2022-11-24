import Head from "next/head";
import Layout from "../components/layouts/layout";
import PageTitle from "../components/pagetitle/pagetitle";
import FeaturedBlog from "../components/blogs/featuredBlog/featuredBlog";



export default function Services(props) {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <Layout>
                <PageTitle title={"Blog"} />
                <FeaturedBlog />
            </Layout>

        </>
    )
}