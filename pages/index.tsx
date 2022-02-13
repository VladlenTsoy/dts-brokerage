import type {NextPage} from "next"
import Header from "../components/header/Header"
import Banner from "../components/home/banner/Banner"
import AboutUs from "../components/home/about-us/AboutUs"
import Services from "../components/home/services/Services"
import Carriers from "../components/home/carriers/Carriers"
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
