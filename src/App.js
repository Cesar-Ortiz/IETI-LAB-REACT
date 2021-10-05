import logo from './logo.svg';
import './App.css';
import { TaskItem } from './TaskItem';

function App() {
  return (
    <main>
      <form>
        <input type="text" placeholder="Task name"/>
        <button>Create Tak</button>
      </form>
      <ul><TaskItem isChecked={true} taskName="Learn React"/></ul>
      <ul><TaskItem isChecked={false} taskName="Learn Hooks"/></ul>
      <ul><TaskItem isChecked={false} taskName="Keep On keeping on"/></ul>
    </main>
  );
}

export default App;
