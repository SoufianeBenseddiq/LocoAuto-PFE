import axios from "axios";
import React, { useState, useEffect } from "react";

const ReservedCar =({idRes})=>{
    const [msg,setMsg] = useState("")
    const [carData,setCarData]=useState({
        chemin:"",
        libelle : "",
        categorie : "",
        prixJour : "",
        dateDebut : "",
        dateFin : "",
        montantTotal : null,
        expired: false
    })
    useEffect(()=>{
        axios.get(`http://localhost/locoauto/reservedCar.php?idRes=${idRes}`).then(
            (response)=>{
                // console.log(response.data)             
                setCarData(response.data)
                // console.log(carData.libelle)   
            }
        )
        if (msg) {
            const timer = setTimeout(() => {
                setMsg("");
            }, 5000);
            return () => clearTimeout(timer); // Clean up the timer on component unmount or when msg changes
        }
    },[idRes, msg])
    const annulerReservation=()=>{
        if(window.confirm("Valider l'annulation de la réservation ?")){
            axios.get(`http://localhost/locoauto/annulerReservation.php?idRes=${idRes}`).then(
                (response)=>{
                    // alert(response.data)
                    setMsg(response.data)
                    window.location.reload()
                }
            )
        }
        
    }
    return(
        <>
            <p>{msg}</p>
            <div className="bg-white min-screen:w-[100%] w-full flex min-screen:flex-row flex-col shadow-2xl items-center p-2 ">
                <img
                src={`http://localhost/locoauto/carsimages/${carData.chemin}`}
                alt={carData.libelle}
                className=" min-screen:h-52 object-cover mr-2"
                />
                <div className=" flex min-screen:flex-row flex-col w-full justify-between h-full ">

                <div className="flex flex-col justify-between h-full " >
                    <h2 className="text-xl font-bold mb-2">{carData.libelle}</h2>
                    <p className="text-gray-600 mb-[-2px] font-normal "> <span className="text-green-500 font-medium " >Categorie : </span>{carData.categorie} </p>
                    <p className="text-gray-600 mb-[-2px] font-normal "> <span className="text-green-500 font-medium " >Prix par jour : </span> {carData.prixJour} MAD </p>
                    <p className="text-gray-600 mb-[-2px] font-normal "> <span className="text-green-500 font-medium " >De : </span> {carData.dateDebut}</p>
                    <p className="text-gray-600 mb-[-2px] font-normal "> <span className="text-green-500 font-medium " >A : </span> {carData.dateFin} </p>
                    <p className="text-gray-600 font-normal "> <span className="text-green-500 font-medium " >Montant Total : </span> {carData.montantTotal} MAD </p>
                </div>
                {/* <div className="flex flex-col justify-between min-screen:w-[60%] items-end " > */}
                    {/* <div className={` ${carData.expired?'bg-red-600':'bg-green-600'} text-white px-2 rounded-lg`}>
                        {carData.expired? "Livrée": "Reserveée" }
                    </div> */}
                    <div className="flex items-end justify-between min-screen:w-[60%] w-full min-screen:mt-0 mt-3 gap-2">
                        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 w-full rounded-md min-screen:h-fit h-[55px]">
                            Obtenir un reçu
                        </button>
                        <button onClick={annulerReservation} className="bg-red-500 hover:bg-red-600 text-white px-4 min-screen:py-2 w-full rounded-md min-screen:h-fit h-[55px]">
                            Annuler la réservation
                        </button>
                    </div>
                {/* </div> */}
                
                </div>
            </div>
        </>
    )
}

export default ReservedCar