import styles from './banner.module.scss';
import Image from 'next/image';
import Link from "next/link";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={"container"}>
                <div className={"columns-1 md:columns-2 md:flex items-center"}>
                    <div className={`${styles.textBox} ${styles.col}`}>
                        <div className={"text-sm text-red-700 font-semibold mb-3"}>Hiring Developers</div>
                        <h1 className={"text-xl xs:text-2xl md:text-5xl lg:text-6xl font-bold mb-3"}>Find
                            <span className={"text-red-600"}> <p>remote developers</p> </span>
                            that you can trust</h1>
                        <p className={"mb-3 tick"}>
                            <ul>
                                <li>
                                    <div className="flex developer_varified">
                                        <img src="/images/tick.png" className='rounded h-5 w-5' alt="" />
                                        <div className="mb-3">
                                            <p> &nbsp; 25000+ Verified Developers</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex developer_varified">
                                        <img src="/images/tick.png" className='rounded h-5 w-5' alt="" />
                                        <div className="mb-3">
                                            <p> &nbsp; 48-hour matching</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex developer_varified">
                                        <img src="/images/tick.png" className='rounded h-5 w-5' alt="" />
                                        <div className="mb-3">
                                            <p> &nbsp; 1.75 interview-to-hire ratio</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </p> <br />
                        <Link href={"#"}>
                            <a className={"btn rounded-md bg-red-700 text-white px-5 py-3 hover:bg-red-600"}>Hire developers</a>
                        </Link>
                    </div>
                    <div className={`${styles.imgBox} ${styles.col}`}>
                        <img className="w-full" src="/images/ourteam.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}