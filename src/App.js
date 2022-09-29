import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DummyExpenses = [
  {
    id: "e1",
    title: "Air Jorden's",
    amount: 940.12,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e2",
    title: "Zoom Max",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Buggati ",
    amount: 29.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Iphone 15 Pro Max Plus",
    amount: 5134,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DummyExpenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
