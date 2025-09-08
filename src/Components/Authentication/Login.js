import React, { useState } from "react";
import { loginUser } from "../../Api/ApiList/List";
import Swal from "sweetalert2";

function Login() {
  const [mobileNo, setMobileNo] = useState(""); // 👈 mobile number state
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const payload = {
      mobile_no: mobileNo,
      lattitude: "23.0391808",
      longitude: "72.6335488",
      place_country: "Ahmedabad",
    };

    try {
      const res = await loginUser(payload);
      console.log("API Response:", res);

      // Success Alert
      Swal.fire({
        icon: "success",
        title: "Login Success",
        text: res.message || "You are logged in successfully!",
      });

      setMessage(res.message || "Login success");
    } catch (err) {
      // Error Alert
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: err?.message || "Something went wrong!",
      });

      setMessage("Login failed");
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobileNo}
        onChange={(e) => setMobileNo(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "15px",
          width: "250px",
        }}
      />
      <button onClick={handleLogin}>Login</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
