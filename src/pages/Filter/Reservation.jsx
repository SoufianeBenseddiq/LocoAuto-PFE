import React, { useEffect, useState } from "react";
import { FaLocationDot, FaRegAddressCard } from "react-icons/fa6";
import Datepicker from "react-tailwindcss-datepicker";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Reservation = ({ currentId, reserver, setReserver, img, libelle, prix }) => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(new Date().getMonth() + 1) // end date is one month from now
    });

    const handleValueChange = (newValue) => {
        setValue(newValue);
        const startDate = new Date(newValue.startDate);
        const endDate = new Date(newValue.endDate);
        const daysDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
        setNbJours(daysDifference + 1);
    };

    // Format date to dd-mm-yyyy
    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

    const [reservationData, setReservationData] = useState({
        carId: currentId,
        lieuRamassage: "",
        lieuDepot: "",
        dateDebut: formatDate(new Date()),
        dateFinReservation: null,
        cnie: ""
    });

    const handleChange = (e) => {
        setReservationData({ ...reservationData, [e.target.name]: e.target.value });
    };

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    const [nbJours, setNbJours] = useState(0);
    const [token, setToken] = useState(null);

    useEffect(() => {
        setToken(getCookie("token"));
    }, []);

    const navigate = useNavigate();

    const handleReservation = (e) => {
        e.preventDefault();
        const dateDebut = new Date(value.startDate);
        const dateFin = new Date(value.endDate);

        const finalReservationData = {
            carId: currentId,
            lieuRamassage: reservationData.lieuRamassage,
            lieuDepot: reservationData.lieuDepot,
            dateDebut: formatDate(dateDebut),
            dateFin: formatDate(dateFin),
            cnie: reservationData.cnie
        };

        // alert(`Nombre de jours: ${nbJours}`);
        if (token === null) {
            if (window.confirm('Vous devez vous connecter avant de réserver')) {
                navigate("/login");
            }
        } else {
            axios.post("http://localhost/locoauto/reservation.php", finalReservationData)
                .then((response) => { alert(response.data); })
                .catch(error => console.error(error));
        }
    };

    return (
        <div className={!reserver ? 'hidden' : `fixed w-[100%] mt-[-15px] z-50 mx-auto min-screen:h-screen h-[100%] bg-gray-800`}>
            <img src={img} className="absolute h-full w-full z-10 mx-auto object-cover opacity-30" alt="car" />
            <div className="relative z-20 flex flex-col justify-center items-center h-full min-screen:mx-0 mx-4">
                <div className="max-w-[900px]">
                    <h2 className="text-white opacity-80 text-[16px] text-center min-screen:block hidden">Plateforme de location de voitures de 100% confiance au Maroc</h2>
                    <h1 className="text-white text-[42px] text-center leading-tight">Votre voiture est prête à vous accueillir où vous le souhaitez !</h1>
                    <h2 className={`min-screen:block hidden text-gray-200 text-[20px] text-center`}>Choisissez votre emplacement, sans avoir à vous rendre au centre de location, notre service spécial consiste à amener la voiture à l'emplacement choisi. et payment apres livraison.</h2>
                    <div className="mb-6 mt-4 flex flex-col min-screen:flex-row justify-between items-center">
                        <div className="text-white font-semibold text-2xl underline min-screen:text-left text-center">Voiture choisi : {libelle} <span>- {prix} DH/J</span></div>
                        <Link to={"/filter"}>
                            <p onClick={() => { setReserver(false) }} className="text-white w-fit bg-transparent px-6 py-2 rounded-lg hover:bg-blue-600 cursor-pointer ease-in-out duration-300 border-white border">Annuler la reservation</p>
                        </Link>
                    </div>
                </div>
                <form onSubmit={handleReservation} className="min-screen:w-[80%] min-screen:h-[100px] h-fit flex min-screen:flex-row flex-col justify-between bg-black bg-opacity-80 pb-8 pt-2 gap-2 px-4 rounded-2xl">
                    <div className="h-fit min-screen:text-left text-center w-fit">
                        {/* localisation */}
                        <p className="text-white mb-1 text-lg font-semibold">Localisation (depart et arrivee)</p>
                        <div className="flex gap-2">
                            <div className="cursor-pointer bg-gray-800 flex justify-between items-center rounded-lg px-2 h-10">
                                <FaLocationDot className="mr-2 text-gray-400" />
                                <input type="text" onChange={handleChange} name="lieuRamassage" placeholder="ville, adresse" className="text-white w-[100px] bg-transparent focus:outline-none cursor-text" />
                            </div>
                            <div className="cursor-pointer flex justify-between items-center px-2 rounded-lg bg-gray-800 h-10">
                                <FaLocationDot className="mr-2 text-gray-400" />
                                <input type="text" onChange={handleChange} name="lieuDepot" placeholder="ville, adresse" className="text-white w-[100px] bg-transparent focus:outline-none cursor-text" />
                            </div>
                        </div>
                    </div>
                    {/* periode */}
                    <div className="min-screen:w-[30%] min-screen:text-left text-center">
                        <p className="text-white mb-1 text-lg font-semibold">Période</p>
                        <Datepicker
                            value={value}
                            onChange={handleValueChange}
                            placeholder="Période"
                        />
                    </div>
                    {/* CNIE */}
                    <div className="h-fit min-screen:text-left text-center">
                        <p className="text-white mb-1 text-lg font-semibold">CNIE</p>
                        <div className="bg-gray-800 text-white rounded-lg h-10 min-screen:w-fit w-full pl-2 flex flex-row justify-start items-center">
                            <FaRegAddressCard className="mr-2" />
                            <input type="text" name="cnie" onChange={handleChange} className="bg-gray-800 focus:outline-none rounded-lg text-white h-10 min-screen:w-[80px] w-full" placeholder="EE11111" />
                        </div>
                    </div>
                    {/* prix Total */}
                    <div className="h-fit">
                        <p className="text-white mb-1 text-lg font-semibold min-screen:text-left text-center">Total</p>
                        <div className="bg-gray-800 text-white rounded-lg h-10 min-screen:w-fit w-full  items-center">
                            <p  className="bg-gray-800 text-center pt-2 rounded-lg text-white h-10 min-screen:w-[100px] w-full">{`${nbJours * prix} MAD `}</p>
                        </div>
                    </div>
                    {/* button */}
                    <div className="min-screen:mx-0 text-right mx-auto w-fit h-fit">
                        <p className="text-white mb-1 text-lg font-semibold w-fit h-7 min-screen:block hidden"></p>
                        <input type="submit" className="text-white h-10 bg-blue-600 text-center rounded-lg px-4 hover:bg-blue-500 cursor-pointer ease-in-out duration-300 border-white border" value="Reserver" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Reservation;
