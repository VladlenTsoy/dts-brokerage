import React from "react"
import styles from "./FormContactUs.module.css"

const FormContactUs = () => {
    return (
        <form className={styles.form}>
            <select className={styles.input} placeholder="This message is for: " defaultValue="0">
                <option disabled value="0">This message is for:</option>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <div className={styles.column}>
                <input className={styles.input} placeholder="Full name" />
                <input className={styles.input} placeholder="Last name" />
            </div>
            <input className={styles.input} placeholder="Email" />
            <input className={styles.input} placeholder="Phone" />
            <input className={styles.input} placeholder="Company" />
            <textarea className={styles.textarea} placeholder="Message" />
            <button className={styles.button}>Send</button>
        </form>
    )
}

export default FormContactUs
