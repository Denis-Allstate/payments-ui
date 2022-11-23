import './App.css';
import Menu from './components/MenuOpt/Menu';
import Search from './components/Search';
import TransactionsTable from './components/Transactions/TransactionsTable'

function App() {
  return <div> 
    <Menu />
    <Search/>
    <TransactionsTable />
    </div>
}

export default App;
