import React from "react";
// import AOS from "aos";
import "aos/dist/aos.css";

const FAQ = () => {
  return (
    <section data-aos="fade-up" data-aos-delay="100" className="py-10 bg-black sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 data-aos="fade-right" data-aos-delay="200" className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Questions & Réponses
          </h2>
          <p data-aos="fade-right" data-aos-delay="300" className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">
            Explorez les questions et réponses courantes sur la location de voitures
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
          <div data-aos="zoom-in" data-aos-delay="400" className="flex items-start">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
              <span className="text-lg font-semibold text-white">?</span>
            </div>
            <div className="ml-4">
              <p className="text-xl font-semibold text-white">Comment louer une voiture?</p>
              <p className="mt-4 text-base text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat magna.
              </p>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-delay="500" className="flex items-start">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
              <span className="text-lg font-semibold text-white">?</span>
            </div>
            <div className="ml-4">
              <p className="text-xl font-semibold text-white">Quels sont les documents nécessaires?</p>
              <p className="mt-4 text-base text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat magna.
              </p>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-delay="600" className="flex items-start">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
              <span className="text-lg font-semibold text-white">?</span>
            </div>
            <div className="ml-4">
              <p className="text-xl font-semibold text-white">Quelles sont les options de paiement?</p>
              <p className="mt-4 text-base text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat magna.
              </p>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-delay="700" className="flex items-start">
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
              <span className="text-lg font-semibold text-white">?</span>
            </div>
            <div className="ml-4">
              <p className="text-xl font-semibold text-white">Quelle est la politique de carburant?</p>
              <p className="mt-4 text-base text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat magna.
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="800" className="flex items-center justify-center mt-12 md:mt-20">
          <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
            <p className="text-gray-50">
              Vous n'avez pas trouvé la réponse que vous cherchez ?{" "}
              <span
                className="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline cursor-pointer"
              >
                Contactez notre support
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
