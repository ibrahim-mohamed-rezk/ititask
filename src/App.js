import './App.css';
import Display from './components/Display';
import Header from './components/Header';
import {employeesData } from './data/data';

function App() {
  return (
    <div className="App">
      {Header }
      <Display employees={employeesData} />
    </div>
  );
}

export default App;
