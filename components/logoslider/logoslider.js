import Slider from "react-slick";


export default function LogoSlider() {

    const logoListSlider =[
        {
            name: 'pisific',
            image:
                '/images/picific-gray.png',
        },
        {
            name: 'johnson&johnson.',
            image:'/images/johnsan-gray.png',
        },
        {
            name: 'meridian',
            image:'/images/meridian-gray.png',
        },
        {
            name: '2Again',
            image: '/images/2again-gray.png',
        },
        {
            name: 't-mobile',
            image:'/images/t-mobile-gray.png',
        },
        {
            name: 'LifeSign',
            image:
                '/images/lifesign-gray.png',
        },
        {
            name: 'toptel',
            image:
                '/images/toptel-gray.png',
        },
    ]


    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoPlay: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        fade: false,
        // vertical: true,
        centerMode: false,
        centerPadding: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
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

    return(
        <section className={"section"}>
            <div className={"container"}>
                <Slider {...settings}>
                    {logoListSlider.map((logoListSlider)=>(
                        <div>
                            <div className={"p-3"}>
                                <div className={"relative h-12 flex items-center justify-center mb-4"}>
                                    <img className={"object-center max-h-12 w-auto"} src={logoListSlider.image} alt={logoListSlider.name} />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}