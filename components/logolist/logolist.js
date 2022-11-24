
export default function LogoList() {
    const logoList = [
        {
            name: 'associatecertified',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:
                '/images/associatecertified.png',
        },
        {
            name: 'specialistcertified',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:
                '/images/specialistcertified.png',
        },
        {
            name: 'professionalcertified',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:
                '/images/professioanlcertified.png',
        },
        {
            name: 'expert',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image:
                '/images/expertcertified.png',
        },

    ]
    return (
        <section className={"py-10"}>
            <div className={"container"}>
                <h2 className={"text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-center"}>Top rated by tech leaders</h2>
                <div className={"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 xs:gap-1"}>
                    {logoList.map((logoList) => (
                        <div className={"rounded-lg  relative md:py-7 xs:p-0 text-center "}>
                            <div className={"relative flex items-center justify-center"}>
                                <img className={"object-center"} src={logoList.image} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}