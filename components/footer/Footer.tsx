import React from "react"
import styles from "./Footer.module.css"
import Image from "next/image"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.navigation}>
                <div className={styles.item}>About us</div>
                <div className={styles.item}>Carriers</div>
                <div className={styles.item}>Services</div>
                <div className={styles.item}>Contact Us</div>
            </div>
            <div className={styles.logo}>
                <Image src="/images/logo-dark.svg" alt="dts-brokerage" width={200} height={70} />
            </div>
        </div>
    )
}

export default Footer
