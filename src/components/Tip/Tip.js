import React from "react";
import "./Tip.css";

export default function Tip({ handleUserInput, userInput }) {
  return (
    <div className="tips">
      <h2>Select Tip %</h2>
      <div className="tip-options">
        <button type="submit" value="5" name="tip" onClick={handleUserInput}>
          5%
        </button>
        <button type="submit" value="10" name="tip" onClick={handleUserInput}>
          10%
        </button>
        <button type="submit" value="15" name="tip" onClick={handleUserInput}>
          15%
        </button>
        <button type="submit" value="25" name="tip" onClick={handleUserInput}>
          25%
        </button>
        <button type="submit" value="50" name="tip" onClick={handleUserInput}>
          50%
        </button>
        <input
          type="text"
          name="tip"
          inputMode="numeric"
          placeholder="Custom"
          className="input-tip"
          onChange={handleUserInput}
          onFocus={handleUserInput}
        />
      </div>
    </div>
  );
}
