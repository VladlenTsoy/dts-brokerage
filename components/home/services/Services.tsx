import React from "react"
import styles from "./Services.module.css"
// import service1 from "../../assets/images/services/service-1.svg"
// import service2 from "../../assets/images/services/service-2.svg"
// import service3 from "assets/images/services/service-3.svg"
// import service4 from "assets/images/services/service-4.svg"
// import service5 from "assets/images/services/service-5.svg"
// import service6 from "assets/images/services/service-6.svg"
// import service7 from "assets/images/services/service-7.svg"

const Services = () => {
    return (
        <div className={styles.services}>
            <h2>Services</h2>
            <div className={styles.container}>
                <div className={styles.item}>
                    <img src="images/services/service-1.svg" alt="Full Truckload" className={styles.icon} />
                    <div className={styles.title}>Full Truckload</div>
                    <div className={styles.desc}>
                        Our Truckload service provides you with
                        the means to get your freight moving quickly.
                    </div>
                </div>
                <div className={styles.item}>
                    <img src="images/services/service-2.svg" alt="Less than Truckload (LTL)" className={styles.icon} />
                    <div className={styles.title}>Less than Truckload (LTL)</div>
                    <div className={styles.desc}>
                        Less than Truckload (LTL) is a trucking option for shipments that are not large enough to take
                        up the capacity of an entire truck.
                    </div>
                </div>
                <div className={styles.item}>
                    <img src="images/services/service-3.svg" alt="Intermodal" className={styles.icon} />
                    <div className={styles.title}>Intermodal</div>
                    <div className={styles.desc}>
                        Intermodal Domestic Shipping is a combination of two modes (truck, rail, air etc) to move
                        freight from one location to another
                    </div>
                </div>
                <div className={styles.item}>
                    <img src="images/services/service-4.svg" alt="Refrigerated Logistics" className={styles.icon} />
                    <div className={styles.title}>Refrigerated Logistics</div>
                    <div className={styles.desc}>
                        We provide a dedicated fleet of collection and delivery vehicles to offer solutions for all your
                        refrigerated transport needs.
                    </div>
                </div>
                <div className={styles.item}>
                    <img src="images/services/service-5.svg" alt="Expedited" className={styles.icon} />
                    <div className={styles.title}>Expedited</div>
                    <div className={styles.desc}>
                        If your freight is time sensitive and time is of the utmost importance, DTS Brokerage Inc will
                        make sure your freight is delivered.
                    </div>
                </div>
                <div className={styles.item}>
                    <img src="images/services/service-6.svg" alt="Drayage" className={styles.icon} />
                    <div className={styles.title}>Drayage</div>
                    <div className={styles.desc}>
                        DTS Brokerage Inc arranges drayage services in all markets with a large capacity and competitive
                        pricing.
                    </div>
                </div>
                <div className={styles.item}>
                    <img src="images/services/service-7.svg" alt="Courier" className={styles.icon} />
                    <div className={styles.title}>Courier</div>
                    <div className={styles.desc}>
                        Need to get your goods or items delivered fast? Trust us as your fast and reliable courier
                        service in the U.S.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
