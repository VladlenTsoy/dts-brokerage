import React from "react"
import styles from "./Header.module.css"
import Image from "next/image"
import LogoImage from "assets/images/logo.svg"

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image src={LogoImage} width={200} height={70}/>
                </div>
                <div className={styles.navigation}>
                    <div className={styles.item}>About us</div>
                    <div className={styles.item}>Carriers</div>
                    <div className={styles.item}>Services</div>
                    <div className={styles.item}>Contact Us</div>
                </div>
            </div>
        </div>
    )
}

export default Header
