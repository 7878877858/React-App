import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { loginUser } from "../../Api/ApiList/List";
import Swal from "sweetalert2";
import PasswordModal from "./PasswordModal"; 
import { setAuthToken } from "../../utils/authToken";

function LoginModal({ show, handleClose }) {
  const [mobileNo, setMobileNo] = useState("");
  const [message, setMessage] = useState("");
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [loginData, setLoginData] = useState(null);

  const handleLogin = async () => {
    const payload = {
      mobile_no: mobileNo,
      lattitude: "23.0391808",
      longitude: "72.6335488",
      place_country: "Ahmedabad",
    };

    try {
      const res = await loginUser(payload);
      console.log("API Response:", res); // ✅ print karo
      setMessage(JSON.stringify(res, null, 2));
      setLoginData(res);

      if (res.status === "1") {
        const token = res.login_token; 
      if (token) setAuthToken(token);
      Swal.fire({
        icon: "success",
        title: "Login Success",
        text: res.message || "You are logged in successfully!",
      }).then(() => {
        // ✅ open password modal after closing login modal
        setShowPasswordModal(true);
      });
        handleClose(); // Login modal close
        //setShowPasswordModal(true); // ✅ Open password modal
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

  return (
    <>
      {/* Login Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter Mobile Number"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
              />
            </Form.Group>
          </Form>
          {message && <pre className="mt-2">{message}</pre>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Password Modal open on success */}
      {showPasswordModal && (
        <PasswordModal
          show={showPasswordModal}
          handleClose={() => setShowPasswordModal(false)}
          loginData={loginData} // ✅ pass login data
          mobileNo = {mobileNo}
        />
      )}
    </>
  );
}

export default LoginModal;
