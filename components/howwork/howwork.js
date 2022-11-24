import styles from './howwork.module.scss';
import Link from "next/link";

export default function HowWork() {

    const howwowrk = [
        {
            title: 'Launch the personalized matching process',
            text: 'Set up a free intro call with our Team Advisor your personal contact at Software Alliance. They ll ensure the talent we source perfectly matches your needs.',
            image: '/images/talktous.png',
            subtitle: 'Talk to us',
        },
        {
            title: 'Get matching talent in just 48 hours ',
            text: 'Software Alliance handpicks the best-matched candidates from its pool \n' +
                'of over 10,000 engineers, conducts personalized pre-screening, then arranges\n' +
                'interviews for you.',
            image: '/images/accesscadidates.png',
            subtitle: 'Access the candidates',
        },
        {
            title: 'Get work started with confidence',
            text: 'Software Alliance automates contract signing and invoicing for you \n' +
                'and the development companies, employers of your selected engineers. No \n' +
                'commitments before this point.',
            image: '/images/beginwork.png',
            subtitle: 'Begin work ASAP',
        },
    ]

    return (
        <section className={"py-20"}>
            <div className={"container"}>
                <h2 className={"text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-center"}>How SA Work</h2>
                <div className={styles.content}>
                    {howwowrk.map((howwowrk) => (
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <div className={`${styles.subtitle} text-sm text-red-700 font-semibold mb-3`}>{howwowrk.subtitle}</div>
                            <h3 className={"text-xl xs:text-3xl md:text-2xl lg:text-3xl font-bold mb-3"}>{howwowrk.title}</h3>
                            <p className={"mb-4 text-gray-400"}>{howwowrk.text}</p>
                            <Link href={"#"}>
                                <a className={"btn rounded-md bg-red-700 text-white px-5 py-3 hover:bg-red-600"}>Hire developers</a>
                            </Link>
                        </div>
                        <div className={`${styles.col}`}>
                            <div className={`${styles.imgBox}`}>
                                <img className="w-full" src={howwowrk.image} alt={howwowrk.title} />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
