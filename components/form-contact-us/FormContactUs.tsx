import React, {useRef, useState} from "react"
import axios from "axios"
import styles from "./FormContactUs.module.css"

const FormContactUs = () => {
    const ref = useRef<any>()
    const [loading, setLoading] = useState(false)
    const [visibleMessage, setVisibleMessage] = useState(false)
    //
    const serializeForm = () => {
        const obj = {}
        const formData = new FormData(ref.current)
        // @ts-ignore
        for (const key of formData.keys()) {
            // @ts-ignore
            obj[key] = formData.get(key)
        }
        return obj
    }
    //
    const onSubmitHandler = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        const body = serializeForm()
        const response = await axios.post("https://api.dtsincorporated.com/dtsbrokers", body)
        // const response = await axios.post("http://localhost:8000/dtsbrokers", body)
        setLoading(false)
        if (response.status) {
            setVisibleMessage(true)
        }
    }

    if (visibleMessage)
        return <>
            <div className={styles.message}>
                You have successfully submitted your application. You will be contacted shortly!
            </div>
        </>

    return (
        <form className={styles.form} onSubmit={onSubmitHandler} ref={ref}>
            <select name="for_whom" className={styles.input} placeholder="This message is for: " required>
                <option value="Sales">This message is for: Sales</option>
                <option value="Customer">This message is for: Customer</option>
                <option value="Service">This message is for: Service</option>
                <option value="Fleet dispatch">This message is for: Fleet dispatch</option>
                <option value="Careers">This message is for: Careers</option>
            </select>
            <div className={styles.column}>
                <input name="full_name" className={styles.input} placeholder="Full name" required />
                <input name="last_name" className={styles.input} placeholder="Last name" required />
            </div>
            <input name="email" className={styles.input} placeholder="Email" required />
            <input name="phone" className={styles.input} placeholder="Phone" required />
            <input name="company" className={styles.input} placeholder="Company" required />
            <textarea name="message" className={styles.textarea} placeholder="Message" required />
            <button type="submit" className={styles.button}
                    disabled={loading}>{loading ? "Sending..." : "Send"}</button>
        </form>
    )
}

export default FormContactUs
