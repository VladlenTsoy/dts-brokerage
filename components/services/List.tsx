import React from "react"
import styles from "./List.module.css"
import ServiceItem from "./ServiceItem"

const List = () => {
    return (
        <div className={styles.container}>
            <ServiceItem icon="images/services/service-1.svg" title="Full Truckload">
                Our Truckload service provides you with the means to get your freight moving quickly. Truckload is
                faster than traditional LTL or intermodal shipments which means shipments arrive on time and according
                to your schedule.
                <br />
                <br />
                The best Truckload solutions are available with DTS Brokerage Inc. With all approved carriers, DTS
                Brokerage has the capacity to move your load.
            </ServiceItem>
            <ServiceItem icon="images/services/service-2.svg" title="Less than Truckload (LTL)">
                Less than Truckload (LTL) is a trucking option for shipments that
                are not large enough to take up the capacity of an entire truck.
                <br />
                <br />
                Benefits of shipping LTL with DTS Brokerage Inc:
                <br />
                <br />
                • Cost effective<br />
                • Security<br />
                • Access<br />
            </ServiceItem>
            <ServiceItem icon="images/services/service-3.svg" title="Intermodal">
                Intermodal Domestic Shipping is a combination of two modes (truck, rail, air etc) to move freight from
                one location to another with commodities stored in a container that does not require transfer to
                different containers. The most common type of intermodal shipping
                in the U.S. is when a truck picks up a container, transfers to a railway with a truck completing the
                final delivery.
                <br />
                <br />
                DTS Brokerage Inc offers a multitude of benefits, including:
                <br />
                <br />
                • Cost effectiveness<br />
                • Fuel efficiency<br />
                • Available capacity<br />
                • Sustainability compared to long-haul trucking<br />
                • Professional team working 24/7 and checking that the cargo is delivered on time
            </ServiceItem>
            <ServiceItem icon="images/services/service-4.svg" title="Refrigerated Logistics">
                We provide a dedicated fleet of collection and delivery vehicles to offer solutions for all your
                refrigerated transport needs. We are committed to continuous improvement and our network is constantly
                evolving in response to our customers' requirements and market conditions.
                <br />
                <br />
                We support our line haulage operations in terms of compliance, fleet management and maintenance.
                <br />
                <br />
                We continually strive to differentiate ourselves from our competitors by providing services in a way
                that establishes industry best practice. All delivery times to destination are compliant and based on
                seven-day-a-week operations.
            </ServiceItem>
            <ServiceItem icon="images/services/service-6.svg" title="Drayage">
                DTS Brokerage Inc arranges drayage services in all markets with a large capacity and competitive
                pricing. Your freight can be delivered either from the port or rail right to your door, or from your
                door right to the port or rail, saving you money in the process.
            </ServiceItem>
            <ServiceItem icon="images/services/service-7.svg" title="Courier">
                Need to get your goods or items delivered fast? Trust us as your fast and reliable courier service in
                the U.S. This means you can get your needed items delivered from point A to point B quickly, and of
                course, safely.
            </ServiceItem>
            <ServiceItem icon="images/services/service-5.svg" title="Expedited">
                If your freight is time sensitive and time is of the utmost importance, DTS Brokerage Inc will make sure
                your freight is delivered. Work with us to determine the best mode for you:
                <br />
                <br />
                • Team of drivers<br />
                • Air freight
                <br />
                <br />
                We provide all needed services to ship the freight to any destination in the U.S. - as planned and on
                schedule every time where and when you need it.
            </ServiceItem>
        </div>
    )
}

export default List
