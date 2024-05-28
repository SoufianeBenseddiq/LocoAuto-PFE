import React, {useState, useEffect} from "react";
import Navbar from "../../layout/Navbar"
import { useCookies  } from 'react-cookie';
import ReservedCar from "./ReservedCar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CarsHistory from "./CarsHistory";

const Historique =()=>{
  const navigate=useNavigate()
  const [session,setSession]=useState(true)
  const [token, setToken ]= useState(null)
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
    return null;
}
const [ids,setIds]=useState([])
useEffect(() => {
  const token = getCookie("token");
  if (token === null) {
    if(window.confirm("veuillez vous connecter!")){
      navigate("/login");
    }
  } else {
      setToken(token);
      // alert(token)
      setSession(true)
      const searchByToken = token
      axios.get(`http://localhost/locoauto/historique.php?token=${searchByToken}`).then(
        (response)=>{
          // alert(response.data)
          setIds(response.data)
        }
      )
  }
}, [navigate]);
  return(
    <div className=" w-full ">
      <Navbar />
      <div className=" mt-4 max-w-[1100px] mx-auto px-4  pb-10 " >
        {
          session?
          <div>
            <h1 className="text-3xl font-bold mb-4">Votre historique de Réservations</h1>
            <div className="grid grid-cols-1 gap-5 ">
              {
                ids.map((idRes)=>(<CarsHistory idRes={idRes}  />))
              }
            </div>
          </div>
          :
          <h1 className="text-3xl font-extrabold text-red-500 " >Vous devez vous identifier</h1>
        }
        
      </div>
      
    </div>
)}

export default Historique