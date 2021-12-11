import React from "react";
import "./CrowdInput.css";

function CrowdInput({ handleUserInput, userInput, validInput }) {
  return (
    <div className="total-crowd-form">
      <h2>Number of people</h2>
      <input
        type="text"
        name="people"
        placeholder="0"
        inputMode="numeric"
        className={`input-crowd ${validInput ? "" : "error"}`}
        value={userInput.people}
        onChange={handleUserInput}
      />
    </div>
  );
}

export default CrowdInput;
