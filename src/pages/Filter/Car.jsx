import React from "react"
import car from "../../carsData/classes/SUV/ford/fordESCAPE.jpg"
import { IoPerson } from "react-icons/io5";
import { BsFillSuitcase2Fill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { SiPicardsurgeles } from "react-icons/si";
import { SiVerizon } from "react-icons/si";
import { GiGasPump } from "react-icons/gi";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";


const Car =()=>{return(
    <>
        <div className="w-full h-fit bg-white" >
            <img src={car} alt="fordEscape" />
            {/* information */}
            <div className="p-2 " >
                {/* title */}
                <div className="flex items-center  " >
                    <h1 className="font-semibold text-xl  " >Escape Ford</h1>
                    <p className="text-xs bg-blue-300 text-blue-900 ml-4 px-2 rounded-2xl " >SUV</p>
                </div>
                {/* features */}
                <div className="flex flex-col min-screen:flex-row justify-between text-gray-500 w-[100%] " >
                    <div className="flex justify-between min-screen:w-[50%] w-[100%] " >
                        <div className="flex justify-between items-center " >
                            <IoPerson />
                            <span>5</span>
                        </div>
                        <div className="flex justify-between items-center " >
                            <BsFillSuitcase2Fill/>
                            <span>1</span>
                        </div>
                        <div className="flex justify-between items-center " >
                            <GiGasPump/>
                            <span>Gasoil</span>
                        </div>
                    </div>
                    <div className="flex justify-between min-screen:w-[40%] w-[80%] mx-auto " >
                        <div className="flex justify-between items-center " >
                            <IoSettingsSharp/>
                            <span>Auto</span>
                        </div>
                        <div className="flex justify-between items-center " >
                            <SiPicardsurgeles/>
                            <span>A/C</span>
                        </div>
                    </div>
                </div>
                {/* actulalites */}
                <div className="mt-4 flex items-center " >
                    <div className="w-full" >
                        <div className="flex items-center text-[14px] " >
                            <SiVerizon color="green" className="w-6" />
                            <p className=" " >Disponibilité :le JJ-MM-AAAA</p>
                        </div>
                        <div className="flex items-center mt-1 text-[14px] " >
                            <MdAirlineSeatReclineNormal size={20} color="green" className="w-6" />
                            <p className=" " >Passagers : 4</p>
                        </div>
                        <div className="flex items-center mt-1 text-[14px] " >
                            <GiCarDoor size={18} color="green" className="w-6" />
                            <p className=" " >Portes  : 4</p>
                        </div>
                        {/* rate */}
                        <div className="flex mt-3 mx-auto" >
                            <h2 className="text-white bg-green-600 px-1" >Excelent</h2>
                            <p className="text-xs text-gray-600" >(25 commentaires)</p>
                        </div>
                    </div>
                </div>
                {/* Price and reservation */}
                <div className="w-full mt-3 flex justify-between " >
                    {/* price */}
                    <div className="w-fit flex items-center" >
                        <h2 className="font-bold text-[22px] text-green-700 " >450 DH</h2>
                        <h3 className="ml-1 text-xs font-medium line-through text-red-700 " >530 DH</h3>
                        <h3 className="text-green-600 font-medium ml-2" >-16%</h3>
                    </div>
                    {/* Reservation */}
                    <button className="text-white min-screen:my-0 mb-5 bg-blue-700 rounded-lg w-[30%]   border h-[40px] font-semibold  hover:bg-transparent  ease-in-out duration-[450ms]">
                        Reserver
                    </button>
                </div>
            </div>

        </div>
    </>
)}
export default Car