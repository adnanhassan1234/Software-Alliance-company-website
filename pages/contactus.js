import Head from "next/head";
import FullLayout from "../components/layouts/fulllayout";

export default function ContactUs(){
    return(
       <>
           <Head>
               <title>Contact Us</title>
           </Head>
           <FullLayout>
               <section className={"section"}>
                   <div className={"container"}>
                       <div className={"flex flex-wrap rounded-md bg-white"}>

                       </div>
                   </div>
               </section>
           </FullLayout>
       </>
    )
}