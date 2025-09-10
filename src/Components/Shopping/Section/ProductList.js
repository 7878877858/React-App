import React, { useState } from "react";
import boat311 from "../../../assets/image/shopping/product/boAt_Airdopes_311_PRO.png";
import boat109 from "../../../assets/image/shopping/product/boAt_Rockerz_109_Wireless.png";
import boat450 from "../../../assets/image/shopping/product/boAt_Rockerz_450_14_Pro.png";
import noiseBuzz from "../../../assets/image/shopping/product/Noise_ColorFit_Icon_Buzz.png";
import LazyImage from "../../../assets/js/LazyImage";

const ProductList = () => {
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const product_view = (product_id, combination_id) => {
    console.log("View product:", product_id, "Combination:", combination_id);
    // navigate or open modal
  };

  const products = [
    {
      product_id: 1,
      combination_id: 2,
      title: "boAt Airdopes 311 PRO 50HRS Battery, Fast Charge",
      image: boat311,
      mrp: 3490,
      price: 1599,
    },
    {
      product_id: 2,
      combination_id: 4,
      title: "boAt Rockerz 109 Wireless",
      image: boat109,
      mrp: 29990,
      price: 24990,
    },
    {
      product_id: 3,
      combination_id: 6,
      title: "boAt Rockerz 450 14 Pro",
      image: boat450,
      mrp: 29990,
      price: 24990,
    },
    {
      product_id: 4,
      combination_id: 8,
      title: "Noise ColorFit Icon Buzz",
      image: noiseBuzz,
      mrp: 29990,
      price: 24990,
    },
  ];

  return (
    <div className="container my-5">
      <div className="row align-items-stretch">
        {products.map((p) => (
          <div
            className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3"
            key={p.product_id}
          >
            <div className="productCard pt-3 d-flex flex-column">
              {/* Like Button */}
              <div
                className={`like-btn ${liked[p.product_id] ? "active" : ""}`}
                onClick={() => toggleLike(p.product_id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21s-6.5-4.35-9.33-8.17C.84 9.94 2.24 5.5 6.4 4.1 8.67 3.3 11 4.47 12 6.09c1-1.62 3.33-2.79 5.6-1.99 4.16 1.4 5.56 5.84 3.73 8.73C18.5 16.65 12 21 12 21z" />
                </svg>
              </div>

              {/* Product Image */}
              <LazyImage src={p.image} className="product-img" alt={p.title} />

              {/* Product Info */}
              <div className="p-3 d-flex flex-column flex-grow-1">
                <p className="fw-semibold fs-6 text-center text-ellipsis-3 mb-2 flex-grow-1">
                  {p.title}
                </p>

                <div className="mt-auto">
                  <div className="d-flex align-items-center justify-content-center text-center mb-2">
                    <span className="mrp">₹{p.mrp}</span>
                    <span className="price">₹{p.price}</span>
                  </div>

                  <button
                    className="btn btn-dark w-100"
                    onClick={() => product_view(p.product_id, p.combination_id)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
