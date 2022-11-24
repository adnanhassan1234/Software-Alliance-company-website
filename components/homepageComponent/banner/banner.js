import styles from './banner.module.scss';
import Image from 'next/image';
import Link from "next/link";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={"container"}>
                <div className={"columns-1 md:columns-2 md:flex items-center"}>
                    <div className={`${styles.textBox} ${styles.col}`}>
                        <div className={"text-sm text-red-700 font-semibold mb-3"}>AWS FOR HIRING ENGINEERS</div>
                        <h1 className={"text-2xl xs:text-4xl md:text-5xl lg:text-6xl font-bold mb-3"}>Instantly add
                        <div className={"text-red-700"}>Java</div>
                        developers to
                        your team.</h1>
                        <p className={"mb-3"}>Software Alliance helps tech companies extend their engineering
                            teams by leveraging a network of 25,000+
                            vetted contractors from hundreds of development agencies
                            across the world.</p>
                        <Link href={"#"}>
                            <a className={"btn rounded-md bg-red-700 text-white px-5 py-3 hover:bg-red-600"}>Hire developers</a>
                        </Link>
                    </div>
                    <div className={`${styles.imgBox} ${styles.col}`}>
                        <img className="w-full" src="/images/banner01.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}