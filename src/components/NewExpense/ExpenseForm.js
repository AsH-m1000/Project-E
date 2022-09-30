import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const { onSaveExpenseData, onCancel } = props;
  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmout, setEnteredAmout] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   EnteredTitle: "",
  //   EnteredAmout: "",
  //   EnteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   EnteredTitle: event.target.value,
    // });
    // setUserInput((...prevState) => {sakdjfh
    //   return { ...prevState, EnteredTitle: event.target.value }; // you Should always keep the prevState (Store)
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmout(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   EnteredAmout: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   EnteredDate: event.target.value,
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: EnteredTitle,
      amount: EnteredAmout,
      date: new Date(EnteredDate),
    };
    // console.log(expenseData);
    onSaveExpenseData(expenseData);

    setEnteredAmout("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title</lable>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={EnteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <lable>Amount</lable>
          <input
            type="number"
            value={EnteredAmout}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <lable>Date</lable>
          <input
            type="Date"
            value={EnteredDate}
            min="2000-06-04"
            max="2023-01-09"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          CanCel
        </button>
        <button type="submit">AddExpense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
