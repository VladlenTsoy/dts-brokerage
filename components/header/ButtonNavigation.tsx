import React, {useState} from "react"
import styles from "./ButtonNavigation.module.css"
import Link from "next/link"
import cn from "classnames"
import {useRouter} from "next/router"

const ButtonNavigation = () => {
    const router = useRouter()
    const [visible, setVisible] = useState(false)

    const onOpenHandler = () => setVisible(true)
    const onCloseHandler = () => setVisible(false)

    return (
        <>
            <div className={styles.buttonNavigation}>
                <button onClick={onOpenHandler}>
                    <div />
                    <div />
                    <div />
                </button>
            </div>
            <div className={cn(styles.draw, {[styles.open]: visible})}>
                <div className={styles.close} onClick={onCloseHandler} />
                <ol className={styles.navigation}>
                    <Link href="/about-us" passHref>
                        <a className={cn(styles.item, {[styles.active]: router.asPath === "/about-us"})}>
                            About us
                        </a>
                    </Link>
                    <Link href="/carriers" passHref>
                        <a className={cn(styles.item, {[styles.active]: router.asPath === "/carriers"})}>
                            Carriers
                        </a>
                    </Link>
                    <Link href="/services" passHref>
                        <a className={cn(styles.item, {[styles.active]: router.asPath === "/services"})}>
                            Services
                        </a>
                    </Link>
                    <Link href="/contact-us" passHref>
                        <a className={cn(styles.item, {[styles.active]: router.asPath === "/contact-us"})}>
                            Contact Us
                        </a>
                    </Link>
                </ol>
            </div>
        </>
    )
}

export default ButtonNavigation
