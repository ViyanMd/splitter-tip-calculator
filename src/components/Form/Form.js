import React from "react";
import BillInput from "../BillInput/BillInput";
import CrowdInput from "../CrowdInput/CrowdInput";
import Tip from "../Tip/Tip";

function Form({ handleUserInput, userInput, validInput }) {
  return (
    <div>
      <BillInput handleUserInput={handleUserInput} userInput={userInput} />
      <Tip handleUserInput={handleUserInput} userInput={userInput} />
      <CrowdInput
        handleUserInput={handleUserInput}
        userInput={userInput}
        validInput={validInput}
      />
    </div>
  );
}

export default Form;
