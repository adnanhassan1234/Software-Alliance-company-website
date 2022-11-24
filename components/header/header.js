import Link from "next/link";
import Logo from "../logo/logo";
import Nav from "../nav/nav";
import styles from './header.module.scss';
import Image from "next/image";


export default function Header() {
    return (
        <header id={styles.header}>
            <div className={"container"}>
                <div className={styles.headerBtn}>
                    <Link href={"#"}>
                        <a className={"btn m-1 inline-block py-3 px-5"}>Login</a>
                    </Link>
                    <Link href={"#"}>
                        <a className={"btn btn-light py-3 px-5 rounded-md m-1 inline-block hover:bg-red-700 hover:text-white"}>Become a partner</a>
                    </Link>
                    <Link href={"#"}>
                        <a className={"btn btn-light inline-block py-3 px-5 rounded-md m-1 hover:bg-red-700 hover:text-white"}>Hire developers</a>
                    </Link>
                </div>
                <Logo>
                    <Image
                        priority
                        src={"/images/logo.svg"}
                        alt={"Software Alliance Logo"}
                        width={178}
                        height={40}
                    />
                </Logo>


                <Nav />


            </div>
        </header>
    )
}