import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expense/ExpenseItem';
import Expenses from './components/Expense/expenses';

function App() {
  var new_date = new Date()
  const Expense = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and CICD pipeline (as secondary skill set)
        </a>
      </header> */}

    <div>
      <h2>Let's get started!!</h2>
      <Expenses items={Expense} />
    </div>
      
    </div>
  );
}

export default App;
