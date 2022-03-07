import React from "react"
import styles from "./AboutUs.module.css"

const AboutUs = () => {
    return (
        <div className={styles.aboutUs}>
            <h2>About Us</h2>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h3>
                        DTS Brokerage Inc was founded in 2018 and provides<br />
                        reliable and cost-effective transportation services to<br />
                        hundreds of companies across the U.S.
                    </h3>
                    <div>
                        DTS Brokerage Inc team can be a great partner in tough situations and can also be a primary
                        transportation solution. We can help improve service to clients while minimizing the amount of
                        money it
                        takes to serve those clients. With the ongoing driver shortage, having a relationship with a
                        broker
                        serves as a useful solution for guaranteed capacity and finding loads.
                        <br />
                        <br />
                        Supply chains and the trucking industry are changing and most companies have limited resources
                        and
                        limited time. DTS Brokerage is your destination for all your transportation expertise.
                    </div>
                </div>
                <div className={styles.video}>
                    <iframe src="https://drive.google.com/file/d/1zbR-7BnsxV2ZZ135lK7Zfwz07QdfOKT0/preview" width="100%"
                            height="100%" allow="autoplay" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs
