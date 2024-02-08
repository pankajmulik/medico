
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Homecontent from './component/home/Homecontent';
import Navbar from './component/navbar/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route exact path='/' element={<Home/> } />
      </Routes>
      

    </div>
  );
}

export default App;
