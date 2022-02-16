import React from "react"
import styles from "./Banner.module.css"

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.wrapper}>
                <div className={styles.image} />
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Services
                </h1>
                <div className={styles.desc}>
                    Full Truckload / Less than Truckload (LTL) / Intermodal<br />
                    Refrigerated Logistic / Drayage / Courier / Expedited
                </div>
            </div>
        </div>
    )
}

export default Banner
