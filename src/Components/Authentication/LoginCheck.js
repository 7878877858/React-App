import React, { useState ,useEffect } from 'react'
import loginimg from '../../assets/image/tradgo.svg'
import CommanAuthImg from '../../assets/image/svg0.svg'
import LazyImage from '../../assets/js/LazyImage'
import '../../assets/css/auth.css'
import '../../assets/css/style.css'
import { loginUser } from '../../Api/ApiList/List'
import Swal from 'sweetalert2'
import { setAuthToken } from '../../utils/authToken'
import { useNavigate } from 'react-router-dom'  
const LoginCheck = (handleClose) => {
      const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState(""); // ✅ Fix
  const [loginData, setLoginData] = useState(null);
const navigate = useNavigate();
    const handleMobileChange = (e) => {
        let value = e.target.value.replace(/[^0-9]/g, '');
        if (value.length > 10) value = value.slice(0, 10);
        setMobile(value);
    };

     const handleLogin = async () => {
    const payload = {
      mobile_no: mobile,
      lattitude: "23.0391808",
      longitude: "72.6335488",
      place_country: "Ahmedabad",
    };
    console.log(payload);

    try {
      const res = await loginUser(payload);
      console.log("API Response:", res);
      setMessage(JSON.stringify(res, null, 2)); // ✅ Now works
      setLoginData(res);

      if (res.status === "1") {
        const token = res.login_token;
        if (token) setAuthToken(token);
        Swal.fire({
          icon: "success",
          title: "Login Success",
          text: res.message || "You are logged in successfully!",
        });
         navigate("/login", { state: { mobileNo: mobile,loginResponse: res } });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: err?.message || "Something went wrong!",
      });
      setMessage("Login failed");
    }
  };
    useEffect(() => {
    if (mobile.length === 10) {
      handleLogin();
    }
  }, [mobile]); 

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
                            <input  type="text" className="form-control"  id="mobile_no"  placeholder="" value={mobile}  onChange={handleMobileChange}
                            />
                            <label htmlFor="mobile_no">Enter mobile number</label>
                        </div>
                        <div className="d-flex text-center">
                            <p className="mb-0 w-100">Don’t have an account ? <a href="./register">Sign up</a></p>
                        </div>
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

export default LoginCheck
