import React from "react";
import "./BillInput.css";

export default function BillInput({ handleUserInput, userInput }) {
  return (
    <div className="total-cash-form">
      <h2>Bill</h2>
      <input
        name="bill"
        type="text"
        inputMode="numeric"
        onChange={handleUserInput}
        value={userInput.bill}
        className="input-bill"
        placeholder="0"
      />
    </div>
  );
}
