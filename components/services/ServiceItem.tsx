import React from "react"
import Image from "next/image"
import styles from "./ServiceItem.module.css"

interface ServiceItemProps {
    icon: string
    title: string
}

const ServiceItem: React.FC<ServiceItemProps> = ({title, icon, children}) => {
    return (
        <div className={styles.item}>
            <Image src={icon} alt={title} className={styles.icon} width={60} height={40} />
            <div className={styles.title}>{title}</div>
            <div className={styles.desc}>{children}</div>
        </div>
    )
}

export default ServiceItem
