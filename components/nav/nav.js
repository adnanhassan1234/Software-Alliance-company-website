import Link from "next/link";
import styles from './nav.module.scss';


export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/aboutus"}>Company</Link></li>
                <li><Link href={"/"}>Hire Developers</Link></li>
                <li><Link href={"/services"}>Services</Link></li>
                <li><Link href={"/contactus"}>Contact Us</Link></li>
            </ul>
        </nav>
    )
}