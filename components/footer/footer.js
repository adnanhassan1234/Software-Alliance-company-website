import styles from './footer.module.scss';
import Image from "next/image";
import Logo from "../logo/logo";
import ContactList from "../contactlist/contactlist";
import Link from "next/link";
import SocialLinks from "../sociallinks/sociallinks";
import Privacy from '../Privacy';

export default function Footer(props) {
    return(
        <footer id={styles.footer} className={"pt-10 bg-center bg-cover"} style={{backgroundImage: `url(images/footerbg.jpg)`}}>
            <div className={"container"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pb-10 text-white"}>
                    <div className={`md:col-span-2`}>
                        <div className={"overflow-hidden mb-5"}>
                            <Logo>
                                <Image
                                    priority
                                    src={"/images/logo-white.svg"}
                                    alt={"Software Alliance Logo"}
                                    width={178}
                                    height={40}
                                />
                            </Logo>
                        </div>
                        <div className={"text-sm mb-3"}>We are a software development company with over 10 years of experience in the industry. We have dedicated teams in Denmark, UK, UAE and Pakistan.</div>
                        <ContactList />
                    </div>
                    <div className={`p-0 md:pt-20 md:px-3`}>
                        <h4 className={"text-sm font-bold mb-3 md:mb-5"}>Quick Links</h4>
                        <ul className={`${styles.quickLink}`}>
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={"/"}>About us</Link></li>
                            <li><Link href={"/"}>Services</Link></li>
                            <li><Link href={"/portfolio"}>Portfolio</Link></li>
                            <li><Link href={"/privacyPolicy"}>Privacy Policy</Link></li>
                            <li><Link href={"/"}>Terms and Conditions</Link></li>
                        </ul>
                    </div>
                    <div className={`p-0 md:pt-20 md:px-3`}>
                        <h4 className={"text-sm font-bold mb-3 md:mb-5"}>Quick Links</h4>
                        <ul className={`${styles.quickLink}`}>
                            <li><Link href={"/"}>Blockchain Development</Link></li>
                            <li><Link href={"/"}>Software Development</Link></li>
                            <li><Link href={"/"}>Web Design and Development</Link></li>
                            <li><Link href={"/"}>DevOps</Link></li>
                        </ul>
                    </div>
                    <div className={`p-0 md:pt-20 md:px-3`}>
                        <h4 className={"text-sm font-bold mb-3 md:mb-5"}>About Us</h4>
                        <ul className={`${styles.quickLink}`}>
                            <li><Link href={"/"}>What we do</Link></li>
                            <li><Link href={"/"}>Vision</Link></li>
                            <li><Link href={"/"}>Mission</Link></li>
                            <li><Link href={"/"}>Values</Link></li>
                            <li><Link href={"/ourteam"}>TeamDev</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.copyRight} grid grid-cols-1 md:grid-cols-2 gap-4 py-5 text-white`}>
                    <div>
                        Copyright All Right Reserved 2022, <strong><Link href={"/"}>Software Alliance</Link></strong>
                    </div>
                    <div>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </footer>
    )
}