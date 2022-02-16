import type {NextPage} from "next"
import Header from "../components/header/Header"
import Banner from "./home/Banner"
import AboutUs from "./home/AboutUs"
import Services from "./home/Services"
import Carriers from "./home/Carriers"
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
