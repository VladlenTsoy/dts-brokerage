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
            <div className={styles.icon}>
                <Image src={icon} alt={title} width={60} height={40} />
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.desc}>{children}</div>
        </div>
    )
}

export default ServiceItem
