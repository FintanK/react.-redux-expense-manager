import logo from './logo.svg';
import ExpenseEntryItemList from './components/ExpenseEntryItemList/ExpenseEntryItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Redux Expense Manager.
        </p>
        {/* <input type='number'/>
        <button>Add expense</button> */}
        <ExpenseEntryItemList />
      </header>
    </div>
  );
}

export default App;
