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
                    DTS Brokerage Inc.<br />
                    Fueling your Logistics chain
                </h1>
                <div className={styles.desc}>
                    We provide an “A” to “Z” service for your loads, logistic <br />
                    solutions, and enhance your footprint in the U.S.
                </div>
            </div>
        </div>
    )
}

export default Banner
