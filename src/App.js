import './App.css';
import AddToDo from './components/AddToDo';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div>
      <header className="App-header">
        <Header />
        <AddToDo />
        <ToDoList />
      </header>
    </div>
  );
}

export default App;
