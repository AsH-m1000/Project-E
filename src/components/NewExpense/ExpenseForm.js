import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title</lable>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <lable>Amount</lable>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <lable>Date</lable>
          <input type="Date" min="2022-06-04" max="2022-08-09" />
        </div>
        <div className="new-expense__actions">
          <button type="submit">AddExpense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
