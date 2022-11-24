import Link from "next/link";

export default function Cto() {
    return(
        <section className={"py-10"}>
            <div className={"container"}>
                <div className={"py-14 bg-center bg-cover rounded-xl"} style={{backgroundImage: `url(images/bg1.jpg)`}}>
                    <div className={"text-white text-center py-15"}>
                        <h2 className={"text-xl font-bold mb-5"}>Tell us about your plans on a brief intro call and we’ll start the matching process.</h2>
                        <Link href={"#"}>
                            <a className={"btn rounded-md bg-white text-black inline-block px-5 py-3 hover:bg-red-600 hover:text-white"}>Hire developers</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}