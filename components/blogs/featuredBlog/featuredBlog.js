import styles from "../../reviews/review.module.scss";
import Slider from "react-slick";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";



export default function FeaturedBlog() {
    
    const featuredBlogList = [
        {
            image: "/images/fb1.jpg",
            title: "Guidelines on How to Hire an Offshore Development Team in Pakistan",
            category: "Outsourcing",
            publistDate: "February 09,2021 10:32 AM",
            url: "/images/fb1.jpg",
            description: "As your tech startup or business is growing and constantly releasing new features, sooner or later, you’ll feel the need to expand your team of software developers. If you’re based in the US or Western Europe and wish to hire a developer, be aware...",
        },
        {
            image: "/images/fb1.jpg",
            title: "Guidelines on How to Hire an Offshore Development Team in Pakistan",
            category: "Outsourcing",
            publistDate: "February 09,2021 10:32 AM",
            url: "/images/fb1.jpg",
            description: "As your tech startup or business is growing and constantly releasing new features, sooner or later, you’ll feel the need to expand your team of software developers. If you’re based in the US or Western Europe and wish to hire a developer, be aware...",
        },
        {
            image: "/images/fb1.jpg",
            title: "Guidelines on How to Hire an Offshore Development Team in Pakistan",
            category: "Outsourcing",
            publistDate: "February 09,2021 10:32 AM",
            url: "/images/fb1.jpg",
            description: "As your tech startup or business is growing and constantly releasing new features, sooner or later, you’ll feel the need to expand your team of software developers. If you’re based in the US or Western Europe and wish to hire a developer, be aware...",
        },

    ]

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style,
                    background: "#f9e9ed"
                }}
                onClick={onClick}
            />
        );
    }

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style,
                    background: "#f9e9ed"
                }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
        //initialSlide: 0,
        //fade: true,
        // vertical: true,
        //centerMode: true,
        //centerPadding: 20,
        /*responsive: [
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
        ]*/
    };

    return(

        <>
            <section className={"section py-20"}>
                <div className={"container"}>
                    <div className={"py-5"}>
                        <h2 className={"text-xl font-bold"}>Featured Posts</h2>
                    </div>
                    <Slider className={`${styles}`} {...settings}>
                        {featuredBlogList.map(featuredBlogList=>(
                            <div>
                                <div className={"relative overflow-hidden"}>
                                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 flex items-center"}>
                                        <div className="rounded-md overflow-hidden">
                                            <img className="object-center" src={featuredBlogList.image} alt="" />
                                        </div>
                                        <div className={"overflow-hidden"}>
                                            <div className={"pb-5 flex justify-between"}>
                                                <div className={"text-red-700 font-bold"}>{featuredBlogList.category}</div>
                                                <div>{featuredBlogList.publistDate}</div>
                                            </div>
                                            <h1 className={"font-bold mb-3 text-md md:text-xl"}>{featuredBlogList.title}</h1>
                                            <p className={"mb-3"}>{featuredBlogList.description}</p>
                                            <Link href={"#"}>
                                                <a className={"text-red-700 font-bold"}>
                                                    Read More
                                                    <FontAwesomeIcon
                                                        icon={faArrowRightLong}
                                                        className={"mx-2 text-xs"}
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <section className="section pt-5">
                        <div className="container text-left">
                            <ul className="contact-col">
                                <li>
                                    <div className="inner-bx">
                                        <h6 className="mb-3">Denmark</h6>
                                        <ul className="contact-details">
                                            <li><i className="fa fa-phone-square"></i> +4528403173</li>
                                            <li><i className="fa fa-envelope"></i>info@softwarealliance.dk</li>
                                            <li><i className="fa fa-map-marker"></i> Liljevej 12, 3650 Ølstykke Denmark
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="inner-bx">
                                        <h6 className="mb-3">United Kingdom</h6>
                                        <ul className="contact-details">
                                            <li><i className="fa fa-phone-square"></i>+44 020 6591 2755</li>
                                            <li><i className="fa fa-envelope"></i>info@softwarealliance.dk</li>
                                            <li><i className="fa fa-map-marker"></i> 30 Stamford Street London , SE1 9LQ
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="inner-bx">
                                        <h6 className="mb-3">UAE Office</h6>
                                        <ul className="contact-details">
                                            <li><i className="fa fa-phone-square"></i>+971-65223323</li>
                                            <li><i className="fa fa-envelope"></i>info@softwarealliance.me</li>
                                            <li><i className="fa fa-map-marker"></i> Office No. 33 Building Y1 Saif
                                                Zone, Sharjah, U.A.E
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li>
                                    <div className="inner-bx">
                                        <h6 className="mb-3">Pakistan</h6>
                                        <ul className="contact-details">
                                            <li><i className="fa fa-phone-square"></i> +92 300 9794063</li>
                                            <li><i className="fa fa-envelope"></i>info@softwarealliance.dk</li>
                                            <li><i className="fa fa-map-marker"></i> 57-58 D Faisal Town Lahore,
                                                Pakistan
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="map-box">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1701.4588326315538!2d74.30886518361548!3d31.471450997673273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d31.471451!2d74.30963899999999!5e0!3m2!1sen!2s!4v1562151170892!5m2!1sen!2s"
                                style="border:0" allowFullScreen="" width="600" height="450" frameBorder="0"></iframe>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}