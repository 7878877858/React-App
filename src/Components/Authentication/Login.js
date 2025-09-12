import React, { useState } from 'react'
import loginimg from '../../assets/image/tradgo.svg'
import CommanAuthImg from '../../assets/image/svg0.svg'
import LazyImage from '../../assets/js/LazyImage'
import '../../assets/css/auth.css'
import '../../assets/css/style.css'
import { getLoginPassword } from '../../Api/ApiList/List'
import Swal from 'sweetalert2'
import { setApiToken } from '../../utils/authToken'
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Api/Authentication/AuthContext";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { setUser } = useAuth();
    const mobileNo = location.state?.mobileNo || "";
    const [password, setPassword] = useState("");
    const handleSubmit = async () => {
        if (!password) {
            Swal.fire({ icon: "warning", title: "Enter Password" });
            return;
        }

        try {
            const res = await getLoginPassword({
                mobile_no: mobileNo,
                password: password,
            });

            console.log("Password API Response:", res);

            if (res.status === "1") {
         
                if (res.statuscode === "OTP") {
                    navigate("/otp", { state: { mobileNo, password, loginResponse: res } });
                    return;
                }
                       const token = res.data.apitoken;
                    console.log("Password API Response token:", token);
                if (token) setApiToken(token);

                Swal.fire({
                    icon: "success",
                    title: "Password Verified",
                    text: res.message || "Password verified successfully!",
                }).then(() => {
                    localStorage.setItem("userData", JSON.stringify(res.data));
                    setUser(res.data);
                    navigate("/");
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: res.message || "Invalid password!",
                });
            }
        } catch (err) {
            console.error("Password API Error:", err);
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
                        <h2 className="text-muted h2 mb-3">Welcome! Please log in to continue</h2>

                        <div className="form-floating text-muted fs-6 mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="mobile_no"
                                value={mobileNo}
                                readOnly
                            />
                            <label htmlFor="mobile_no">Mobile Number</label>
                        </div>

                        <div className="form-floating text-muted fs-6 mb-3">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="password">Enter password</label>
                        </div>

                        <div className="mb-3">
                            <a href="/" className="text-primary float-end">Forgot password ?</a>
                        </div>

                        <button className="btn btn-secondary mb-3 py-3" onClick={handleSubmit}>
                            Login
                        </button>

                        <div className="d-flex text-center">
                            <p className="mb-0 w-100">
                                Don’t have an account ? <a href="./register">Sign up</a>
                            </p>
                        </div>

                        {/* <div className="d-flex text-center">
                            <p className="mb-0 w-100">
                                Go to <a href="./otp">OTP</a>
                            </p>
                        </div> */}
                    </div>
                </div>

                <div className="d-none d-md-block col-md-1 col-lg-3"></div>
                <div className="d-none d-sm-block col-sm-6 col-md-5 col-lg-5">
                    <LazyImage src={CommanAuthImg} alt="" className="wrapper-img" />
                </div>
            </div>
        </div>
    )
}

export default Login
