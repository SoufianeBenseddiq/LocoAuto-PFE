import React, { useState } from "react";
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
import CarDetails from "./CarDetail";


const Filter=()=>{

    // const [filter,setFilter]=useState(false)
    // const displayFilter =()=>{
    //     setFilter(!filter)
    // }

    //un tableau pre initialise de 106 nombre comme l ensemble d'ids par defaut de toutes les voitures
    const [ids, setIds] = useState(Array.from({ length: 106 }, (_, index) => index + 1));
    const [data, setData] = useState({
        categorie:null,
        nbrPassagers:null,
        nbrValises:null,
        transmission:null,
        marque:null,
        prixmin:0,
        prixmax:5000
    });

    const handleChange =(e)=>{
        setData({...data , [e.target.name]:e.target.value})
    }
    const handleFilter = (e) => {
        e.preventDefault(); 

        let finalData = {
            categorie:data.categorie,
            nbrPassagers:data.nbrPassagers,
            nbrValises:data.nbrValises,
            transmission:data.transmission,
            prixmin:data.prixmin,
            prixmax:data.prixmax
        };
        axios.post("http://localhost/locoauto/filter.php", finalData)
            .then(response => {
                // console.log(response.data.result);
                alert(response.data.result)
                setIds(response.data.result)
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
            {/* <CarDetails/> */}
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
                                    <ul className="list-none w-[70%] pt-2">
                                        <li className="flex items-center mb-2 cursor-pointer ">
                                            <input  type="radio" id="toutes" name="categorie" value={-1} onChange={handleChange} className="mr-2 cursor-pointer" />
                                            <label className=" cursor-pointer" htmlFor="toutes">Toutes les categories</label>
                                        </li>
                                        <li className="flex items-center mb-2 cursor-pointer ">
                                            <input  type="radio" id="suv" name="categorie" value={0} onChange={handleChange} className="mr-2 cursor-pointer" />
                                            <label className=" cursor-pointer" htmlFor="suv">SUV</label>
                                        </li>
                                        <li className="flex items-center mb-2 cursor-pointer">
                                            <input type="radio" id="cabriolets" name="categorie" value={1} onChange={handleChange} className="mr-2 cursor-pointer" />
                                            <label className=" cursor-pointer" htmlFor="cabriolets">Cabriolets</label>
                                        </li>
                                        <li className="flex items-center mb-2 cursor-pointer">
                                            <input type="radio" id="breaks" name="categorie" value={2} onChange={handleChange} className="mr-2 cursor-pointer" />
                                            <label className=" cursor-pointer" htmlFor="breaks">Breaks</label>
                                        </li>
                                        <li className="flex items-center mb-2 cursor-pointer">
                                            <input type="radio" id="berlines" name="categorie" value={3} onChange={handleChange} className="mr-2 cursor-pointer" />
                                            <label className=" cursor-pointer" htmlFor="berlines">Berlines</label>
                                        </li>
                                        <li className="flex items-center mb-2 cursor-pointer">
                                            <input type="radio" id="compacts" name="categorie" value={4} onChange={handleChange} className="mr-2 cursor-pointer" />
                                            <label className=" cursor-pointer" htmlFor="compacts">Compacts</label>
                                        </li>
                                        <li className="flex items-center mb-2 cursor-pointer">
                                            <input type="radio" id="crossovers" name="categorie" value={5} onChange={handleChange} className="mr-2 cursor-pointer" />
                                            <label className=" cursor-pointer" htmlFor="crossovers">Crossovers</label>
                                        </li>
                                    </ul>
                                </div>

                                {/* marques */}
                                <div className="border-b border-b-blue-800 pb-4 mt-4" >
                                    <p className="text-lg text-blue-800" >Marque</p>
                                    <ul className="list-none w-[60%] pt-2">
                                        <li className="flex items-center mb-2 cursor-pointer ">
                                            <input  type="radio" id="toutesm" name="marque" value={-1} onChange={handleChange} className="mr-2 cursor-pointer" />
                                            <label className=" cursor-pointer" htmlFor="toutesm">Toutes les marques</label>
                                        </li>
                                        <li className="flex items-center mb-2 cursor-pointer ">
                                            <input  type="radio" id="suv" name="marque" value={0} onChange={handleChange} className="mr-2 cursor-pointer" />
                                            <label className=" cursor-pointer" htmlFor="suv">SUV</label>
                                        </li>
                                        <li className="flex items-center mb-2 cursor-pointer">
                                            <input type="radio" id="cabriolets" name="marque" value={1} onChange={handleChange} className="mr-2 cursor-pointer" />
                                            <label className=" cursor-pointer" htmlFor="cabriolets">Cabriolets</label>
                                        </li>
                                        <li className="flex items-center mb-2 cursor-pointer">
                                            <input type="radio" id="breaks" name="marque" value={2} onChange={handleChange} className="mr-2 cursor-pointer" />
                                            <label className=" cursor-pointer" htmlFor="breaks">Breaks</label>
                                        </li>
                                        <li className="flex items-center mb-2 cursor-pointer">
                                            <input type="radio" id="berlines" name="marque" value={3} onChange={handleChange} className="mr-2 cursor-pointer" />
                                            <label className=" cursor-pointer" htmlFor="berlines">Berlines</label>
                                        </li>
                                        <li className="flex items-center mb-2 cursor-pointer">
                                            <input type="radio" id="compacts" name="marque" value={4} onChange={handleChange} className="mr-2 cursor-pointer" />
                                            <label className=" cursor-pointer" htmlFor="compacts">Compacts</label>
                                        </li>
                                        <li className="flex items-center mb-2 cursor-pointer">
                                            <input type="radio" id="crossovers" name="marque" value={5} onChange={handleChange} className="mr-2 cursor-pointer" />
                                            <label className=" cursor-pointer" htmlFor="crossovers">Crossovers</label>
                                        </li>
                                    </ul>
                                </div>

                                {/* Passagers */}
                                <div className="border-b border-b-blue-800 pb-4 mt-4" >
                                    <p className="text-lg text-blue-800" >Passagers</p>
                                    <div className="w-[60%] pt-2">
                                        {/* 1 a 2 passagers*/}
                                        <div className="flex flex-row justify-start" >
                                            <input type="radio" id="ponetotwo" onChange={handleChange} value={5} name="nbrPassagers" className="mr-4" />
                                            <label htmlFor="ponetotwo" className="w-full cursor-pointer">1 à 5 Passagers</label>
                                        </div>
                                        <div className="flex flex-row justify-start" >
                                            <input type="radio" id="pthreetofive" onChange={handleChange} value={6} name="nbrPassagers" className="mr-4" />
                                            <label htmlFor="pthreetofive" className="w-full cursor-pointer">6 ou plus</label>
                                        </div>
                                    </div>
                                </div>

                                {/* Valises */}
                                <div className="border-b border-b-blue-800 pb-4 mt-4" >
                                    <p className="text-lg text-blue-800" >Valises</p>
                                    <div className="w-[60%] pt-2">
                                        {/* 1 a 2 Valises*/}
                                        <div className="flex flex-row justify-start" >
                                            <input type="radio" id="vonetotwo" onChange={handleChange} value={3} name="nbrValises" className="mr-4" />
                                            <label htmlFor="vonetotwo" className="w-full cursor-pointer">1 à 3 Valises</label>
                                        </div>
                                        <div className="flex flex-row justify-start" >
                                            <input type="radio" id="vfiveormore" onChange={handleChange} value={4} name="nbrValises" className="mr-4" />
                                            <label htmlFor="vfiveormore" className="w-full cursor-pointer">4 ou plus</label>
                                        </div>
                                    </div>
                                </div>

                                {/* Transmission */}
                                <div className="border-b border-b-blue-800 pb-4 mt-4" >
                                    <p className="text-lg text-blue-800" >Transmssion</p>
                                    <div className="w-[60%] pt-2">
                                        {/* Automatique*/}
                                        <div className="flex flex-row justify-start" >
                                            <input type="radio" id="automatique" onChange={handleChange} value={"Automatique"}  name="transmission" className="mr-4" />
                                            <label htmlFor="automatique" className="w-full cursor-pointer">Automatique</label>
                                        </div>
                                        <div className="flex flex-row justify-start" >
                                            <input type="radio" id="manuelle" onChange={handleChange} value={"Manuelle"} name="transmission" className="mr-4" />
                                            <label htmlFor="manuelle" className="w-full cursor-pointer">Manuelle</label>
                                        </div>
                                    </div>
                                </div>
                                {/* prix */}
                                <div className="border-b border-b-blue-800 pb-4 mt-4" >
                                    <p className="text-lg text-blue-800" >Prix</p>
                                    <div className="">
                                        <div className="mt-2" >
                                            <label htmlFor="prixmin" className="w-full cursor-pointer">Min : </label>
                                            <input type="number" id="prixmin" onChange={handleChange} name="prixmin" placeholder="----MAD" className=" border ml-2 w-[30%] border-blue-200 " />
                                        </div>
                                        <div className="mt-2" >
                                            <label htmlFor="prixmax" className="w-full cursor-pointer">Max : </label>
                                            <input type="number" id="prixmax" onChange={handleChange} name="prixmax" placeholder="----MAD" className=" border ml-2 w-[30%] border-blue-200 " />
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" value="Valider" name="" id=""  className="hover:cursor-pointer w-full bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-[#ff0366] transition duration-300" />
                            </form>
                        </div>
                        
                    </div>
                    {/* Display filtered cars */}
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 w-full ml-4 min-screen:mt-16 mt-32 border-t border-t-gray-400 pt-4 " >
                        {/* <Car/>
                        <Car/>
                        <Car/>
                        <Car/>
                        <Car/>
                        <Car/> */}
                        {/* loop on ids and send it to data */}
                        {
                            ids.map(
                                (carId) => (
                                    <Car  carId={carId} />
                                )
                            )
                        }
                    </div>
                    {/* End of filter */}
                </div>

                {/* <div className="hidden">
                    <CarPopup idcar="5"/>
                </div> */}
                
            </div>
        </div>
        
    )
}
export default Filter