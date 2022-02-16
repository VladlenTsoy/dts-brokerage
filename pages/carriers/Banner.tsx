import React from "react"
import styles from "./Banner.module.css"
import Cards from "./Cards"

const Banner = () => {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Carriers</h1>
                    <div className={styles.desc}>
                        <div>
                            DTS Brokerage supports all our carriers whenever they need it. Joining the DTS Brokerage
                            network
                            ensures you have a professional service so you can get as many loads as you can handle. Our
                            carrier
                            focused technology will keep your fleet focused on generating revenue.
                        </div>
                        <div>
                            Our carriers can also take advantage of our fuel advance program, minimizing and even
                            eliminating
                            empty miles, 24/7 support and benefitting from the biggest customer base in the industry.
                        </div>
                    </div>
                </div>
            </div>
            <Cards />
        </>
    )
}

export default Banner
