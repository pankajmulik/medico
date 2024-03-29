
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Homecontent from './component/home/Homecontent';
import Navbar from './component/navbar/Navbar';
import Home from './pages/Home';
import Review from './pages/review/Review';
import NoteState from './component/context/notes/Notestate';
function App() {
  return (
    <div className="App">
 <NoteState>
      <Routes>
        <Route exact path='/' element={<Home />} />
        
        <Route />

        <Route path='/review' element={<Review/>}>
          
</Route>

      </Routes>
      
      </NoteState>
    </div>
  );
}

export default App;
