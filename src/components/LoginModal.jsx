import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const LoginModal = ({ onClose }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>First you login</h3>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={() => {
            login(email);
            onClose();
          }}
        >
          Login
        </button>

        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default LoginModal;
