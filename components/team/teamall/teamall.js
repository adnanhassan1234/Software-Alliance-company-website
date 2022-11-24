import Slider from "react-slick";


export default function TeamAll({teamall}) {

    const team = [
        {
            name: 'Oleksandr K.',
            text: 'Experienced in Java, Web and Mobile Development Hard-working, punctual and detail-oriented. Good team player.',
            image: '/images/team1.png',
            desgination: 'Java Developer',
            experience: '5',
            country: 'Pakistan',
            status: 'Available',
            techList: [
                {
                    tech: 'Java',
                },
                {
                    tech: 'C++',
                },
                {
                    tech: 'C#',
                }
            ]

        },
        {
            name: 'Jason Mamoa',
            text: 'Experienced in Java, Web and Mobile Development Hard-working, punctual and detail-oriented. Good team player.',
            image: '/images/team2.png',
            desgination: 'Senior Android Developer',
            experience: '15',
            country: 'Ukraine',
            status: 'Available',
            techList: [
                {
                    tech: 'Java',
                },
                {
                    tech: 'React native',
                },
                {
                    tech: 'C#',
                }
            ]

        },
        {
            name: 'Alejandra J.',
            text: 'Experienced in Java, Web and Mobile Development Hard-working, punctual and detail-oriented. Good team player.',
            image: '/images/team3.png',
            desgination: 'Senior Software Engineer',
            experience: '10',
            country: 'Ukraine',
            status: 'Available',
            techList: [
                {
                    tech: 'Java',
                },
                {
                    tech: 'Python',
                },
                {
                    tech: 'C#',
                }
            ]

        },
        {
            name: 'Oleksandr K.',
            text: 'Experienced in Java, Web and Mobile Development Hard-working, punctual and detail-oriented. Good team player.',
            image: '/images/team1.png',
            desgination: 'Java Developer',
            experience: '5',
            country: 'Pakistan',
            status: 'Available',
            techList: [
                {
                    tech: 'Java',
                },
                {
                    tech: 'C++',
                },
                {
                    tech: 'C#',
                }
            ]

        },
        {
            name: 'Jason Mamoa',
            text: 'Experienced in Java, Web and Mobile Development Hard-working, punctual and detail-oriented. Good team player.',
            image: '/images/team2.png',
            desgination: 'Senior Android Developer',
            experience: '15',
            country: 'Ukraine',
            status: 'Available',
            techList: [
                {
                    tech: 'Java',
                },
                {
                    tech: 'React native',
                },
                {
                    tech: 'C#',
                }
            ]

        },
        {
            name: 'Alejandra J.',
            text: 'Experienced in Java, Web and Mobile Development Hard-working, punctual and detail-oriented. Good team player.',
            image: '/images/team3.png',
            desgination: 'Senior Software Engineer',
            experience: '10',
            country: 'Ukraine',
            status: 'Available',
            techList: [
                {
                    tech: 'Java',
                },
                {
                    tech: 'Python',
                },
                {
                    tech: 'C#',
                }
            ]
        },

    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <section className={"py-10 bg-center bg-cover"} style={{backgroundImage: `url(images/bg1.jpg)`}}>
            <div className={"container"}>
                <div className={"relative"}>
                    <h3 className={"text-md text-white"}>
                        Team All
                    </h3>
                </div>
                <Slider {...settings}>
                    {team.map((team) => (
                        <div className={"p-2"}>
                            <div className={"p-3 rounded-md bg-white text-center"}>
                                <div className={"w-24 h-24 m-auto rounded-full border border-red-700 mb-2 p-1"}>
                                    <img className={"object-center"} src={team.image} alt="" />
                                </div>
                                <div className={"text-xl font-bold mb-1"}>{team.name}</div>
                                <div className={"text-gray-400 mb-2"}>{team.desgination}</div>
                                <p className={"mb-3"}>{team.text}</p>
                                <ul className={"flex items-center justify-center py-3 border-t border-b border-b-gray-200 border-t-gray-200"}>
                                    {team.techList.map((techList) => (
                                        <li className={"m-1"}><span className={"block py-1 px-3 rounded-md bg-red-700 text-white"}>{techList.tech}</span></li>
                                    ))}
                                </ul>
                                <ul className={"flex flex-wrap py-3"}>
                                    <li className={"basis-1/3"}>
                                        <div className={"font-bold"}>Experience</div>
                                        <div className={"text-gray-400"}>{team.experience}</div>
                                    </li>
                                    <li className={"basis-1/3"}>
                                        <div className={"font-bold"}>Country</div>
                                        <div className={"text-gray-400"}>{team.country}</div>
                                    </li>
                                    <li className={"basis-1/3"}>
                                        <div className={"font-bold"}>Status</div>
                                        <div className={"text-gray-400"}>{team.status}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}