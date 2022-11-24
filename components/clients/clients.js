import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightLong,
    faPeopleGroup,
    faSackDollar,
} from "@fortawesome/free-solid-svg-icons";

export default function Clients() {
    const client = [
        {
            name: 'pisific',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:
                '/images/pisific.png',
        },
        {
            name: 'johnson&johnson.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:
                '/images/johnson&johnson.png',
        },
        {
            name: 'employmentcare',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:
                '/images/employmentcare.png',
        },
        {
            name: '2Again',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:
                '/images/2again.png',
        },
        {
            name: 'onlinesupplies',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:
                '/images/onlinesupplies.png',
        },
        {
            name: 'LifeSign',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:
                '/images/lifesign.png',
        },

    ]

    return (
        <section className={'section py-10'}>
            <div className={'container'}>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
                    {client.map((client) => (
                        <div className={"rounded-lg shadow relative p-2 md:py-7 text-center "}>
                            <div className={"relative h-12 flex items-center justify-center mb-4"}>
                                <img className={"object-center max-h-12 w-40"} src={client.image} alt="" />
                            </div>
                            <p className={"mb-3"}>{client.text}</p>
                            <Link href={"#"}>
                                <a className={"text-red-700"}>
                                    Read More
                                    <FontAwesomeIcon
                                        icon={faArrowRightLong}
                                        className={"mx-2 text-xs"}
                                    />
                                </a>
                            </Link>

                        </div>
                    ))}
                </div>
                <div className={"py-10"}>
                    <div className={"columns-1 md:columns-2"}>
                        <div className={"p-2 md:py-2"}>
                            <div className={"bg-red-700 p-3 md:px-5 py-10 text-center text-white rounded-md"}>
                                <div className={"relative m-auto text-2xl w-14 h-14 rounded-full bg-white text-red-700 flex items-center justify-center mb-3"}>
                                    <FontAwesomeIcon icon={faPeopleGroup} />
                                </div>
                                <h3 className={"text-sm md:text-xl text-white mb-3"}>Dedicated Hiring</h3>
                                <p className={"mb-3"}>Build your own team by selecting, hiring, and managing highly skilled
                                    software developers and IT experts on a long-term basis. This model is
                                    intended to help you find and engage dedicated resources with the right
                                    expertise and cultural fit to ensure agile software development.</p>
                                <Link href={"#"}>
                                    <a className={"btn rounded-md bg-white text-black px-5 py-3 hover:bg-red-600 hover:bg-red-100"}>Contact with expert</a>
                                </Link>
                            </div>
                        </div>
                        <div className={"p-2"}>
                            <div className={"bg-red-700 p-3 md:px-5 py-10 text-center text-white rounded-md"}>
                                <div className={"relative m-auto text-2xl w-14 h-14 rounded-full bg-white text-red-700 flex items-center justify-center mb-3"}>
                                    <FontAwesomeIcon
                                        icon={faSackDollar}
                                    />
                                </div>
                                <h3 className={"text-sm md:text-xl text-white mb-3"}>Dedicated Hiring</h3>
                                <p className={"mb-3"}>Build your own team by selecting, hiring, and managing highly skilled
                                    software developers and IT experts on a long-term basis. This model is
                                    intended to help you find and engage dedicated resources with the right
                                    expertise and cultural fit to ensure agile software development.</p>
                                <Link href={"#"}>
                                    <a className={"btn rounded-md bg-white text-black px-5 py-3 hover:bg-red-600 hover:bg-red-100"}>Hire developers</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}