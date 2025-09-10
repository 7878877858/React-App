import React, { useState, useEffect, useRef } from "react";
import earbuds from "../../../assets/image/shopping/category/earbuds.svg";
import smart_watches from "../../../assets/image/shopping/category/smart_watches.svg";
import neckband from "../../../assets/image/shopping/category/neckband.svg";
import headphones from "../../../assets/image/shopping/category/headphones.svg";
import bt_speaker from "../../../assets/image/shopping/category/bt_speaker.svg";
import power_bank from "../../../assets/image/shopping/category/power_bank.svg";
import cable from "../../../assets/image/shopping/category/cable.svg";
import adapter from "../../../assets/image/shopping/category/adapter.svg";
import LazyImage from "../../../assets/js/LazyImage";
import "../../../assets/css/shopping.css";

const categories = [
  { name: "Earbuds", img: earbuds },
  { name: "Smart Watches", img: smart_watches },
  { name: "Neckband", img: neckband },
  { name: "Headphones", img: headphones },
  { name: "BT Speaker", img: bt_speaker },
  { name: "Power Bank", img: power_bank },
  { name: "Cable", img: cable },
  { name: "Adapter", img: adapter },
];

const CategorySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const gap = 16;

  const containerRef = useRef(null);
  const cardRef = useRef(null);

  // calculate card + container width
  const updateMeasurements = () => {
    if (!containerRef.current || !cardRef.current) return;

    const containerWidth = containerRef.current.getBoundingClientRect().width;
    const cardW = cardRef.current.getBoundingClientRect().width + gap;
    const visible = Math.max(1, Math.floor(containerWidth / cardW));

    setCardWidth(cardW);
    setVisibleCards(visible);

    const maxIndex = Math.max(0, categories.length - visible);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  };

  useEffect(() => {
    updateMeasurements();
    window.addEventListener("resize", updateMeasurements);
    return () => window.removeEventListener("resize", updateMeasurements);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const maxIndex = Math.max(0, categories.length - visibleCards);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  return (
    <div className="container categoryContainer p-4 my-5">
      <div className="slider-header">
        <h3>Browse By Category</h3>
        <div>
          <button
            className="slider-btn"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            ←
          </button>
          <button
            className="slider-btn"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
          >
            →
          </button>
        </div>
      </div>

      <div className="slider-wrapper" ref={containerRef}>
        <div
          id="catSlider"
          style={{
            display: "flex",
            gap: `${gap}px`,
            transform: `translateX(-${currentIndex * cardWidth}px)`,
            transition: "transform 0.3s ease",
          }}
        >
          {categories.map((cat, index) => (
            <div
              className="category-card"
              key={index}
              ref={index === 0 ? cardRef : null} // only first card for width calc
            >
              <LazyImage src={cat.img} alt={cat.name} />
              <h6>{cat.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
