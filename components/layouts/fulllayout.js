import styles from "./fulllayout.module.scss";

export default function FullLayout({ children }) {
    return (
        <div id='wrapper' className={`${styles.fullLayoutPage} bg-center bg-no-repeat`} style={{backgroundImage: `url(images/fulllayoutbg.jpg)`}}>
            <main id={"main"}>
                {children}
            </main>
        </div>
    )
}
