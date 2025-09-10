import React from 'react'
import boAt_Lunar_Discovery_cut from '../../../assets/image/shopping/product/boAt_Lunar_Discovery_cut.png'
import boAt_Rockerz_460_cut from '../../../assets/image/shopping/product/boAt_Rockerz_460_cut.png'
import boAt_Aavante_Bar_600_cut from '../../../assets/image/shopping/product/boAt_Aavante_Bar_600_cut.png'
import boAt_Airdopes_Drift from '../../../assets/image/shopping/product/boAt_Airdopes_Drift.png'
import LazyImage from '../../../assets/js/LazyImage'
import '../../../assets/css/shopping.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
const MultiProductSection = () => {
  return (
    <>
        <div className="container multiProductContainer my-5">
        <div className="row">
            <div className="col-12 col-lg-6">
                <div className="row">
                    <div className="col-12" style={{backgroundColor:"#FFFFFF"}}>
                        <div className="row">
                            <div className="col-auto my-auto px-0">
                                <LazyImage src={boAt_Lunar_Discovery_cut} alt=""/>
                            </div>
                            <div className="col my-auto">
                                <p className="fs-3"><span className="fw-bold">boAt Lunar Discovery</span></p>
                                <p className="mb-0">1.39" (3.5 cm) HD Display, Turn-by-Turn Navigation, DIY Watch Face
                                    Studio, Bluetooth Calling, Emergency SOS,</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 d-flex align-items-center" style={{backgroundColor:"#EAEAEA"}}>
                        <div className="row py-3">
                            <div className="col-auto my-auto px-0">
                                <LazyImage src={boAt_Rockerz_460_cut} alt=""/>
                            </div>
                            <div className="col my-auto">
                                <p className="fs-3">boAt Rockerz <span className="fw-bold">460</span></p>
                                <p className="mb-0">Upto 30 Hours Playback, Beast Mode</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 d-flex align-items-center text-white" style={{backgroundColor:"#353535"}}>
                        <div className="row py-3">
                            <div className="col-auto my-auto px-0">
                                <LazyImage src={boAt_Aavante_Bar_600_cut} alt=""/>
                            </div>
                            <div className="col my-auto">
                                <p className="fs-3">boAt Aavante Bar <span className="fw-bold">600</span></p>
                                <p className="mb-0">25W Signature Sound
                                    7 HRS Battery, Multi Connectivity,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-6 d-flex align-items-center" style={{backgroundColor:"#F4F4F4"}}>
                <div className="row py-3">
                    <div className="col my-auto">
                        <p className="fs-3">boAt Airdopes <span className="fw-bold">Drift</span></p>
                        <p>boAt Airdopes Drift with Beast Mode, Blazing LEDs, 40 HRS Playback & ENx
                            Technology Bluetooth Gaming  (White Sabre, True Wireless)</p>
                        <a className="btn btn-outline-dark px-4 py-2">Shop Now</a>
                    </div>
                    <div className="col-auto m-auto px-0">
                        <LazyImage src={boAt_Airdopes_Drift} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default MultiProductSection
