import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { BsFillSuitcase2Fill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { SiPicardsurgeles } from "react-icons/si";
import { GiGasPump } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { PiArrowRightThin } from "react-icons/pi";

const CarDetails = () => {
    const [showComments, setShowComments] = useState(false);

    // useEffect to show comments after component mounts
    

    return (
        <div className="bg-transparent min-screen:ml-2 w-full h-screen min-screen:mt-14 shadow-2xl overflow-y-auto fixed z-50">
            {/* up div */}
            <div className="min-screen:w-[86%] w-full mx-auto h-fit bg-gray-200 flex min-screen:flex-row flex-col justify-between bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50">
                {/* images div */}
                <div className="min-screen:w-[50%] w-full h-full flex flex-col justify-center">
                    <img src={"http://localhost/locoauto/carsimages/compacts/renaultMEGANE.jpg"} alt="" />
                    <IoCloseOutline size={30} className="cursor-pointer z-20 min-screen:hidden absolute xmin-screen:top-1 top-0 xmin-screen:right-3 right-0" color="black" />
                </div>
                {/* data div */}
                <div className="min-screen:w-[50%] h-full py-8 min-screen:px-8 px-4 flex flex-row justify-between">
                    <div className="w-[90%] h-full">
                        <p className="font-light border-b mt-4 border-b-black w-fit">Renault</p>
                        <h1 className="text-3xl mt-3">Renault Megane</h1>
                        {/* features */}
                        <div className="flex flex-col justify-between text-gray-500 w-[100%] mt-2">
                            <div className="flex justify-between min-screen:w-[60%] w-[100%]">
                                <div className="flex justify-between items-center">
                                    <IoPerson />
                                    <span>5</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <BsFillSuitcase2Fill />
                                    <span>3</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <GiGasPump />
                                    <span>Essence</span>
                                </div>
                            </div>
                            <div className="flex justify-between w-[60%]">
                                <div className="flex justify-between items-center">
                                    <IoSettingsSharp />
                                    <span>Automatique</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <SiPicardsurgeles />
                                    <span>A/C</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-fit flex items-center mt-3">
                            <h2 className="font-bold text-[22px] text-green-700">800 DH</h2>
                            <h3 className="ml-1 text-xs font-medium line-through text-red-700">900 DH</h3>
                            <h3 className="text-green-600 font-medium ml-2">-10%</h3>
                        </div>
                        <p className="text-sm mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                        </p>
                        <button className="text-white min-screen:my-0 mb-5  bg-black  w-[70%] flex flex-row items-center pl-[24%] hover:pl-[27%]  border h-[40px] font-semibold  hover:bg-blue-500 ease-in-out duration-[450ms]">
                            <span className="font-thin">Reserver</span><PiArrowRightThin color="white" className="mt-1 ml-3" />
                        </button>
                        <p className="cursor-pointer" onClick={()=>{setShowComments(!showComments)}} > {!showComments?"Afficher les commentaires":"Cacher les commentaires"} </p>
                    </div>
                    <div className="w-[10%] flex flex-col justify-start items-end">
                        <IoCloseOutline size={30} className="cursor-pointer min-screen:block hidden" />
                        <CiHeart size={30} className="cursor-pointer mt-3 hover:text-red-500 ease-in-out duration-200" />
                    </div>
                </div>
            </div>
            {/* comments div */}
            {showComments && (
                <div className="min-screen:w-[86%]  mx-auto bg-white px-4 pt-6 ease-in-out duration-500 ">
                    <h1 className="border-t border-gray-300 text-4xl">Commentaires:</h1>
                    {/* Comment sections */}
                    <div className="mt-4" >
                        <h2 className="text-blue-500 font-bol text-2xl ml-10" >Oussama Oulaydi</h2>
                        <p className="ml-14 font-light " >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                    <div className="mt-4" >
                        <h2 className="text-blue-500 font-bol text-2xl ml-10" >Oussama Oulaydi</h2>
                        <p className="ml-14 font-light " >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                    <div className="mt-4" >
                        <h2 className="text-blue-500 font-bol text-2xl ml-10" >Oussama Oulaydi</h2>
                        <p className="ml-14 font-light " >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                    <div className="mt-4" >
                        <h2 className="text-blue-500 font-bol text-2xl ml-10" >Oussama Oulaydi</h2>
                        <p className="ml-14 font-light " >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                    <div className="mt-4" >
                        <h2 className="text-blue-500 font-bol text-2xl ml-10" >Oussama Oulaydi</h2>
                        <p className="ml-14 font-light " >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                    <div className="mt-4" >
                        <h2 className="text-blue-500 font-bol text-2xl ml-10" >Oussama Oulaydi</h2>
                        <p className="ml-14 font-light " >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CarDetails;
