import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileContract,
    faUserPlus,
    faPeopleGroup,
    faSquareCheck,
    faCalendarCheck,
    faCommentDots,

} from "@fortawesome/free-solid-svg-icons";

export default function Benefits() {

    const benefit = [
        {
            title: 'Time-to-contract 1 week',
            text: 'With Software Alliance, there\'s no need to slow down for recruitment.',
            image: <FontAwesomeIcon icon={faFileContract} />,
        },
        {
            title: 'Flexible, efficient scaling',
            text: 'Expand or reduce your remote team size on demand.',
            image: <FontAwesomeIcon icon={faUserPlus} />,
        },
        {
            title: '10,000+ software engineers',
            text: 'Get access to vetted experts in web, mobile, Big Data, ML, IoT and more.',
            image: <FontAwesomeIcon icon={faPeopleGroup} />,
        },
        {
            title: 'Dedicated support',
            text: 'Get a personal Customer Success Specialist on one call or message.',
            image: <FontAwesomeIcon icon={faCommentDots} />,
        },
        {
            title: 'Vetted talent',
            text: 'Save your time and focus by only reviewing the best candidates.',
            image: <FontAwesomeIcon icon={faSquareCheck} />,
        },
        {
            title: 'Long-term predictability',
            text: 'Software Alliance engineers work with customers for 2 years on average.',
            image: <FontAwesomeIcon icon={faCalendarCheck} />,
        },
    ]

    return (
        <section className={"py-20 bg-center bg-cover"} style={{backgroundImage: `url(images/bg1.jpg)`}}>
            <div className={"container"}>
                <h2 className={"text-2xl xs:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-3 text-center"}>Our Benefits</h2>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5"}>
                    {benefit.map((benefit) => (
                        <div className={"bg-white p-3 md:px-5 py-10 text-center rounded-md"}>
                            <div className={"relative m-auto text-3xl w-20 h-20 rounded-full bg-red-700 text-white flex items-center justify-center mb-4"}>
                                {benefit.image}
                            </div>
                            <h3 className={"text-sm md:text-xl font-bold mb-3"}>{benefit.title}</h3>
                            <p className={"mb-3"}>{benefit.text}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
