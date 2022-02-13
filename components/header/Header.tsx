import React from "react"
import styles from "./Header.module.css"
import Image from "next/image"
import LogoImage from "assets/images/logo.svg"
import cn from "classnames"
import Link from "next/link"
import {useRouter} from "next/router"

const Header = () => {
    const router = useRouter()
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <Link href="/" passHref>
                    <div className={styles.logo}>
                        <Image src={LogoImage} alt="dts-brokerage" width={200} height={70} />
                    </div>
                </Link>
                <div className={styles.navigation}>
                    <Link href="/about-us" passHref>
                        <div className={cn(styles.item, {[styles.active]: router.asPath === "/about-us"})}>
                            About us
                        </div>
                    </Link>
                    <Link href="/carriers" passHref>
                        <div className={cn(styles.item, {[styles.active]: router.asPath === "/carriers"})}>
                            Carriers
                        </div>
                    </Link>
                    <Link href="/services" passHref>
                        <div className={cn(styles.item, {[styles.active]: router.asPath === "/services"})}>
                            Services
                        </div>
                    </Link>
                    <Link href="/contact-us" passHref>
                        <div className={cn(styles.item, {[styles.active]: router.asPath === "/contact-us"})}>
                            Contact Us
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
