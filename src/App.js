import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import FilterCars from './pages/Filter/FilterCars.jsx';
import Reservation from './pages/Filter/Reservation.jsx';

function App() {
  return (
    <div className="App mx-auto">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/contact" element={<Contact/>}  />
          <Route path="/filter" element={<FilterCars/>}  />
          <Route path="/reservation" element={<Reservation/>}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
