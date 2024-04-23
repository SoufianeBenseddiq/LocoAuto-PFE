import React, { useState,useEffect } from "react";
import Navbar from "../../layout/Navbar";
import Car from "./Car";
import Datepicker from "react-tailwindcss-datepicker";
import { ReactTyped } from "react-typed";
import { FaLocationDot } from "react-icons/fa6";
// import { IoArrowBackCircleOutline } from "react-icons/io5";
// import { VscFilter } from "react-icons/vsc";
// import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";


const Filter=()=>{

    // const [filter,setFilter]=useState(false)
    // const displayFilter =()=>{
    //     setFilter(!filter)
    // }

    const [data, setData] = useState({
        suv: false,
        cabriolets: false,
        breaks: false,
        berlines: false,
        compacts: false,
        crossovers: false,
        ponetotwo: false,
        pthreetofive: false,
        psixormore: false,
        vonetotwo: false,
        vthreetofour: false,
        vfiveormore: false,
        automatique: false,
        manuelle: false,
    });

    const handleChange =(e)=>{
        setData({...data , [e.target.name]:e.target.value})
    }
    const handleFilter = (e) => {
        e.preventDefault(); 

        let finalData = {
            suv: data.suv ? "suv" : "",
            cabriolets: data.cabriolets ? "cabriolets" : "",
            breaks: data.breaks ? "breaks" : "",
            berlines: data.berlines ? "berlines" : "",
            compacts: data.compacts ? "compacts" : "",
            crossovers: data.crossovers ? "crossovers" : "",
            ponetotwo: data.ponetotwo ? "ponetotwo" : "",
            pthreetofive: data.pthreetofive ? "pthreetofive" : "",
            psixormore: data.psixormore ? "psixormore" : "",
            vonetotwo: data.vonetotwo ? "vonetotwo" : "",
            vthreetofour: data.vthreetofour ? "vthreetofour" : "",
            vfiveormore: data.vfiveormore ? "vfiveormore" : "",
            automatique: data.automatique ? "automatique" : "",
            manuelle: data.manuelle ? "manuelle" : "",
        };
        axios.post("http://localhost/locoauto/filter.php", finalData)
            .then(response => {
                alert(response.data);
            })
            .catch(error => {
                // Handle error
                alert('Error:', error);
            });
    };
    


    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = newValue => {
        setValue(newValue);
    };
    return(
        <div className="" >
            <Navbar />
            <div className="bg-gray-200 mt-3 ">
                {/* up filter */}
                <div className="w-full h-40 bg-black shadow-2xl z-40 " >
                    {/* <p className="text-white font-semibold text-4xl block text-center pb-4 pt-4" >Filtrer. Choisir. Reserver!</p> */}
                    <ReactTyped
                        className="text-white font-semibold text-4xl block text-center pb-4 pt-4"
                        strings={['Filtrer. Choisir. Reserver!']}
                        typeSpeed={40}
                        backSpeed={50}
                    />
                    <div className="min-screen:w-[87%] min-screen:mx-auto mx-4 min-screen:h-32 rounded-[20px] bg-[#ff0366] m-auto shadow-xl flex flex-col justify-center items-center px-4 " >
                        <form className=" flex min-screen:flex-row flex-col justify-center items-center mx-auto " action="">
                            <div className="h-10 flex justify-center rounded-lg min-screen:w-64 w-[100%] min-screen:my-0 my-5  items-center bg-white min-screen:mr-2 focus:border ">
                                <FaLocationDot size={12} color="gray" className="mx-2" />
                                <input type="text" className=" focus:outline-none bg-white rounded-lg   focus:border-blue-500  text-[18px] font-light placeholder:text-gray-400 " name="villeDepart" id="" placeholder="Ville de depart" />
                            </div>
                            <div className="flex min-screen:w-fit min-screen:my-0 mb-5" >
                                <Datepicker
                                    value={value}
                                    onChange={handleValueChange}
                                    primaryColor={"rose"}
                                    lightMode
                                    placeholder={""}
                                />
                                <select className="ml-2 font-light px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" >
                                    {[...Array(24).keys()].map(hour => (
                                        <option key={hour} value={hour}>{hour}:00</option>
                                    ))}
                                </select>
                                <select className="ml-2 font-light px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" >
                                    {[...Array(24).keys()].map(hour => (
                                        <option key={hour} value={hour}>{hour}:00</option>
                                    ))}
                                </select>   
                            </div>
                                <button className="text-white min-screen:my-0 mb-5 bg-black rounded-lg ml-2 w-[180px] border h-[40px] font-semibold  hover:bg-transparent  ease-in-out duration-[450ms]">
                                    Rechercher
                                </button>
                        </form>
                    </div>
                    
                </div>

                {/* Advanced filter */}
                <div className="flex max-w-[1100px] px-4 mx-auto " >
                    <div className="flex flex-col min-screen:mt-16 mt-32 " >
                        {/* filter div */}
                        <div className={`w-[300px] h-fit bg-white shadow-xl p-4 ease-in-out duration-300  `} >
                            <p className="text-[#ff0366] text-xl  font-semibold" >Personnalisez votre choix :</p>
                            <form action="" onSubmit={handleFilter} method="POST" >
                                {/* Categories */}
                                <div className="border-b border-b-blue-800 pb-4 mt-4" >
                                    <p className="text-lg text-blue-800" >Categorie</p>
                                    <div className="w-[50%] pt-2">
                                        {/* SUV Category */}
                                        <div className="flex flex-row justify-start" >
                                            <input type="checkbox" id="SUV" onChange={handleChange} name="suv" className="mr-4" />
                                            <label htmlFor="SUV"  className="w-full cursor-pointer">SUV</label>
                                        </div>
                                        <div className="flex flex-row justify-start" >
                                            <input type="checkbox" id="Cabriolets" onChange={handleChange} name="cabriolets" className="mr-4" />
                                            <label htmlFor="Cabriolets" className="w-full cursor-pointer" >Cabriolets</label>
                                        </div>
                                        <div className="flex flex-row justify-start" >
                                            <input type="checkbox" id="Breaks" onChange={handleChange} name="breaks" className="mr-4" />
                                            <label htmlFor="Breaks" className="w-full cursor-pointer">Breaks</label>
                                        </div>
                                        <div className="flex flex-row justify-start" >
                                            <input type="checkbox" id="Berlines" onChange={handleChange} name="berlines" className="mr-4" />
                                            <label htmlFor="Berlines" className="w-full cursor-pointer">Berlines</label>
                                        </div>
                                        <div className="flex flex-row justify-start" >
                                            <input type="checkbox" id="Compacts" onChange={handleChange} name="compacts" className="mr-4" />
                                            <label htmlFor="Compacts" className="w-full cursor-pointer">Compacts</label>
                                        </div>
                                        <div className="flex flex-row justify-start" >
                                            <input type="checkbox" id="Crossovers" onChange={handleChange} name="crossovers" className="mr-4" />
                                            <label htmlFor="Crossovers" className="w-full cursor-pointer">Crossovers</label>
                                        </div>
                                    </div>
                                </div>

                                {/* Passagers */}
                                <div className="border-b border-b-blue-800 pb-4 mt-4" >
                                    <p className="text-lg text-blue-800" >Passagers</p>
                                    <div className="w-[60%] pt-2">
                                        {/* 1 a 2 passagers*/}
                                        <div className="flex flex-row justify-start" >
                                            <input type="checkbox" id="ponetotwo" onChange={handleChange} name="ponetotwo" className="mr-4" />
                                            <label htmlFor="ponetotwo" className="w-full cursor-pointer">1 à 2 Passagers</label>
                                        </div>
                                        <div className="flex flex-row justify-start" >
                                            <input type="checkbox" id="pthreetofive" onChange={handleChange} name="pthreetofive" className="mr-4" />
                                            <label htmlFor="pthreetofive" className="w-full cursor-pointer">3 à 5 Passagers</label>
                                        </div>
                                        <div className="flex flex-row justify-start" >
                                            <input type="checkbox" id="psixormore" onChange={handleChange} name="psixormore" className="mr-4" />
                                            <label htmlFor="psixormore" className="w-full cursor-pointer">6 ou plus</label>
                                        </div>
                                    </div>
                                </div>

                                {/* Valises */}
                                <div className="border-b border-b-blue-800 pb-4 mt-4" >
                                    <p className="text-lg text-blue-800" >Valises</p>
                                    <div className="w-[60%] pt-2">
                                        {/* 1 a 2 Valises*/}
                                        <div className="flex flex-row justify-start" >
                                            <input type="checkbox" id="vonetotwo" onChange={handleChange} name="vonetotwo" className="mr-4" />
                                            <label htmlFor="vonetotwo" className="w-full cursor-pointer">1 à 2 Valises</label>
                                        </div>
                                        <div className="flex flex-row justify-start" >
                                            <input type="checkbox" id="vthreetofour" onChange={handleChange} name="vthreetofour" className="mr-4" />
                                            <label htmlFor="vthreetofour" className="w-full cursor-pointer">3 à 4 Valises</label>
                                        </div>
                                        <div className="flex flex-row justify-start" >
                                            <input type="checkbox" id="vfiveormore" onChange={handleChange} name="vfiveormore" className="mr-4" />
                                            <label htmlFor="vfiveormore" className="w-full cursor-pointer">5 ou plus</label>
                                        </div>
                                    </div>
                                </div>

                                {/* Transmission */}
                                <div className="border-b border-b-blue-800 pb-4 mt-4" >
                                    <p className="text-lg text-blue-800" >Transmssion</p>
                                    <div className="w-[60%] pt-2">
                                        {/* Automatique*/}
                                        <div className="flex flex-row justify-start" >
                                            <input type="checkbox" id="automatique" onChange={handleChange} name="automatique" className="mr-4" />
                                            <label htmlFor="automatique" className="w-full cursor-pointer">Automatique</label>
                                        </div>
                                        <div className="flex flex-row justify-start" >
                                            <input type="checkbox" id="manuelle" onChange={handleChange} name="manuelle" className="mr-4" />
                                            <label htmlFor="manuelle" className="w-full cursor-pointer">Manuelle</label>
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" value="Valider" name="" id=""  className="hover:cursor-pointer w-full bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-[#ff0366] transition duration-300" />
                            </form>
                        </div>
                        
                    </div>
                    {/* Display filtered cars */}
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 w-full ml-4 min-screen:mt-16 mt-32 border-t border-t-gray-400 pt-4 " >
                        <Car/>
                        <Car/>
                        <Car/>
                        <Car/>
                        <Car/>
                        <Car/>
                    </div>
                    {/* End of filter */}
                </div>
                
            </div>
        </div>
        
    )
}
export default Filter