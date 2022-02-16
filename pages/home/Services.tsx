import React from "react"
import styles from "./Services.module.css"
import ServiceItem from "../../components/services/ServiceItem"

const Services = () => {
    return (
        <div className={styles.services}>
            <h2>Services</h2>
            <div className={styles.container}>
                <ServiceItem icon="/images/services/service-1.svg" title="Full Truckload">
                    Our Truckload service provides you with
                    the means to get your freight moving quickly.
                </ServiceItem>
                <ServiceItem icon="/images/services/service-2.svg" title="Less than Truckload (LTL)">
                    Less than Truckload (LTL) is a trucking option for shipments that are not large enough to take
                    up the capacity of an entire truck.
                </ServiceItem>
                <ServiceItem icon="/images/services/service-3.svg" title="Intermodal">
                    Intermodal Domestic Shipping is a combination of two modes (truck, rail, air etc) to move
                    freight from one location to another
                </ServiceItem>
                <ServiceItem icon="/images/services/service-4.svg" title="Refrigerated Logistics">
                    We provide a dedicated fleet of collection and delivery vehicles to offer solutions for all your
                    refrigerated transport needs.
                </ServiceItem>
                <ServiceItem icon="/images/services/service-5.svg" title="Expedited">
                    If your freight is time sensitive and time is of the utmost importance, DTS Brokerage Inc will
                    make sure your freight is delivered.
                </ServiceItem>
                <ServiceItem icon="/images/services/service-6.svg" title="Drayage">
                    DTS Brokerage Inc arranges drayage services in all markets with a large capacity and competitive
                    pricing.
                </ServiceItem>
                <ServiceItem icon="/images/services/service-7.svg" title="Courier">
                    Need to get your goods or items delivered fast? Trust us as your fast and reliable courier
                    service in the U.S.
                </ServiceItem>
            </div>
        </div>
    )
}

export default Services
