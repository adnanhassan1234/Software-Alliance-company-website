import Slider from "react-slick";
import styles from './review.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileContract,
    faUserPlus,
    faPeopleGroup,
    faSquareCheck,
    faCalendarCheck,
    faCommentDots,

} from "@fortawesome/free-solid-svg-icons";



export default function Reviews(props) {

    const review = [
        {
            title: 'Time-to-contract 1 week',
            text: 'With Software Alliance, there\'s no need to slow down for recruitment.',
            image: '/images/team1.png',
            subtitle: 'Java Developer',
            socialList: [
                {
                    url: 'abc.com',
                    iconImage: <FontAwesomeIcon icon={faFileContract} />,
                },

            ]

        },
        {
            title: 'Time-to-contract 1 week',
            text: 'With Software Alliance, there\'s no need to slow down for recruitment.',
            image: '/images/team2.png',
            subtitle: 'Java Developer'
        },
        {
            title: 'Time-to-contract 1 week',
            text: 'With Software Alliance, there\'s no need to slow down for recruitment.',
            image: '/images/team2.png',
            subtitle: 'Java Developer'
        },
    ]

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        fade: true,
       // vertical: true,
        centerMode: true,
        centerPadding: 20,
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
        <section className={"py-20"}>
            <div className={"container"}>
                <h2 className={"text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center"}>Reviews</h2>
                <Slider className={`${styles.reviewslider} reviewslider`} {...settings}>
                    {review.map((review) => (
                        <div>
                            <div className={"box"}>
                                <div className={"text-white p-3 md:px-5 py-10 text-center rounded-md"}>
                                    <div className="w-24 h-24 m-auto rounded-full border border-white mb-2 p-1">
                                        <img className="object-center" src={review.image} alt="" />
                                    </div>
                                    <h3 className={"text-sm md:text-xl font-bold mb-3"}>{review.title}</h3>
                                    <div className={"mb-5"}>{review.subtitle}</div>
                                    <p className={"mb-3"}>{review.text}</p>

                                    {/*<SocialLinks>
                                        {review.socialList.map((socialList) => (
                                            <SocialIcon url={socialList.url} icon={socialList.iconImage} />
                                        ))}
                                    </SocialLinks>*/}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    )
}
