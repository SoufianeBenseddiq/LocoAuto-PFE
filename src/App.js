import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import FilterCars from './pages/Filter/FilterCars.jsx';
// import Reservation from './pages/Filter/Reservation.jsx';
import UserReservations from './pages/User/UserReservations.jsx';
import Historique from './pages/User/Historique.jsx';
import HomeAdmin from './Admin/HomeAdmin.jsx';

function App() {
  return (
    <div className="App mx-auto">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/HomeAdmin' element={<HomeAdmin/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/contact" element={<Contact/>}  />
          <Route path="/filter" element={<FilterCars/>}  />
          {/* <Route path="/reservation" element={<Reservation/>}  /> */}
          <Route path="/reservations" element={<UserReservations/>}  />
          <Route path="/history" element={<Historique/>}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
