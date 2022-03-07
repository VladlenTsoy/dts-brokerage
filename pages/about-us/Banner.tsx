import React from "react"
import styles from "./Banner.module.css"

const Banner = () => {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.container}>
                    <h1 className={styles.title}>About Us</h1>
                    <div className={styles.desc}>
                        DTS Brokerage Inc was founded in 2018 and provides<br />
                        reliable and cost-effective transportation services to<br />
                        hundreds of companies across the U.S.
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.content}>
                    DTS Brokerage Inc team can be a great partner in tough situations and can also be a primary
                    transportation solution. We can help improve service to clients while minimizing the amount of
                    money
                    it takes to serve those clients. With the ongoing driver shortage, having a relationship with a
                    broker serves as a useful solution for guaranteed capacity and finding loads.
                    <br />
                    <br />
                    Supply chains and the trucking industry are changing and most companies have limited resources
                    and
                    limited time. DTS Brokerage is your destination for all your transportation expertise.
                </div>
                <div className={styles.video}>
                    <video width="100%" height="100%" controls autoPlay muted>
                        <source src="https://eon.uz/assets/DTS.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </>
    )
}

export default Banner
