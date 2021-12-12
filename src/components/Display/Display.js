import React from "react";
import "./Display.css";

const Display = ({ tipAmount, totalAmount, handleReset }) => {
  return (
    <div className="display-results">
      <div className="display-tip">
        <div className="category">
          <h2>Tip Amount</h2>

          <p>/ person</p>
        </div>
        <span className="tip-amount">${tipAmount}</span>
      </div>
      <div className="display-total">
        <div className="category">
          <h2>Total</h2>
          <p>/ person</p>
        </div>
        <span className="total">${totalAmount}</span>
      </div>
      <button
        className="reset-button"
        type="submit"
        onClick={handleReset}
        disabled={tipAmount === "0.00"}
      >
        Reset
      </button>
    </div>
  );
};

export default Display;
