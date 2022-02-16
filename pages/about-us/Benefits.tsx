import React from "react"
import styles from "./Benefits.module.css"

const Benefits = () => {
    return (
        <div className={styles.benefits}>
            <div className={styles.content}>
                <img src="/images/logo-icon.svg" alt="dts-brokerage" className={styles.logo} />
                <div className={styles.title}>
                    Benefits of working<br />
                    with DTS Brokerage Inc
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.benefit}>
                    <div className={styles.left}>
                        <div className={styles.title}>The Best Rates</div>
                        <img src="images/about-us/about-us-1.svg" alt="The Best Rates" width={50} />
                    </div>
                    <div className={styles.desc}>
                        DTS Brokerage Inc has a wealth of experience
                        and various relationships with carriers Throughout North America. This gives us an unique
                        capability to negotiate exclusive rates for your company through our carrier network. When
                        working with DTS Brokerage, you know you are getting the lowest rates with the most reputable
                        carriers.
                    </div>
                </div>
                <div className={styles.benefit}>
                    <div className={styles.left}>
                        <div className={styles.title}>A Dedicated Team</div>
                        <img src="images/about-us/about-us-2.svg" alt="A Dedicated Team" width={80} />
                    </div>
                    <div className={styles.desc}>
                        Once you partner with DTS Brokerage, you can rely on a dedicated account executive and
                        professional team that will make your spot-freight moves as efficient and simple as possible. We
                        will act as your one point of contact for any of your logistics needs with our 24/7 support
                        team.
                    </div>
                </div>
                <div className={styles.benefit}>
                    <div className={styles.left}>
                        <div className={styles.title}>Logistical Analysis</div>
                        <img src="images/about-us/about-us-3.svg" alt="Logistical Analysis" width={56} />
                    </div>
                    <div className={styles.desc}>
                        Our experts can dive into your different business initiatives and simplify your supply chain
                        management processes. Our logistics assessment will help us discover new opportunities to
                        optimize your supply chain and save you money.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits
