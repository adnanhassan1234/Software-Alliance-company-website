import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";

export default function ServicesList() {
    const services = [
        {
            title: 'Mobile App development',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:
                '/images/mobileAppDevelopment.svg',
        },
        {
            title: 'Web Development.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:
                '/images/WebDevelopment.svg',
        },
        {
            title: 'Software Development',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:
                '/images/SoftwareDevelopment.svg',
        },
        {
            title: 'Search Engine Optimization',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:
                '/images/SearchEngineOptimization.svg',
        },
        {
            title: 'Blockchain development',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:
                '/images/Blockchaindevelopment.svg',
        },
        {
            title: 'Devops',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:
                '/images/Devops.svg',
        },

    ]
    return (
        <section className={"pt-20"}>

            <div className={"container"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
                    {services.map((services) => (
                        <div className={"rounded-lg shadow relative p-2 md:py-14 text-center "}>
                            <div className={"relative h-12 flex items-center justify-center mb-10"}>
                                <img className={"object-center max-h-20 w-20"} src={services.image} alt="" />
                            </div>
                            <h3 className={"text-lg font-medium text-red-700 mb-3"}>{services.title}</h3>
                            <p className={"mb-3"}>{services.text}</p>
                            <Link href={"#"}>
                                <a className={"text-red-700 font-bold hover:text-red-500"}>
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
                <div className={"flex justify-center py-10"}>
                    <Link href={"#"}>
                        <a className={"btn rounded-md bg-red-700 inline-block text-white px-5 py-3 hover:bg-red-600"}>Hire developers</a>
                    </Link>
                </div>
            </div>
        </section>
    )
}