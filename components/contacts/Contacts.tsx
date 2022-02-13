import React from "react"
import styles from "./Contacts.module.css"
import FormContactUs from "../form-contact-us/FormContactUs"

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <h2>Contacts</h2>
            <div className={styles.banner}>
                <div className={styles.container}>
                    <FormContactUs />
                </div>
            </div>
        </div>
    )
}

export default Contacts
