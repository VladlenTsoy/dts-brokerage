import React from "react"
import Header from "../../components/header/Header"
import Contacts from "../../components/contacts/Contacts"
import Footer from "../../components/footer/Footer"
import Banner from "./Banner"
import Benefits from "./Benefits"

const AboutUs = () => {
    return (
        <>
            <Header title="DTS Brokerage Inc - About Us" />
            <Banner />
            <Benefits />
            <Contacts />
            <Footer />
        </>
    )
}

export default AboutUs
