import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
// import Filter from "./pages/Filter/Filter.jsx"
import CarDetails from './pages/Filter/CarDetail.jsx';
import FilterCars from './pages/Filter/FilterCars.jsx';

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
          <Route path="/cardetails" element={<CarDetails/>}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
