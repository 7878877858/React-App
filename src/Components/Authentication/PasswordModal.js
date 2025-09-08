import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { getLoginPassword } from "../../Api/ApiList/List";
import { setAuthToken } from "../../utils/authToken";
import OTPModal from "./OTPModal";

function PasswordModal({ show, handleClose, loginData, mobileNo }) {
  const [password, setPassword] = useState("");
  const [showOTPModal, setShowOTPModal] = useState(false);
  const token = loginData?.login_token;

  const handleSubmit = async () => {
    if (!password) {
      Swal.fire({ icon: "warning", title: "Enter Password" });
      return;
    }

    try {
      const res = await getLoginPassword({ mobile_no: mobileNo, password });
      console.log("Password API Response:", res);

      if (res.status === "1") {
        if (token) setAuthToken(token);

        if (res.statuscode === "OTP") {
          // Open OTP modal
          setShowOTPModal(true);
          
          return;
        }

        // Normal login success
        Swal.fire({
          icon: "success",
          title: "Password Verified",
          text: res.message || "Password verified successfully!",
        }).then(() => handleClose());
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
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <strong>Mobile:</strong> {mobileNo}
          </div>
          <Form>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* OTP Modal */}
      {showOTPModal && (
        <OTPModal
          show={showOTPModal}                 // ✅ show OTP modal
          handleClose={() => setShowOTPModal(false)} // ✅ close OTP modal
          mobileNo={mobileNo}
        />
      )}
    </>
  );
}

export default PasswordModal;
