import React, { useRef } from "react";
import loginimg from "../../assets/image/tradgo.svg";
import CommanAuthImg from "../../assets/image/svg0.svg";
import LazyImage from "../../assets/js/LazyImage";
import Swal from "sweetalert2";
import { getLoginOtp } from "../../Api/ApiList/List";
import { useLocation, useNavigate } from "react-router-dom";
import { setApiToken } from '../../utils/authToken'

const LoginOtp = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const mobileNo = location.state?.mobileNo || "";
    const password = location.state?.password || "";
    const loginResponse = location.state?.loginResponse || {};
    const inputs = useRef([]);
    console.log("Mobile:", mobileNo);
    console.log("Password:", password);
    console.log("Login Response:", loginResponse);
    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/[^0-9]/.test(value)) return;
        e.target.value = value.slice(-1);
        if (value && index < 5) {
            inputs.current[index + 1].focus();
        }
    };
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            inputs.current[index - 1].focus();
        }
    };
    const handleVerify = async () => {
        const otp = inputs.current.map((input) => input.value).join("");
        console.log("Entered OTP:", otp);

        if (otp.length !== 6) {
            Swal.fire({ icon: "warning", title: "Enter complete 6-digit OTP" });
            return;
        }

        try {
            const res = await getLoginOtp({
                mobile_no: mobileNo,
                password: password,
                otp: otp,
            });
            console.log("OTP Verify Response:", res);

            if (res.status === "1") {
                localStorage.setItem("userData", JSON.stringify(res.data));
                const token = res.data.apitoken;
                console.log("Password API Response token:", token);
                if (token) setApiToken(token);

                Swal.fire({ icon: "success", title: "Login Success" }).then(() => {
                    navigate("/"); // Go to dashboard
                });
            } else {
                Swal.fire({ icon: "error", title: "Invalid OTP", text: res.message });
            }
        } catch (err) {
            console.error("OTP API Error:", err);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: err?.message || "Something went wrong!",
            });
        }
    };

    return (
        <div className="container">
            <div className="row h-100vh d-flex align-items-center">
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 py-3">
                    <div className="d-flex flex-column">
                        <div className="row">
                            <div className="col-6 col-sm-6 col-md-9 col-lg-12">
                                <LazyImage src={loginimg} alt="" className="logo mb-3" />
                            </div>
                        </div>
                        <h2 className="text-muted h2 mb-3">Verify Your OTP</h2>

                        <div className="col-12 mb-3">
                            <p>We’ve sent a verification code to your mobile or email.</p>
                            <div className="d-flex mb-3">
                                {[...Array(6)].map((_, i) => (
                                    <input
                                        key={i}
                                        type="text"
                                        className="form-control otp-input fs-3 text-center mx-1"
                                        maxLength="1"
                                        ref={(el) => (inputs.current[i] = el)}
                                        onChange={(e) => handleChange(e, i)}
                                        onKeyDown={(e) => handleKeyDown(e, i)}
                                    />
                                ))}
                            </div>
                            <p className="text-primary">
                                <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
                                <span className="otp_time">00:18</span>{" "}
                                <a href="/" className="ms-4">
                                    Resend
                                </a>
                            </p>
                        </div>

                        <button
                            className="btn btn-secondary mb-3 py-3"
                            onClick={handleVerify}
                        >
                            Verify
                        </button>

                        <div className="d-flex text-center mb-3">
                            <p className="mb-0 w-100">
                                Already have an account? <a href="./logincheck">Login</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="d-none d-md-block col-md-1 col-lg-3"></div>
                <div className="d-none d-sm-block col-sm-6 col-md-5 col-lg-5">
                    <LazyImage src={CommanAuthImg} alt="" className="wrapper-img" />
                </div>
            </div>
        </div>
    );
};

export default LoginOtp;
