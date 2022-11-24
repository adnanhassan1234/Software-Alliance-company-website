import styles from './banner.module.scss';
import Image from 'next/image';
import Link from "next/link";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={"container"}>
                <div className={"grid md:flex items-center"}>
                    <div className={`${styles.textBox} ${styles.col}`}>
                        <h1 className={"text-2xl xs:text-2xl md:text-4xl lg:text-4xl font-bold mb-3"}>Explore Our Awesome Projects</h1>
                        <p className={"mb-3"}>Take a look at some of our recent success stories and you’ll get to know how expertly we can drive your creative ideas. Let’s build something amazing together. Empower your brand and
                            products with modern designs backed with clean codes. We offer top-tier functionality through personalized website design and development solutions. We don’t believe in imitation, rather
                            succeeding in meaningful originality.</p>
                        <p>Our designing masters, development geeks, and SEO wizards are well-versed with contemporary tools and tactics to make your online presence powerful.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}