import React from "react";
import "./CrowdInput.css";

function CrowdInput({ handleUserInput, userInput }) {
  return (
    <div className="total-crowd-form">
      <div className="total-crowd-header">
        <h2>Number of people</h2>
        {userInput.bill > 0 && userInput.tip > 0 && userInput.people == 0 && (
          <p>Can't be zero</p>
        )}
      </div>
      <input
        type="text"
        name="people"
        placeholder="0"
        inputMode="numeric"
        className="input-crowd"
        value={userInput.people}
        onChange={handleUserInput}
      />
    </div>
  );
}

export default CrowdInput;
