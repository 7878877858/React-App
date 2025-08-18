import gold_membership from "../../../assets/image/subscription_platform/gold_membership.png";
import gold_coin from "../../../assets/image/subscription_platform/gold_coin.svg";
import sony_liv from "../../../assets/image/subscription_platform/sony_liv.svg";
import zee5 from "../../../assets/image/subscription_platform/zee5.svg";
import disney_plus_hotstar from "../../../assets/image/subscription_platform/disney_plus_hotstar.svg";
import dominos_pizza from "../../../assets/image/subscription_platform/dominos_pizza.svg";
import uber from "../../../assets/image/subscription_platform/uber.svg";
import chaayos from "../../../assets/image/subscription_platform/chaayos.svg";
import medibuddy from "../../../assets/image/subscription_platform/medibuddy.svg";
import gaana from "../../../assets/image/subscription_platform/gaana.svg";
import pvr_cinemas from "../../../assets/image/subscription_platform/pvr_cinemas.svg";
import cafe_coffee_day from "../../../assets/image/subscription_platform/cafe_coffee_day.svg";
import starbucks from "../../../assets/image/subscription_platform/starbucks.svg";
import kfc from "../../../assets/image/subscription_platform/kfc.svg";


export default function GoldMembership() {
    return (
        <>
            <section className="d-block d-lg-none">
                <img src={gold_membership} alt="gold_membership_bg" className="w-100" />
            </section>
            <section className="d-none d-lg-flex flex-column">
                <div className="bg-secondary w-100">
                    <div className="container py-5">
                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <img src={gold_coin} alt="gold_coin" className="gold_coin" />
                            <p className="text-center fw-bold mb-0 text-gold" style={{ fontSize: "5rem" }}>GOLD MEMBERSHIP</p>
                        </div>
                        <p className="text-center text-white" style={{ fontSize: "2.5rem" }}>Exclusive deals, special discounts, and more! Join our membership for benefits up to</p>
                        <p className="text-center text-gold" style={{ fontSize: "5rem" }}>₹ 70,000</p>
                    </div>
                </div>

                <div className="container py-5">
                    <p className="text-center text-black my-4" style={{ fontSize: "2.5rem" }}>Free Premium Subscriptions</p>
                    <div className="d-flex align-items-center justify-content-center gap-4 text-center">
                        <img src={sony_liv} alt="sony_liv" className="subscription_platform_img" />
                        <img src={zee5} alt="zee5" className="subscription_platform_img" />
                        <img src={disney_plus_hotstar} alt="disney_plus_hotstar" className="subscription_platform_img" />
                        <img src={gaana} alt="gaana" className="subscription_platform_img" />
                        <p className="text-center text-black mb-0" style={{ fontSize: "2rem", lineHeight: "1" }}>& More</p>
                    </div>
                    <p className="text-center text-black my-4" style={{ fontSize: "2.5rem" }}>Top Brand Offers</p>
                    <div className="d-flex align-items-center justify-content-center gap-4 text-center">
                        <img src={dominos_pizza} alt="sony_liv"
                            className="subscription_platform_img" />
                        <img src={uber} alt="zee5"
                            className="subscription_platform_img" />
                        <img src={chaayos} alt="disney_plus_hotstar"
                            className="subscription_platform_img" />
                        <img src={medibuddy} alt="gaana"
                            className="subscription_platform_img" />
                        <p className="text-center text-black mb-0" style={{ fontSize: "2rem", lineHeight: "1" }}>& More</p>
                    </div>
                     <p className="text-center text-black my-4" style={{ fontSize: "2.5rem" }}>Offers on Brand Gift Cards</p>
                     <div className="d-flex align-items-center justify-content-center gap-4 text-center">
                        <img src={pvr_cinemas} alt="sony_liv"
                            className="subscription_platform_img" />
                        <img src={cafe_coffee_day} alt="zee5"
                            className="subscription_platform_img" />
                        <img src={starbucks} alt="disney_plus_hotstar"
                            className="subscription_platform_img" />
                        <img src={kfc} alt="gaana"
                            className="subscription_platform_img" />
                        <p className="text-center text-black mb-0" style={{ fontSize: "2rem", lineHeight: "1" }}>& More</p>
                    </div>
                </div>
            </section>
        </>
    );
}