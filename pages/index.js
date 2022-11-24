import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import Layout from "../components/layouts/layout";
import Home from "./home";

export default function MainScreen() {
  return (
      <Layout>
          <Home />
      </Layout>
  )
}
