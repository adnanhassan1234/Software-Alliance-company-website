
export default function StatCounter() {
    const statList = [
        {
            count: "100",
            text: "Team Members"
        },
        {
            count: "250",
            text: "Developers"
        },
        {
            count: "500",
            text: "Happy Clients"
        },
        {
            count: "200",
            text: "Cup of Tea"
        },

    ]
    return (
        <section className={"section py-20"}>
            <div className={"container"}>
                <div className={"grid grid-cols-2 md:grid-cols-4 text-center"}>
                    {statList.map((statList)=>(
                        <div className={"p-3"}>
                            <h3 className={"text-4xl text-red-700 font-bold"}>{statList.count}+</h3>
                            <div className={"text-lg font-bold"}>{statList.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}