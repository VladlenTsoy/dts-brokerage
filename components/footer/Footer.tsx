import React from "react"
import styles from "./Footer.module.css"
import Image from "next/image"
import Link from "next/link"
import cn from "classnames"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.navigation}>
                <Link href="/about-us" passHref>
                    <div className={cn(styles.item)}>
                        About us
                    </div>
                </Link>
                <Link href="/carriers" passHref>
                    <div className={cn(styles.item)}>
                        Carriers
                    </div>
                </Link>
                <Link href="/services" passHref>
                    <div className={cn(styles.item)}>
                        Services
                    </div>
                </Link>
                <Link href="/contact-us" passHref>
                    <div className={cn(styles.item)}>
                        Contact Us
                    </div>
                </Link>
            </div>
            <div className={styles.logo}>
                <Image src="/images/logo-dark.svg" alt="dts-brokerage" width={200} height={70} />
            </div>
        </div>
    )
}

export default Footer
