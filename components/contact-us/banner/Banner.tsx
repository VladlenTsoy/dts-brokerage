import React from "react"
import styles from "./Banner.module.css"
import FormContactUs from "../../form-contact-us/FormContactUs"

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.container}>
                <div className={styles.title}>Contact Us</div>
                <FormContactUs />
            </div>
        </div>
    )
}

export default Banner
