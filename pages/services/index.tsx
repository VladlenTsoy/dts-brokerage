import React from "react"
import Header from "../../components/header/Header"
import Banner from "./Banner"
import Contacts from "../../components/contacts/Contacts"
import Footer from "../../components/footer/Footer"
import List from "./List"

const Services = () => {
    return (
        <>
            <Header title="DTS Brokerage Inc - Services"/>
            <Banner />
            <List />
            <Contacts />
            <Footer />
        </>
    )
}

export default Services
