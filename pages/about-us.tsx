import React from "react"
import Header from "../components/header/Header"
import Contacts from "../components/contacts/Contacts"
import Footer from "../components/footer/Footer"
import Banner from "../components/about-us/banner/Banner"
import Benefits from "../components/about-us/benefits/Benefits"

const AboutUs = () => {
    return (
        <>
            <Header />
            <Banner />
            <Benefits />
            <Contacts />
            <Footer />
        </>
    )
}

export default AboutUs
