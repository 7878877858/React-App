import React, { useState } from "react";
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../assets/css/style.css";
import "../../assets/css/shopping.css";
import LazyImage from "../../assets/js/LazyImage";
import user_01 from '../../assets/image/users/user_01.png';
import Review_Image1 from '../../assets/image/shopping/product/boAtAirdopes7878/Review_Image1.png';
import Review_Image2 from '../../assets/image/shopping/product/boAtAirdopes7878/Review_Image2.png';
import B0DZXQVXMZ from '../../assets/image/shopping/product/boAtAirdopes7878/Blue/B0DZXQVXMZ.main_500x.png';
import B0DZXT72RY from '../../assets/image/shopping/product/boAtAirdopes7878/Grey/B0DZXT72RY.main_500x.png';
import B0DZXX6SKP from '../../assets/image/shopping/product/boAtAirdopes7878/Red/B0DZXX6SKP.main_500x.png';
import Artboard_3 from '../../assets/image/shopping/product/boAtAirdopes7878/Blue/Artboard_3_70e6b314-a871-47dc-965c-a5fd59cc8608_500x.png';
import Artboard_5 from '../../assets/image/shopping/product/boAtAirdopes7878/Blue/Artboard_5_7957db4f-0b9e-49d8-996e-d7debe625a04_500x.png';
import Artboard_6 from '../../assets/image/shopping/product/boAtAirdopes7878/Blue/Artboard_6_258bab1c-e318-4e0b-b269-88314b4d0474_500x.png';
import Artboard_7 from '../../assets/image/shopping/product/boAtAirdopes7878/Blue/Artboard_7_6fcb74c8-b489-42a6-a871-11f037e679d6_500x.png';
import Artboard_8 from '../../assets/image/shopping/product/boAtAirdopes7878/Blue/Artboard_8_6b3b74b8-498d-4668-aa38-21cce8df2a20_500x.png';
import Artboard_9 from '../../assets/image/shopping/product/boAtAirdopes7878/Blue/Artboard_9_c1e517e4-c750-45c3-8d2e-62bd1b9710f0_500x.png';
const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("black");
  const [mainImage, setMainImage] = useState(B0DZXQVXMZ);
  const unitPrice = 999;  // single product price
  const originalPrice = 4990;

  // Quantity handlers
  const increaseQty = () => {
    if (quantity < 99) setQuantity(quantity + 1);
  };
  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Thumbnail images
  const thumbnails = [
    B0DZXQVXMZ,
    Artboard_3,
    Artboard_5,
    Artboard_6,
    Artboard_7,
    Artboard_8,
    Artboard_9
  ];

  return (
    <div>
      <nav aria-label="breadcrumb" className="container mt-4">
        <ol className="breadcrumb bg-white p-0 m-0">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href="/shopping">Earbuds</a></li>
          <li className="breadcrumb-item active text-primary" aria-current="page">boAt Airdopes 311 Pro</li>
        </ol>
      </nav>
      <main className="container my-4">
        <div className="row g-4 mb-5 mt-0 mt-lg-5">
          <div className="col-12 col-lg-5">
            <div className="row">
              <div className="col-auto order-2 order-lg-1">
                <div className="scroll-bar-line d-flex flex-column align-items-center"
                  style={{ width: "80px", maxHeight: "372px", overflowY: "scroll", overflowX: "hidden" }}>

                  {thumbnails.map((thumb, index) => (
                    <button key={index} className="btn p-0 border rounded mb-2" style={{ width: "56px", height: "56px" }} onClick={() => setMainImage(thumb)} >
                      <LazyImage src={thumb} alt={`Thumbnail ${index + 1}`} className="img-fluid rounded" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="col order-1 order-lg-2">
                <div className="flex-grow-1 rounded p-3 d-flex justify-content-center align-items-center" style={{ minHeight: "360px", height: "fit-content" }}>
                  <LazyImage key={mainImage} src={mainImage} alt="boAt Airdopes 311 Pro" className="img-fluid rounded" style={{ maxHeight: "340px" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <h2 className="fw-bold">boAt Airdopes 311 Pro</h2>
            <p className="mb-2 text-muted">
              50 HRS Playback, ASAP Charge & Dual Mics ENx Technology Bluetooth (Active Black, True Wireless)
            </p>
            <div className="mb-3 fs-3 fw-bold">
              <span>₹{unitPrice * quantity}</span>
              <del className="fs-5 fw-normal text-muted ms-2">₹{originalPrice * quantity}</del>
              <span className="text-success fs-5 ms-2">79% OFF</span>
            </div>
            <div className="mb-4">
              <small className="text-muted fw-semibold">Select Colors</small>
              <div className="mt-2 d-flex gap-2">
                <label className={`color-option ${selectedColor === "black" ? "selected" : ""}`} title="Active Black">
                  <input type="radio" name="color" hidden checked={selectedColor === "black"}
                    onChange={() => { setSelectedColor("black"); setMainImage(B0DZXQVXMZ); }} />
                  <LazyImage src={B0DZXQVXMZ} alt="Active Black" />
                </label>
                <label className={`color-option ${selectedColor === "grey" ? "selected" : ""}`} title="Active Grey">
                  <input type="radio" name="color" hidden checked={selectedColor === "grey"}
                    onChange={() => { setSelectedColor("grey"); setMainImage(B0DZXT72RY); }} />
                  <LazyImage src={B0DZXT72RY} alt="Active Grey" />
                </label>

                <label className={`color-option ${selectedColor === "red" ? "selected" : ""}`} title="Active Red">
                  <input type="radio" name="color" hidden checked={selectedColor === "red"} onChange={() => { setSelectedColor("red"); setMainImage(B0DZXX6SKP); }} />
                  <LazyImage src={B0DZXX6SKP} alt="Active Red" />
                </label>
              </div>
              <hr />
            </div>
            <div className="d-flex align-items-center my-3 gap-3" role="group" aria-label="Quantity selector" >
              <button type="button" id="btn-minus" className="border btn btn-light" aria-label="Decrease quantity" onClick={decreaseQty} > − </button>

              <input type="text" className="form-control text-center" style={{ width: "80px" }} id="quantity-input" value={quantity}
                onChange={(e) => { const val = parseInt(e.target.value, 10); if (!isNaN(val) && val > 0 && val <= 99) { setQuantity(val); } }} />

              <button type="button" id="btn-plus" className="border btn btn-light" aria-label="Increase quantity" onClick={increaseQty} > + </button>
            </div>
            <div className="d-flex flex-wrap gap-3">
              <button className="btn btn-primary rounded-pill px-4 px-md-5">Buy Now</button>
              <button className="btn btn-dark rounded-pill px-4 px-md-5">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="my-5">
          <ul className="nav nav-tabs mb-3" id="productTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active fw-semibold fs-6" id="specifications-tab" data-bs-toggle="tab"
                data-bs-target="#specifications" type="button" role="tab" aria-controls="specifications"
                aria-selected="true">Specifications</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link fw-semibold fs-6" id="reviews-tab" data-bs-toggle="tab"
                data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews"
                aria-selected="false">Reviews</button>
            </li>
          </ul>
          <div className="tab-content" id="productTabContent">
            <div className="tab-pane fade show active" id="specifications" role="tabpanel"
              aria-labelledby="specifications-tab">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <h6 className="fw-bold fs-5 mb-3">General</h6>
                  <table className="table table-bordered spec-table mb-4">
                    <tbody>
                      <tr>
                        <th>Brand</th>
                        <td>boAt</td>
                      </tr>
                      <tr>
                        <th>Model ID</th>
                        <td>311 Pro</td>
                      </tr>
                      <tr>
                        <th>Brand Color</th>
                        <td>Active Black</td>
                      </tr>
                      <tr>
                        <th>Color</th>
                        <td>Black</td>
                      </tr>
                      <tr>
                        <th>Headphone Type</th>
                        <td>True Wireless</td>
                      </tr>
                      <tr>
                        <th>Inline Remote</th>
                        <td>No</td>
                      </tr>
                      <tr>
                        <th>Sales Package</th>
                        <td>1 Pair of Earbuds, User Manual, Product Catalog, Warranty Card, Charging
                          Cable</td>
                      </tr>
                      <tr>
                        <th>Connectivity</th>
                        <td>Bluetooth</td>
                      </tr>
                      <tr>
                        <th>Headphone Design</th>
                        <td>Earbud</td>
                      </tr>
                      <tr>
                        <th>Compatible Devices</th>
                        <td>Laptop, Mobile, Tablet</td>
                      </tr>
                      <tr>
                        <th>Fast Charging</th>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <th>Noise Cancellation</th>
                        <td>No</td>
                      </tr>
                      <tr>
                        <th>Primary Use</th>
                        <td>Music & Entertainment</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="#" className="text-primary small">Packaging and Import Info</a>
                </div>
                <div className="col-md-6 mb-4">
                  <h6 className="fw-bold fs-5 mb-3">Warranty</h6>
                  <table className="table table-bordered spec-table mb-4">
                    <tbody>
                      <tr>
                        <th>Domestic Warranty</th>
                        <td>1 Year</td>
                      </tr>
                      <tr>
                        <th>Warranty Summary</th>
                        <td>1 Year Warranty</td>
                      </tr>
                      <tr>
                        <th>Covered in Warranty</th>
                        <td>Manufacturing Defects</td>
                      </tr>
                      <tr>
                        <th>Not Covered in Warranty</th>
                        <td>Physical Damages</td>
                      </tr>
                    </tbody>
                  </table>
                  <h6 className="fw-bold fs-5 mb-3">Product Details</h6>
                  <table className="table table-bordered spec-table mb-4">
                    <tbody>
                      <tr>
                        <th>Sweat Proof</th>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <th>Deep Bass</th>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <th>With Microphone</th>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <th>Studio Headphone</th>
                        <td>No</td>
                      </tr>
                      <tr>
                        <th>True Wireless</th>
                        <td>Yes</td>
                      </tr>
                    </tbody>
                  </table>
                  <h6 className="fw-bold fs-5 mb-3">Connectivity Features</h6>
                  <table className="table table-bordered spec-table">
                    <tbody>
                      <tr>
                        <th>Bluetooth Version</th>
                        <td>5.3</td>
                      </tr>
                      <tr>
                        <th>Play Time</th>
                        <td>50 Hours</td>
                      </tr>
                      <tr>
                        <th>Headphone Jack</th>
                        <td>NA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
              <div className="row mb-4 mx-0 gap-3">
                <div className="col-auto text-center bg-light rounded-3 p-3" style={{ minWidth: "150px" }}>
                  <h3 className="mb-0">4.8</h3>
                  <div className="fs-5" style={{ color: "#FFB547" }} aria-label="4.8 out of 5 stars">
                    &#9733;&#9733;&#9733;&#9733;<span style={{ color: "#ccc" }}>&#9733;</span>
                  </div>
                  <p className="mb-0 text-muted">of 125 reviews</p>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center justify-content-between gap-3">
                    <small style={{ width: "125px" }}>Excellent</small>
                    <div className="progress w-100" style={{ height: "8px" }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small className="text-end" style={{ width: "30px" }}>100</small>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-3">
                    <small style={{ width: "125px" }}>Good</small>
                    <div className="progress w-100" style={{ height: "8px" }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small className="text-end" style={{ width: "30px" }}>11</small>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-3">
                    <small style={{ width: "125px" }}>Average</small>
                    <div className="progress w-100" style={{ height: "8px" }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: "3%" }} aria-valuenow="3" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small className="text-end" style={{ width: "30px" }}>3</small>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-3">
                    <small style={{ width: "125px" }}>Below Average</small>
                    <div className="progress w-100" style={{ height: "8px" }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small className="text-end" style={{ width: "30px" }}>8</small>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-3">
                    <small style={{ width: "125px" }}>Poor</small>
                    <div className="progress w-100" style={{ height: "8px" }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: "2%" }} aria-valuenow="2" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small className="text-end" style={{ width: "30px" }}>1</small>
                  </div>
                </div>
              </div>
              <div id="reviews">
                <div className="d-flex bg-light rounded-3 p-2 p-md-3 mb-2 mb-md-3 gap-3">
                  <LazyImage src={user_01} alt="" className="border rounded-circle" style={{ height: "100%", maxWidth: "64px", maxHeight: "64px" }} />
                  <div className="w-100">
                    <div><span className="fw-bold">Username</span><span className="float-end text-muted">24 January, 2023</span></div>
                    <div className="fs-5" style={{ color: "#FFB547" }}>&#9733;&#9733;&#9733;&#9733;<span style={{ color: "#ccc" }}>&#9733;</span></div>
                    <p>
                      It has a very beautiful look, the sound clarity is also very good, it is very
                      affordable as per the price, really sorry, good battery backup is also 50 hr.
                      Hi there, it has single charging but it is quick charging. Overall best quality in
                      this price
                    </p>
                    <button className="btn border">Helpful <i className="fa fa-thumbs-o-up"></i></button>
                  </div>
                </div>
                <div className="d-flex bg-light rounded-3 p-2 p-md-3 mb-2 mb-md-3 gap-3">
                  <LazyImage src={user_01} alt="" className="border rounded-circle" style={{ height: "100%", maxWidth: "64px", maxHeight: "64px" }} />
                  <div className="w-100">
                    <div><span className="fw-bold">Username</span><span className="float-end text-muted">24 January, 2023</span></div>
                    <div className="fs-5" style={{ color: "#FFB547" }}>&#9733;&#9733;&#9733;&#9733;<span style={{ color: "#ccc" }}>&#9733;</span></div>
                    <p>
                      Expected more! For this price...Not a deep bass...Normal bass only...Sound is
                      ok...Battery backup is good...May worth for money...✨
                    </p>
                    <button className="btn border">Helpful <i className="fa fa-thumbs-o-up"></i></button>
                  </div>
                </div>
                <div className="d-flex bg-light rounded-3 p-2 p-md-3 mb-2 mb-md-3 gap-3">
                  <LazyImage src={user_01} alt="" className="border rounded-circle" style={{ height: "100%", maxWidth: "64px", maxHeight: "64px" }} />
                  <div className="w-100">
                    <div><span className="fw-bold">Username</span><span className="float-end text-muted">24 January, 2023</span></div>
                    <div className="fs-5" style={{ color: "#FFB547" }}>&#9733;&#9733;&#9733;&#9733;<span style={{ color: "#ccc" }}>&#9733;</span></div>
                    <p>
                      Awesome product. Dual mics make calls crystal clear, no matter where I am. Love how
                      quickly they charge. Battery backup is really good. Best earbuds I have ever used
                      for battery life and sound quality.
                    </p>
                    <div className="mb-2 d-flex flex-wrap gap-2">
                      <LazyImage src={Review_Image1} alt="Review image 1" className="border rounded" style={{ width: "120px", height: "100px", objectFit: "cover" }} />
                      <LazyImage src={Review_Image2} alt="Review image 2" className="border rounded" style={{ width: "120px", height: "100px", objectFit: "cover" }} />
                      <LazyImage src={Review_Image1} alt="Review image 1" className="border rounded" style={{ width: "120px", height: "100px", objectFit: "cover" }} />
                      <LazyImage src={Review_Image2} alt="Review image 2" className="border rounded" style={{ width: "120px", height: "100px", objectFit: "cover" }} />
                      <LazyImage src={Review_Image1} alt="Review image 1" className="border rounded" style={{ width: "120px", height: "100px", objectFit: "cover" }} />
                      <LazyImage src={Review_Image2} alt="Review image 2" className="border rounded" style={{ width: "120px", height: "100px", objectFit: "cover" }} />
                    </div>
                    <button className="btn border">Helpful <i className="fa-regular fa-thumbs-up me-1"></i></button>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3">
                <button className="btn border-dark">View More <i className="fa fa-angle-down fs-6"></i></button>
              </div>
            </div>
          </div>
        </div>
        <section className="my-5 text-center">
          <h5 className="fw-bold mb-4" style={{ letterSpacing: "0.03em" }}>YOU MIGHT ALSO LIKE</h5>
        </section>
      </main>
    </div>
  );
};

export default ProductDetails;

