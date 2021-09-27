import logo from './logo.svg';
import './App.css';
const tasks = ['study', 'work', 'play'];

const Task = ({value}) => {
  return (
    <li>{value}</li>
  );
}
function App() {
  return (
    <>
    {tasks.map((task) => <Task key={task} value={task} />)}
    </>
  );
}

export default App;
