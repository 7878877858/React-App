import React from "react";
import boat450 from "../../../assets/image/shopping/product/boAt_Rockerz_450_14_Pro.png";
import boat600 from "../../../assets/image/shopping/product/boAt_Airdopes_311_PRO.png";
import boatair from "../../../assets/image/shopping/product/boAt_Airdopes_Drift.png";
import boat460 from "../../../assets/image/shopping/product/Noise_ColorFit_Icon_Buzz.png";

import LazyImage from "../../../assets/js/LazyImage";

const slides = [
    {
        title: "boAt Rockerz 450 14 Pro",
        subtitle: "Wireless Headphones",
        desc: "Up to 70 hours playback with immersive sound",
        img: boat450,
        imgFirst: false,
        textAlign: false,
    },
    {
        title: "boAt Airdopes 311 PRO",
        subtitle: "True Wireless Earbuds",
        desc: "Enjoy immersive sound with long battery life",
        img: boat600,
        imgFirst: false,
        textAlign: true,
    },
    {
        title: "boAt Airdopes Drift",
        subtitle: "Bluetooth Earbuds",
        desc: "Crystal clear sound with deep bass",
        img: boatair,
        imgFirst: true,
        textAlign: false,
    },
    {
        title: "Noise ColorFit Icon Buzz",
        subtitle: "Smart Watch",
        desc: "Stay connected with smart notifications",
        img: boat460,
        imgFirst: true,
        textAlign: true,
    },
];


const Carousel = () => {
    return (
        <div
            id="carouselProductBanner"
            className="carousel slide carouselProductBanner"
            data-bs-ride="carousel"
            data-bs-interval="3000"
        >
            <div
                className="container carousel-inner d-flex align-items-center"
                id="productCarouselInner"
                style={{minHeight: "500px"}}
            >
                {slides.map((slide, index) => {
                    const isActive = index === 0 ? "active" : "";
                    const textOrder = slide.imgFirst ? "order-2 order-md-1" : "order-1 order-md-1";
                    const imgOrder = slide.imgFirst ? "order-1 order-md-2" : "order-2 order-md-2";
                    const textAlign = slide.textAlign ? "text-start" : "text-center";

                    return (
                        <div className={`carousel-item ${isActive}`} key={index}>
                            <div className="row my-4">
                                <div
                                    className={`col my-auto ${textOrder} ${textAlign} text-md-start text-white`}
                                >
                                    <p className="fs-6 mb-0">{slide.subtitle}</p>
                                    <p className="fs-1 mb-0">{slide.title}</p>
                                    <p className="fs-6 mb-2">{slide.desc}</p>
                                    <a href="#" className="btn btn-outline-light mb-2">
                                        Shop Now
                                    </a>
                                </div>
                                <div className={`col-12 col-md-auto ${imgOrder} my-auto`}>
                                    <LazyImage
                                        src={slide.img}
                                        alt={slide.title}
                                        className="img-fluid d-block mx-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <button
                className="carousel-control-prev justify-content-start"
                type="button"
                data-bs-target="#carouselProductBanner"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next justify-content-end"
                type="button"
                data-bs-target="#carouselProductBanner"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
