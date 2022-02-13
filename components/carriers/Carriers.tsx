import React from "react"
import styles from "./Carriers.module.css"
import cn from "classnames"

const Carriers = () => {
    return (
        <div className={styles.bgGrey}>
            <div className={styles.carriers}>
                <h2>Carriers</h2>
                <div className={styles.container}>
                    <div>
                        DTS Brokerage supports all our carriers whenever they need it. Joining the DTS Brokerage network
                        ensures
                        you have a professional service so you can get as many loads as you can handle. Our carrier
                        focused
                        technology will keep your fleet focused on generating revenue.
                    </div>
                    <div>
                        Our carriers can also take advantage of our fuel advance program, minimizing and even
                        eliminating
                        empty miles, 24/7 support and benefitting from the biggest customer base in the industry.
                    </div>
                </div>
                <div className={styles.squares}>
                    <div className={styles.square}>
                        <h3 className={styles.title}>
                            Advanced <br />
                            technology
                        </h3>
                        <div>
                            With our customized online transportation management system, your logistics become more
                            efficient. With process transparency, regular reporting, and consistent invoicing, DTS
                            Brokerage makes managing your supply chain smooth and simple.
                        </div>
                    </div>
                    <div className={cn(styles.square, styles.orange)}>
                        <h3 className={styles.title}>
                            Professional<br />
                            service
                        </h3>
                        <div>
                            With our vast network of qualified carriers, we are ready for any shipment need at any time.
                            With a dedicated account executive, you get instant access to the largest network of
                            carriers in North America. Our company has the knowledge and experience to handle your cross
                            border shipments, customs clearance and permits.
                        </div>
                    </div>
                    <div className={cn(styles.square, styles.blue)}>
                        <h3 className={styles.title}>
                            Simplicity<br /><br />
                        </h3>
                        <div>
                            Your shipment can not wait, that is why we have a specialized system to make managing,
                            monitoring and optimizing your logistics simple and fast. With DTS Brokerage, you can find
                            the best solution.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Carriers
