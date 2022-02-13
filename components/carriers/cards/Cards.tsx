import React from "react"
import styles from "./Cards.module.css"

const Cards = () => {
    return (
        <div className={styles.cards}>
            <div className={styles.card}>
                <div className={styles.body}>
                    <h4>Advanced<br />technology</h4>
                    <div>
                        With our customized online transportation management system, your logistics become more
                        efficient. With process transparency, regular reporting, and consistent invoicing, DTS Brokerage
                        makes managing your supply chain smooth and simple.
                    </div>
                </div>
                <div className={styles.img} />
            </div>
            <div className={styles.card}>
                <div className={styles.img} />
                <div className={styles.body}>
                    <h4>Professional<br />service</h4>
                    <div>
                        With our vast network of qualified carriers, we are ready for any shipment need at any time.
                        With a dedicated account executive, you get instant access to the largest network of carriers in
                        North America. Our company has the knowledge and experience to handle your cross border
                        shipments, customs clearance and permits.
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.body}>
                    <h4>Simplicity</h4>
                    <div>
                        Your shipment can not wait, that is why we have a specialized system to make managing,
                        monitoring and optimizing your logistics simple and fast. With DTS Brokerage, you can find the
                        best solution.
                    </div>
                </div>
                <div className={styles.img} />
            </div>
        </div>
    )
}

export default Cards
