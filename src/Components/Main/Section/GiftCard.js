
import React from "react";
import ecommerce from "../../../assets/image/giftcard_types/ecommerce.svg";
import fashion from "../../../assets/image/giftcard_types/fashion.svg";
import apparel from "../../../assets/image/giftcard_types/apparel.svg";
import food from "../../../assets/image/giftcard_types/food.svg";
import footwear from "../../../assets/image/giftcard_types/footwear.svg";
import jewellery from "../../../assets/image/giftcard_types/jewellery.svg";
import GiftcardBoy from "../../../assets/image/giftcard_types/GiftcardBoy.svg";
import GiftcardLogo from "../../../assets/image/giftcard_types/GiftcardLogo.svg";
import GetWave from "../../../assets/image/giftcard_types/getwave_03.svg";

const giftcardTypes = [
    { icon: ecommerce, name: "E-Commerce", color: "EFF6FF" },
    { icon: fashion, name: "Fashion", color: "FEFCE8" },
    { icon: apparel, name: "Apparel", color: "EFF6FF" },
    { icon: food, name: "Food", color: "FEFCE8" },
    { icon: footwear, name: "Footwear", color: "EFF6FF" },
    { icon: jewellery, name: "Jewellery", color: "FEFCE8" },
];
// Import images

export default function Giftcard() {
    const handleServiceClick = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        let storeLink = "https://play.google.com/store/apps/details?id=com.tradgo&hl=en_IN"; 

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            storeLink = "https://apps.apple.com/in/app/tradgo-recharge-bill-payment/id6478166235";
        }

        window.open(storeLink, "_blank"); // open in new tab
    };
const scrollingOperators = [...giftcardTypes, ...giftcardTypes];
    return (
        <div
            className="container-fill px-0 pt-5 pb-0 giftcard_container"
            style={{
                backgroundImage: `url(${GetWave})`,
                backgroundRepeat: "repeat-x",
            }}
        >
            <div style={{ height: "50px" }}></div>
            <div style={{ backgroundImage: "linear-gradient(#FEF9C3, #FEF9C300)" }}>
                <section className="container">
                    <div className="row align-items-center w-100">
                        <div className="col-12 col-md-4 d-flex justify-content-around">
                            <img src={GiftcardBoy} alt="Giftcard Boy" className="giftcard_boy" />
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img src={GiftcardLogo} alt="Giftcard Logo" className="giftcard d-none d-md-block" />
                                <span className="taxt-view-lg">GIFT CARD</span>
                                <span className="taxt-view-md">Buy Gift Cards, Save Big!</span>
                                <span className="taxt-view-sm">
                                    Shop gift cards at a discount and get more value for your money!
                                    Whether you're treating yourself or surprising someone special, enjoy big savings on top brands. Buy now and save more!
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="container mt-5">
                <div className="item-slider">
                    <div className="item-list" id="giftcard_types_container">
                        {scrollingOperators.map((item, index) => (
                            <div
                                key={index}
                                className="item-card redirect-link" onClick={handleServiceClick} style={{ cursor: "pointer", backgroundColor: `#${item.color}` }}
                                
                            >
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="giftcard-icon"
                                />
                                <h3 className="giftcard-text">{item.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        
        </div>
    );
}

