import React from "react";
import LazyImage from "../../../assets/js/LazyImage";
import "../../../assets/css/main.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Mjio from "../../../assets/image/Main_style/assets/image/operators/mobile/Jio.svg";
import MMain from "../../../assets/image/Main_style/assets/image/mobile/01.png";
import Mairtel from "../../../assets/image/Main_style/assets/image/operators/mobile/Airtel.svg";
import Mbsnl from "../../../assets/image/Main_style/assets/image/operators/mobile/Bsnl.svg";
import Mvodafon from "../../../assets/image/Main_style/assets/image/operators/mobile/vodafone.svg";

import Dairtel from "../../../assets/image/Main_style/assets/image/operators/dth/Airtel.svg";
import Dd2h from "../../../assets/image/Main_style/assets/image/operators/dth/D2h_logo_Brand.svg";
import Ddish from "../../../assets/image/Main_style/assets/image/operators/dth/Group_10120.svg";
import Dsun from "../../../assets/image/Main_style/assets/image/operators/dth/image.svg";
import Dtatsky from "../../../assets/image/Main_style/assets/image/operators/dth/image-1.svg";
import DMain from "../../../assets/image/Main_style/assets/image/mobile/02.png";

import EMain from "../../../assets/image/Main_style/assets/image/mobile/03.png";
import Etorrent from "../../../assets/image/Main_style/assets/image/operators/electricity_bill/torrent.svg";
import Eadani from "../../../assets/image/Main_style/assets/image/operators/electricity_bill/adani.svg";
import Ebest from "../../../assets/image/Main_style/assets/image/operators/electricity_bill/best.svg";
import Emaha from "../../../assets/image/Main_style/assets/image/operators/electricity_bill/mahavitaran.svg";

const features = [
  {
    title: "Mobile Recharge",
    p: [
      "TradGo simplifies online mobile recharge and bill payments across India, offering seamless services for all major telecom operators, including Airtel, Vodafone, Jio, and BSNL.",
      "With cutting-edge encryption technology, TradGo ensures secure transactions through multiple payment options like credit/debit cards, net banking, e-wallets, and UPI.",
    ],
    btnTitle: "Recharge Now",
    operatorsImg: [Mjio, Mairtel, Mbsnl, Mvodafon],
    src: MMain,
    alt: "mobile",
  },
  {
    title: "DTH Recharge",
    p: [
      "TradGo is a rapidly growing platform designed to simplify your DTH (Direct to Home) recharge experience",
      "Enjoy fast, hassle-free recharges for all major operators, including Airtel DTH, Tata Sky, Videocon D2H, Dish TV, and more—all in one place!",
    ],
    btnTitle: "Recharge Now",
    operatorsImg: [Dairtel, Dd2h, Ddish, Dsun, Dtatsky],
    src: DMain,
    alt: "dth",
  },
  {
    title: "Electricity Bill Payment",
    p: [
      "With TradGo, paying your electricity bills is quick, secure, and hassle-free. We support a wide range of providers, including SBPDCL, BSES Rajdhani, TATA Power, BEST Mumbai, Adani Electricity, and many others.",
      "Pay your electricity bill instantly – avoid late fees and enjoy uninterrupted power. Just select the bill option, enter your consumer number, view details, and pay in seconds!",
    ],
    btnTitle: "Bill Pay Now",
    operatorsImg: [Etorrent, Eadani, Ebest, Emaha],
    src: EMain,
    alt: "electricity",
  },


];
function Features() {
  return (
    <section className="features">
      <div className="container">
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="110000000" >
          <div className="carousel-inner">
            {features.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index} >
                <div className="article-bg row align-items-center p-4">
                  <div className="col my-auto">
                    <h1 className="fs-1">{item.title}</h1>

                    {item.p?.map((p, i) => (
                      <p className="fs-6" key={i}>  {p}  </p>
                    ))}

                    <button className="btn btn-primary fs-3">
                      {item.btnTitle}{" "}
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </button>

                    <div className="d-flex mt-3 gap-3">
                      {item.operatorsImg?.map((op, i) => (
                        <LazyImage key={i} src={op} alt="operator" className="rounded-circle operator-img" />
                      ))}
                    </div>
                  </div>

                  <div className="d-none d-md-block col-auto col-lg my-auto">
                    <div className="hero-image" data-aos="zoom-in" data-aos-delay="300"
                    >
                      <div className="image-wrapper">
                        <LazyImage src={item.src} alt={item.alt} className="operator-img-mobile img-fluid float-end pe-0 pe-lg-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev justify-content-start" type="button" data-bs-target="#myCarousel" data-bs-slide="prev" >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next justify-content-end" type="button" data-bs-target="#myCarousel" data-bs-slide="next" >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Features;
