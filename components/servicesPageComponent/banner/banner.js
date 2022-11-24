import styles from './banner.module.scss';
import Image from 'next/image';
import Link from "next/link";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={"container"}>
                <div className={"columns-1 md:columns-2 md:flex items-center"}>
                    <div className={`${styles.textBox} ${styles.col}`}>
                        <h1 className={"text-2xl xs:text-2xl md:text-4xl lg:text-4xl font-bold mb-3"}>What We Offer</h1>
                        <p className={"mb-3"}>We don't just build IT solutions, we build a positive client
                            relationship by going hand in hand with our customers to
                            ensure the smooth execution of implemented solutions.
                            We offer a wide range of IT services including all modern
                            technologies like Blockchain, DevOps, Games
                            Development as well as good old fashioned web
                            technologies.    </p>
                    </div>
                    <div className={`${styles.imgBox} ${styles.col}`}>
                        <img className="w-full" src="/images/servicesBanner.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}