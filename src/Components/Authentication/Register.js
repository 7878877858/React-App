import React from 'react'
import loginimg from '../../assets/image/tradgo.svg'
import CommanAuthImg from '../../assets/image/svg0.svg'
const Register = () => {
  return (
    <div>
       <div className="container">
        <div className="row h-100vh d-flex align-items-center">
            <div className="col-12 col-sm-12 col-md-8 col-lg-7 py-3">
                <div className="d-flex flex-column">
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-9 col-lg-12">
                            <img src={loginimg} alt="" className="logo mb-3"/>
                        </div>
                    </div>
                    <h2 className="text-muted h2 mb-3">Welcome! Let’s get you details</h2>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="form-floating text-muted fs-6">
                                    <input type="text" className="form-control" id="mobile_no"
                                        placeholder="Enter Mobile Number"/>
                                    <label for="mobile_no">Enter Mobile Number</label>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="form-floating text-muted fs-6">
                                    <input type="email" className="form-control" id="email" placeholder="Enter Email Id"/>
                                    <label for="email">Enter email id</label>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="form-floating text-muted fs-6">
                                    <input type="text" className="form-control" id="mobile_no" placeholder="Full name"/>
                                    <label for="mobile_no">Full name</label>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="form-floating text-muted fs-6">
                                    <input type="text" className="form-control" id="mobile_no"
                                        placeholder="Referral Code (Optional)"/>
                                    <label for="mobile_no">Referral Code (Optional)</label>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="form-floating text-muted fs-6">
                                    <input type="password" className="form-control" id="password"
                                        placeholder="Enter password"/>
                                    <label for="password">Enter password</label>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 mb-3">
                                <div className="form-floating text-muted fs-6">
                                    <input type="password" className="form-control" id="confirm_password"
                                        placeholder="Confirm Password"/>
                                    <label for="confirm_password">Confirm Password</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-secondary mb-3 py-3">Register</button>
                    <div className="d-flex text-center mb-3">
                        <p className="mb-0 w-100">Already have an account? <a href="./login">Login</a></p>
                    </div>
                </div>
            </div>
            <div className="d-none d-md-block col-md-4 col-lg-5">
                <img src={CommanAuthImg} alt="" className="wrapper-img"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register
