import React from "react"
import styles from "./ServiceItem.module.css"

interface ServiceItemProps {
    icon: string
    title: string
}

const ServiceItem: React.FC<ServiceItemProps> = ({title, icon, children}) => {
    return (
        <div className={styles.item}>
            <img src={icon} alt={title} className={styles.icon} />
            <div className={styles.title}>{title}</div>
            <div className={styles.desc}>{children}</div>
        </div>
    )
}

export default ServiceItem
