import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const { onAddExpense } = props;

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (EnteredExpenseData) => {
    const expenseData = {
      ...EnteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const StartEditingHandler = () => {
    setIsEditing(true);
  };

  const StopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={StartEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={StopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
