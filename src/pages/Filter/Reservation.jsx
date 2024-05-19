import React , {useState} from "react";
import { FaLocationDot } from "react-icons/fa6";
import Datepicker from "react-tailwindcss-datepicker";
import { Link } from "react-router-dom";

const Reservation = () => {
    document.body.style.overflowY = "scroll";
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });
    const handleValueChange = newValue => {
        setValue(newValue);
    };
    return (
        <div className=" min-screen:h-screen h-[100%] bg-black ">
            {/* Background image with reduced opacity */}
            <img
                src="http://localhost/locoauto/carsimages/suv/renaultKADJAR.jpg"
                className="absolute h-full w-full z-10 items-center object-cover opacity-30"
                alt="car"
            />

            {/* Overlay content */}
            <div className="relative z-20 flex flex-col justify-center items-center h-full min-screen:mx-0 mx-4 ">
                <div className="max-w-[900px]" >
                    <h2 className="text-white opacity-80 text-[16px] text-center ">Plateforme de location de voitures de 100% confiance au Maroc</h2>
                    <h1 className="text-white text-[42px] text-center leading-tight ">Votre voiture est prête à vous accueillir où vous le souhaitez !</h1>
                    <h2 className="text-gray-200 text-[20px] text-center ">Choisissez votre emplacement, sans avoir à vous rendre au centre de location, notre service spécial consiste à amener la voiture à l'emplacement choisi . et payment apres livraison. </h2>
                    <div className="mb-6 mt-4 flex justify-between items-center " >
                        <div className="text-white font-semibold text-2xl underline " >Voiture choisi : Honda CIVIC <span>- 500 DH/J</span> </div>
                        <Link to={"/filter"} >
                            <p className="text-white w-fit bg-transparent px-6 py-2 rounded-lg hover:bg-blue-600 cursor-pointer ease-in-out duration-300 border-white border" >Voir toutes les voitures</p>
                        </Link>
                    </div>
                </div>
                <form action="" className=" min-screen:w-[70%] min-screen:h-[100px] h-fit flex min-screen:flex-row flex-col  justify-between bg-black bg-opacity-80 pb-8 pt-2 gap-2 px-4 rounded-2xl">
                    <div className="h-fit w-fit" >
                        <p className="text-white mb-1 text-lg font-semibold" >Localisation</p>
                        <div className="flex gap-2" >
                            <div className=" cursor-pointer bg-gray-800 flex justify-between items-center px-4 rounded-lg h-10 " >
                                <FaLocationDot color="" className="mr-2 text-gray-400"  />
                                <select  name="pickup" id="" className="text-white bg-transparent focus:border-none cursor-pointer rounded-lg">
                                    <option className="bg-black border-x-1 cursor-pointer text-gray-400 " selected value="">
                                        prise
                                    </option>
                                    <option className="bg-black border-x-1 cursor-pointer " value="">
                                        Marrakech
                                    </option>
                                    <option className="bg-black border-x-1 cursor-pointer" value="">
                                        Rabat
                                    </option>
                                    <option className="bg-black border-x-1 cursor-pointer" value="">
                                        Casablanca
                                    </option>
                                    <option className="bg-black border-x-1 cursor-pointer" value="">
                                        Agadir
                                    </option>
                                    <option className="bg-black border-x-1 cursor-pointer" value="">
                                        Tangier
                                    </option>
                                    <option className="bg-black border-x-1 cursor-pointer" value="">
                                        Oujda
                                    </option>
                                    <option className="bg-black border-x-1 cursor-pointer" value="">
                                        El Jadida
                                    </option>
                                </select>
                            </div>
                            <div className=" cursor-pointer flex justify-between items-center px-4 rounded-lg bg-gray-800 h-10 " >
                                <FaLocationDot color="" className="mr-2 text-gray-400  "  />
                                <select name="pickup" id="" className="text-white bg-transparent focus:border-none cursor-pointer rounded-lg">
                                    <option className="bg-black border-x-1 cursor-pointer " selected value="">
                                        dépôt
                                    </option>
                                    <option className="bg-black border-x-1 cursor-pointer " value="">
                                        Marrakech
                                    </option>
                                    <option className="bg-black border-x-1 cursor-pointer" value="">
                                        Rabat
                                    </option>
                                    <option className="bg-black border-x-1 cursor-pointer" value="">
                                        Casablanca
                                    </option>
                                    <option className="bg-black border-x-1 cursor-pointer" value="">
                                        Agadir
                                    </option>
                                    <option className="bg-black border-x-1 cursor-pointer" value="">
                                        Tangier
                                    </option>
                                    <option className="bg-black border-x-1 cursor-pointer" value="">
                                        Oujda
                                    </option>
                                    <option className="bg-black border-x-1 cursor-pointer" value="">
                                        El Jadida
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className="" >
                        <p className="text-white mb-1 text-lg font-semibold" >Localisation</p>
                        <Datepicker 
                        value={value} 
                        onChange={handleValueChange}
                        placeholder="Période"
                        />
                    </div>
                    <div className="min-screen:mx-0 mx-auto" >
                        <p className="text-white mb-1 text-lg font-semibold h-7 " ></p>
                        <div className="text-white w-fit h-10 bg-blue-600 px-6 flex items-center rounded-lg
                        hover:bg-blue-500 cursor-pointer ease-in-out duration-300 border-white border" >Reserver</div>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default Reservation;
