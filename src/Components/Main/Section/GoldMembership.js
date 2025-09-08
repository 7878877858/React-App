import gold_coin from "../../../assets/image/subscription_platform/gold_coin.svg";
import LazyImage from "../../../assets/js/LazyImage";

export default function GoldMembership() {
    return (
        <>
            <section className="container border-gold my-5">
                <div className="d-flex flex-column gap-3 bg-dark-blue w-100 py-5 px-2">
                    <div className="d-flex align-items-center justify-content-center gap-3">
                        <LazyImage src={gold_coin} alt="gold_coin" className="gold_coin lazyload" />
                        <p className="text-center fw-bold mb-0 text-gold fs-1">GOLD MEMBERSHIP</p>
                    </div>
                    <p className="text-center text-white fs-3 mb-0">
                        Exclusive deals, special discounts, and more! <br />
                        Join our membership for benefits up to
                    </p>
                    <p className="text-center text-gold fs-1 mb-0">₹ 70,000</p>
                    <ul className="d-flex flex-column flex-lg-row justify-content-lg-around list-unstyled mb-0 gap-1">
                        <li className="text-center text-lg-start text-white fs-4">Free Premium Subscriptions</li>
                        <li className="text-center text-lg-start text-white fs-4">Top Brand Offers</li>
                        <li className="text-center text-lg-start text-white fs-4">Offers on Brand Gift Cards</li>
                    </ul>
                </div>
            </section>
        </>
    );
}