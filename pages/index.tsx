import type {NextPage} from "next"
import Header from "../components/header/Header"
import Banner from "../components/banner/Banner"
import AboutUs from "../components/about-us/AboutUs"
import Services from "../components/services/Services"
import Carriers from "../components/carriers/Carriers"
import Contacts from "../components/contacts/Contacts"
import Footer from "../components/footer/Footer"

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <Banner />
            <AboutUs />
            <Services />
            <Carriers />
            <Contacts />
            <Footer />
        </>
    )
}

export default Home
