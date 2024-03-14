import ExpenseList from "./components/ExpenseList"
import "bootstrap/dist/css/bootstrap.css"

function App() {

  const expenses = [
    { id: 1, description: "fruits", amount: 10, category: "Food" },
    { id: 2, description: "fruits", amount: 20, category: "Food" },
    { id: 3, description: "fruits", amount: 30, category: "Food" },
    { id: 4, description: "fruits", amount: 40, category: "Food" },
    { id: 5, description: "fruits", amount: 50, category: "Food" },
  ];

  return (
    <div>
      <ExpenseList expenses={expenses} onDelete={(id) => console.log('Delete', id)} />
    </div>
  );
}

export default App;