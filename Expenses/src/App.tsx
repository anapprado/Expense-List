import { useState } from "react";
import ExpenseList from "./components/ExpenseList"
import "bootstrap/dist/css/bootstrap.css"
import ExpenseFilter from "./components/ExpenseFilter";



function App() {
 const [expenses, setExpenses]= useState( [ 
  { id: 1, description: "fruits", amount: 10, category: "Groceries" },
  { id: 2, description: "fruits", amount: 20, category: "Utilities" },
  { id: 3, description: "fruits", amount: 30, category: "Entertainment" },
  { id: 4, description: "fruits", amount: 40, category: "Entertainment" },
  { id: 5, description: "fruits", amount: 50, category: "Entertainment" },
]);
  

  return (
    <div>
      <ExpenseFilter onSelectCategory={category => console.log(category)} />
      <ExpenseList 
      expenses={expenses} 
      onDelete={(id) => setExpenses(expenses.filter( e => e.id !== id))} 
    />
    </div>
  );
}

export default App;
