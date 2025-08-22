import '../../assets/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../assets/css/main.css';
import '../../assets/css/snow_fall.css';
import Hero from "../../Components/Main/Section/Hero";
import RechargeBillPayments from "../../Components/Main/Section/RechargeBillPayments";
import Features from "./Section/Features";
import Connecting from "./Section/Connecting";
import Travel from "./Section/Travel";
import Airplane from "./Section/Airplane";
import BookTickets from "./Section/BookTickets";
import GoldMembership from './Section/GoldMembership';
import ReferEarn from './Section/ReferEarn';
import Testimonials from './Section/Testimonials';
import { useEffect } from "react";
import Giftcard from './Section/GiftCard';
import Shopping from './Section/Shopping';
import { Helmet } from "react-helmet";
function Main() {
    useEffect(() => {
        document.title = "Dashboard | TradGo Recharge & Bill Payment";
    }, []);
    return (
        <>
            <Helmet>
                <title>Mobile Recharge & Bill Payment App | TradGo</title>
                <meta name="description" content="TradGo – Fast and secure mobile recharge & bill payment app. Recharge prepaid, pay postpaid, DTH, electricity, gas, and water bills online." />
                <meta name="keywords" content="Mobile Recharge Online, Online Bill Payment, Prepaid Recharge, Postpaid Bill Payment, DTH Recharge Online, Electricity Bill Payment, Gas Bill Payment, Water Bill Payment, TradGo Recharge App, Secure Online Recharge, Recharge Offers, Cashback on Recharge" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Mobile Recharge & Bill Payment App | TradGo" />
                <meta property="og:description" content="Your recharge & bill payment app" />
                <meta property="og:image" content="image/og_image.png" />
                <meta property="og:url" content="https://tradgo.in" />

                {/* Favicon */}
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
                <link rel="canonical" href="https://tradgo.in" />
            </Helmet>
            <Hero />
            <RechargeBillPayments />
            <Features />
            <Connecting />
            <Giftcard />
            <Shopping />
            <Travel />
            <Airplane />
            <BookTickets />
            <GoldMembership />
            <ReferEarn />
            <Testimonials />
        </>
    );
}

export default Main;