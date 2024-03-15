import { useState } from "react";
import ExpenseList from "./components/ExpenseList"
import "bootstrap/dist/css/bootstrap.css"
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

export const categories = ["Groceries", "Utilities", "Entertainment"]as const;


function App() {
 const [selectedCategory, setSelectedCategory] = useState ("");
 const [expenses, setExpenses]= useState( [ 
  { id: 1, description: "fruits", amount: 10, category: "Groceries" },
  { id: 2, description: "fruits", amount: 20, category: "Utilities" },
  { id: 3, description: "fruits", amount: 30, category: "Entertainment" },
  { id: 4, description: "fruits", amount: 40, category: "Entertainment" },
  { id: 5, description: "fruits", amount: 50, category: "Entertainment" },
]);

const visibleExpenses = selectedCategory ? expenses.filter (e => e.category === selectedCategory) : expenses;

  return (
    
    <div>
      <div className="mb-5">
        <ExpenseForm />
        
        </div>
      <div className="mb-3">
      <ExpenseFilter onSelectCategory={(category) => setSelectedCategory (category)} />
      </div>
      <ExpenseList 
      expenses={visibleExpenses} 
      onDelete={(id) => setExpenses(expenses.filter( e => e.id !== id))} 
    />
    </div>
  );
}

export default App;
