import styles from "./pagetitle.module.scss";

export default function PageTitle({title}) {
    return(
        <div className={styles.sectionHeader}>
            <div className={"container"}>
                <h1 className={"text-2xl xs:text-4xl md:text-5xl lg:text-6xl font-bold"} data-title={title}>{title}</h1>
            </div>
        </div>
    )
}