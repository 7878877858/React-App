import React, { useEffect } from "react";

import arrow from "../../../assets/image/Main_style/assets/image/brands_gift_card/arrow.svg";
import bigbasket from "../../../assets/image/Main_style/assets/image/brands_gift_card/bigbasket.svg";
import himalya from "../../../assets/image/Main_style/assets/image/brands_gift_card/himalya.svg";
import makemytrip_holiday from "../../../assets/image/Main_style/assets/image/brands_gift_card/makemytrip_holiday.svg";
import myntra from "../../../assets/image/Main_style/assets/image/brands_gift_card/myntra.svg";
import pizza_hut from "../../../assets/image/Main_style/assets/image/brands_gift_card/pizza_hut.svg";
import pvr_inox_cinemas from "../../../assets/image/Main_style/assets/image/brands_gift_card/pvr_inox_cinemas.svg";
import sony_liv_6_month_subscription from "../../../assets/image/Main_style/assets/image/brands_gift_card/sony_liv_6_month_subscription.svg";
import starbucks from "../../../assets/image/Main_style/assets/image/brands_gift_card/starbucks.svg";
import tanishq_studded from "../../../assets/image/Main_style/assets/image/brands_gift_card/tanishq_studded.svg";
import trends_man from "../../../assets/image/Main_style/assets/image/brands_gift_card/trends_man.svg";
import westside from "../../../assets/image/Main_style/assets/image/brands_gift_card/westside.svg";
import "../../../assets/css/main.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LazyImage from "../../../assets/js/LazyImage";

const giftcardTypes = [
    { icon: arrow, name: "arrow" },
    { icon: bigbasket, name: "bigbasket" },
    { icon: himalya, name: "himalya" },
    { icon: makemytrip_holiday, name: "makemytrip_holiday" },
    { icon: myntra, name: "myntra" },
    { icon: pizza_hut, name: "pizza_hut" },
    { icon: pvr_inox_cinemas, name: "pvr_inox_cinemas" },
    { icon: sony_liv_6_month_subscription, name: "sony_liv_6_month_subscription" },
    { icon: starbucks, name: "starbucks" },
    { icon: tanishq_studded, name: "tanishq_studded" },
    { icon: trends_man, name: "trends_man" },
    { icon: westside, name: "westside" },

];

// ✅ Carousel function moved inside React
function useMultiCarousel() {
    useEffect(() => {
        function carousel() {
            let itemsPerSlide = window.innerWidth < 720 ? 1 : 3;
            const totalItems = document.querySelectorAll(".multi-carousel-item:not(.clone)").length;
            let slideBy = window.innerWidth < 720 ? 1 : 1;

            const carousel = document.getElementById("multiCarousel");
            const carouselInner = document.getElementById("carouselInner");
            const prevBtn = document.getElementById("prevBtn");
            const nextBtn = document.getElementById("nextBtn");

            function updateConfig() {
                const width = window.innerWidth;
                if (width < 425) {
                    itemsPerSlide = 1;
                    slideBy = 1;
                } else if (width < 720) {
                    itemsPerSlide = 2;
                    slideBy = 1;
                } else {
                    itemsPerSlide = 3;
                    slideBy = 1;
                }
            }

            function initializeClones() {
                const originalItems = Array.from(
                    document.querySelectorAll(".multi-carousel-item:not(.clone)")
                );
                document.querySelectorAll(".clone").forEach((clone) => clone.remove());

                const lastClones = originalItems
                    .slice(-itemsPerSlide)
                    .map((item) => {
                        const clone = item.cloneNode(true);
                        clone.classList.add("clone");
                        return clone;
                    })
                    .reverse();
                lastClones.forEach((clone) => carouselInner.prepend(clone));

                const firstClones = originalItems.slice(0, itemsPerSlide).map((item) => {
                    const clone = item.cloneNode(true);
                    clone.classList.add("clone");
                    return clone;
                });
                firstClones.forEach((clone) => carouselInner.append(clone));
            }

            updateConfig();
            initializeClones();

            let position = itemsPerSlide;
            let isAnimating = false;

            function updateCarouselPosition(animate = true) {
                carouselInner.style.transition = animate ? "transform 0.5s ease" : "none";
                const translateX = (position * -100) / itemsPerSlide;
                carouselInner.style.transform = `translateX(${translateX}%)`;
            }

            updateCarouselPosition(false);

            carouselInner.addEventListener("transitionend", function () {
                isAnimating = false;
                if (position >= totalItems + itemsPerSlide) {
                    position = itemsPerSlide + (position - (totalItems + itemsPerSlide));
                    updateCarouselPosition(false);
                } else if (position < itemsPerSlide) {
                    position = totalItems + position;
                    updateCarouselPosition(false);
                }
            });

            function next() {
                if (isAnimating) return;
                isAnimating = true;
                position += slideBy;
                updateCarouselPosition();
            }

            function prev() {
                if (isAnimating) return;
                isAnimating = true;
                position -= slideBy;
                updateCarouselPosition();
            }

            nextBtn.addEventListener("click", next);
            prevBtn.addEventListener("click", prev);

            // Auto-slide
            let autoAdvanceInterval = setInterval(next, 3000);
            carousel.addEventListener("mouseenter", () => clearInterval(autoAdvanceInterval));
            carousel.addEventListener("mouseleave", () => {
                autoAdvanceInterval = setInterval(next, 3000);
            });
        }

        carousel();
    }, []);
}

export default function Giftcard() {
    useMultiCarousel();

    return (
        <section className="giftcard_section my-5">
            <div className="container">
                <h1 className="text-center fw-semibold mb-4">
                    <span className="text-black">Brands </span>
                    <span className="text-primary">Gift Card</span>
                </h1>
                <p className="text-center text-muted mb-5">
                    Buy Gift Cards, Save Big!
                </p>

                {/* Carousel */}
                <div className="multi-carousel-container" id="multiCarousel">
                    <div className="multi-carousel-inner" id="carouselInner">
                        {giftcardTypes.map((item, i) => (
                            <div
                                className="multi-carousel-item text-center p-3" key={i} >
                                <LazyImage src={item.icon} alt={item.name} className="img-fluid" />
                            </div>
                        ))}
                    </div>
                    <button className="multi-carousel-control-prev" id="prevBtn">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button className="multi-carousel-control-next" id="nextBtn">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        </section>
    );
}
