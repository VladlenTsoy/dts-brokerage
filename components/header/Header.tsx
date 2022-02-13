import React from "react"
import styles from "./Header.module.css"
import Image from "next/image"
import LogoImage from "assets/images/logo.svg"
import cn from "classnames"
import Link from "next/link"
import {useRouter} from "next/router"
import Head from "next/head"

interface HeaderProps {
    title?: string
    url?: string
    desc?: string
    image?: string
}

const Header: React.FC<HeaderProps> = ({title = "DTS", desc = "", image}) => {
    const router = useRouter()
    const url = (typeof window !== "undefined" && window.location.href) || "https://dts.com/"
    const host = (typeof window !== "undefined" && window.location.host) || "dts.com"
    const DefaultImage = "/images/logo-dark.svg"

    return (
        <>
            <Head>
                <title key="head-title">{title}</title>
                <meta key="head-description" name="description" content={desc} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                {/* Facebook Meta Tags */}
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={desc} />
                <meta property="og:image" content={image || DefaultImage} />
                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content={host} />
                <meta property="twitter:url" content={url} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={desc} />
                <meta name="twitter:image" content={image || DefaultImage} />
                {/* Twitter Meta Tags */}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
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
        </>
    )
}

export default Header
