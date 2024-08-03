
import './App.css';
// import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){
  return (
    <div className='todo-app'>
     <TodoList/>
     <ToastContainer />
    </div>
  )
}

export default App;