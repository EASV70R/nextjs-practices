"use client";

import { useState } from "react";

export default function OTPLogin() {
  const [number, setNumber] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleNumberSubmit = (e) => {
    e.preventDefault();

    const regex = /^\d{10}$/;
    if (!regex.test(number)) {
      console.log("Invalid number");
      return;
    }

    setShowInput(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("OTP Sent");
  };

  return (
    <div>
      {!showInput ? (
        <form onSubmit={handleNumberSubmit}>
          <input type="text" value={number} onChange={handleNumberChange} />
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <p>Enter OTP sent to {number}</p>
      )}
    </div>
  );
}
