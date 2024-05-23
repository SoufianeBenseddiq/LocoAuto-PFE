import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { BsFillSuitcase2Fill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { SiPicardsurgeles } from "react-icons/si";
import { GiGasPump } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { PiArrowRightThin } from "react-icons/pi";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import axios from "axios";
import Comment from "./Comment";
import Reservation from "./Reservation";
import "aos/dist/aos.css";


const CarDetails = ({currentId,changeCurrentId}) => {
    const [showComments, setShowComments] = useState(false);
    const [img,setImg]=useState([])
    const [indexImg,setIndexImg]=useState(0)
    const [reserver,setReserver] = useState(false)
    const [id,setId] = useState(null)

    const [carData, setCarData] = useState({
        libelle: "",
        categorie: "",
        dateAchat: "",
        description: "",
        marque: "",
        nbr_passagers: "",
        nbr_valises: "",
        prix: "",
        transmission: "",
        chemin1: "",
        chemin2: "",
        chemin3: "",
        comments:[],
    });
    const handleImageRight=(ind)=>{
        if(ind===2){
            setIndexImg(0)
        }else{
            setIndexImg(ind + 1)
        }
    }
    const handleImageLeft=(ind)=>{
        if(ind===0){
            setIndexImg(2)
        }else{
            setIndexImg(ind - 1)
        }
    }
    if(currentId.length!==0 && currentId !=="none" ){
        axios.post("http://localhost/locoauto/carDetails.php", currentId)
            .then(response => {
                setCarData(response.data);
                // console.log(carData)
                setId(currentId)
                changeCurrentId("none")
                setIndexImg(0)
                setShowComments(false)
                setImg([response.data.chemin1,response.data.chemin2,response.data.chemin3])
            })
            .catch(error => {
                // console.error("Error fetching car data:", error);
            });
    }
    return (
        <> 
        <div className={currentId.length===0?" hidden":"fixed w-[100%] h-[1000%] opacity-60 mt-[-20px] bg-black "} ></div>
        <Reservation currentId={id} reserver={reserver} setReserver={setReserver} img={carData.chemin1} libelle={carData.libelle} prix={carData.prix} />
        <div className={currentId.length===0?"hidden":"bg-transparent min-screen:ml-2 w-full h-screen min-screen:mt-14 mt-0 shadow-2xl overflow-y-auto fixed z-40"}>
            {/* up div */}
            <div className="min-screen:w-[86%] w-full mx-auto h-fit bg-gray-200 flex min-screen:flex-row flex-col justify-between bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50">
                {/* images div */}
                <div className="min-screen:w-[50%] w-full h-full flex flex-col justify-center">
                    <img src={img[indexImg]} alt={carData.libelle} />
                    <FaCircleArrowLeft color="white" size={25} onClick={()=>handleImageLeft(indexImg)} className="z-20 absolute opacity-40 hover:opacity-100 cursor-pointer " />
                    <FaCircleArrowRight size={25} color="white" onClick={()=>handleImageRight(indexImg)} className="absolute opacity-40 hover:opacity-100 cursor-pointer min-screen:right-[50%] right-0 " />
                    <IoCloseOutline size={30} onClick={()=>changeCurrentId("")} className="cursor-pointer z-20 min-screen:hidden absolute xmin-screen:top-1 top-0 xmin-screen:right-3 right-0" color="black" />
                </div>
                {/* data div */}
                <div className="min-screen:w-[50%] h-full py-8 min-screen:px-8 px-4 flex flex-row justify-between">
                    <div className="w-[90%] h-full">
                        <p  className="font-light border-b mt-4 border-b-black w-fit">{carData.categorie}</p>
                        <h1 className="text-3xl mt-3">{carData.libelle}</h1>
                        {/* features */}
                        <div className="flex flex-col justify-between text-gray-500 w-[100%] mt-2">
                            <div className="flex justify-between min-screen:w-[60%] w-[100%]">
                                <div className="flex justify-between items-center">
                                    <IoPerson />
                                    <span>{carData.nbr_passagers}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <BsFillSuitcase2Fill />
                                    <span>{carData.nbr_valises}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <GiGasPump />
                                    <span>Essence</span>
                                </div>
                            </div>
                            <div className="flex justify-between w-[60%]">
                                <div className="flex justify-between items-center">
                                    <IoSettingsSharp />
                                    <span>{carData.transmission}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <SiPicardsurgeles />
                                    <span>A/C</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-fit flex items-center mt-3">
                            <h2 className="font-bold text-[22px] text-green-700">{carData.prix} DH</h2>
                            <h3 className="ml-1 text-xs font-medium line-through text-red-700">900 DH</h3>
                            <h3 className="text-green-600 font-medium ml-2">-10%</h3>
                        </div>
                        <p className="text-sm mb-5">{carData.description}</p>
                        <button onClick={()=>{setReserver(true)}} className="text-white min-screen:my-0 mb-5  bg-black  w-[70%] flex flex-row items-center pl-[24%] hover:pl-[27%]  border h-[40px] font-semibold  hover:bg-blue-500 ease-in-out duration-[450ms]">
                            <span className="font-thin">Reserver</span><PiArrowRightThin color="white" className="mt-1 ml-3" />
                        </button>
                        <p className="cursor-pointer" onClick={()=>{setShowComments(!showComments)}} > {!showComments?"Afficher les commentaires":"Cacher les commentaires"} </p>
                    </div>
                    <div className="w-[10%] flex flex-col justify-start items-end">
                        <IoCloseOutline size={30} onClick={()=>changeCurrentId("")} className="cursor-pointer min-screen:block hidden" />
                        <CiHeart size={30} className="cursor-pointer mt-3 hover:text-red-500 ease-in-out duration-200" />
                    </div>
                </div>
            </div>
            {/* comments div */}
            {showComments && (
                <div  className="min-screen:w-[86%] mx-auto bg-white px-4 pb-4 md:mb-24 pt-6 ease-in-out duration-500 " >
                    <h1 className="border-t border-gray-300 text-4xl">Commentaires:</h1>
                    {carData.comments.map((comment, index) => (
                        <Comment key={index} text={comment.comment} fName={comment.fname} lName={comment.lname} />
                    ))}
                </div>
            )}

        </div>
        </>
    );
}

export default CarDetails;
