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
function Main() {
    useEffect(() => {
        document.title = "TradGo – Recharge & Bill Payment";
    }, []); 
    return (
        <>
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