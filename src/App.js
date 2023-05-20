
import './App.css';
import ListTask from './components/ListTask';
import AddTask from './components/AddTask';
import Task from './components/Task';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <h1>To DO List<span>⏳</span></h1>
    <Routes>
    <Route path="/" element={
    <>
    <div className='Appadd'>
    <AddTask/>
    </div>
    <div className='Applist'>
   <ListTask/>
   </div>
   </>
    }/>
    <Route path="/task/:id" element={<Task/>}/>
   </Routes>
    </div>
  );
}

export default App;
