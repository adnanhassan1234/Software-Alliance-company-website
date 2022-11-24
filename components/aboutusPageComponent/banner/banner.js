import styles from './banner.module.scss';
import Image from 'next/image';
import Link from "next/link";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={"container"}>
                <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
                    <div className={`${styles.textBox} ${styles.col} col-span-1`}>
                        <h1 className={"text-2xl xs:text-2xl md:text-4xl lg:text-4xl font-bold mb-3"}>Software Alliance</h1>
                        <p className={"mb-3 text-gray-400"}>Software Alliance is a software development company with
                            over 10 years of experience in the industry. Our global
                            presence speak for our authenticity and value in the IT space.
                            We provide cutting edge IT services to clients all over the
                            world. We have dedicated web and app developers teams in
                            Denmark, UK, UAE and Pakistan who are working to provide
                            the best service ensuring tailor made smart solutions and
                            results for you. Software Alliance ensures Agility, Flexibility
                            and Operational Efficiency through collaboration of business
                            and IT solutions</p>
                    </div>
                    <div className={`${styles.imgBox} ${styles.col} col-span-2`}>
                        <img className="w-full" src="/images/aboutusBanner.svg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}