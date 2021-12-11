import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Display from "./components/Display/Display";
import { ReactComponent as Logo } from "./media/logo.svg";

const initialState = {
  bill: "",
  tip: "",
  people: "",
};

function App() {
  const [userInput, setUserInput] = useState(initialState);
  const [tipAmount, setTipAmount] = useState("0.00");
  const [totalAmount, setTotalAmount] = useState("0.00");
  let validInput = true;
  useEffect(() => {
    if (!userInput.people) {
      return;
    }
    let tipPerPerson = Number(
      (userInput.bill * userInput.tip * 0.01) / userInput.people
    ).toFixed(2);
    let billPerPerson = Number(
      userInput.bill / userInput.people + userInput.tip / userInput.people
    ).toFixed(2);
    setTipAmount(tipPerPerson);
    setTotalAmount(billPerPerson);
  }, [userInput]);

  const handleUserInput = (e) => {
    e.preventDefault();
    let input = Number(e.target.value.replace(/%/, ""));
    const { name } = e.target;
    setUserInput({
      ...userInput,
      [name]: input,
    });
  };

  return (
    <div className="main">
      <div className="header">
        <Logo />
      </div>
      <div className="container">
        <form className="calculations">
          <Form
            validInput={validInput}
            handleUserInput={handleUserInput}
            userInput={userInput}
          />
        </form>
        <div className="results">
          <Display tipAmount={tipAmount} totalAmount={totalAmount} />
        </div>
      </div>
    </div>
  );
}

export default App;
