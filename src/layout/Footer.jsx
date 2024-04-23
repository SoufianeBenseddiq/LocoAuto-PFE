import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import logo from "./LocoAuto.png";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
  ];

  return (
    <>
      <footer className="bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container py-[10rem]  max-w-[1100px] mx-auto ">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row items-center md:items-start md:gap-[5rem] text-left">
            {/* logo side */}
            <div
              data-aos="fade-up"
              className="flex flex-col w-1/2 md:p-0 py-4 gap-8"
            >
              <img
                src={logo}
                alt="footer_logo"
                className="w-[18rem]"
                data-aos="zoom-in"
              />
              <p className="text-[15px] font-medium">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => (
                  <div
                    key={index}
                    className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] text-black hover:text-white cursor-pointer"
                    style={{ transition: "all 0.3s" }}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {icon}
                  </div>
                ))}
              </div>
              <p className="text-[16px] font-medium">
                Privacy Policy | © {new Date().getFullYear()} LocoAuto <br />
                <br />
                <br />
              </p>
            </div>

            {/* middle div */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col gap-8 relative"
            >
              <p className="text-[22px] font-bold footer-main">Our Classes</p>
              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer font-medium">
                Fitness Classes
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer font-medium">
                Aerobics Classes
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer font-medium">
                Power Yoga
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer font-medium">
                Learn Machines
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer font-medium">
                Full-body Strength
              </p>
            </div>

            {/* right div */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col gap-8 relative"
            >
              <p className="text-[22px] font-bold footer-main">
                Working Hours
              </p>
              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
              <p className="text-[16px] font-bold">Monday - Friday:</p>
              <p className="text-[16px] font-medium">7:00am - 21:00pm</p>
              <p className="text-[16px] font-bold">Saturday:</p>
              <p className="text-[16px] font-medium">7:00am - 19:00pm</p>
              <p className="text-[16px] font-bold">Sunday - Closed</p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
