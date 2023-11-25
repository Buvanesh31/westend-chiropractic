import { useState } from "react";

export const Contact = () => {
  const handleEmail = () => {
    window.location =
      "mailto:westendchiropracticstl@gmail.com?Subject=Book Appointment&Body=";
  };

  return (
    <>
      <div className="flex flex-col text-gray-300 pt-24 text-center w-full mb-12 font-serif">
        <h1 className=" title-font mb-4 text-gray-90mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
          {" "}
          Contact Us{" "}
        </h1>
        <p className="lg:w-2/3 mx-auto text-gray-400 leading-relaxed text-base">
          For personalized chiropractic care and holistic wellness solutions,
          reach out to West End Chiropractic. Book your appointment today for a
          healthier, balanced you.
        </p>
      </div>
      <section className="text-gray-600 font-serif relative">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=4255%20Laclede%20Ave%20St.%20Louis,%20MO%2063108+(West%20End%20Chiropractic)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">4255 Laclede Ave St. Louis, MO 63108</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-400 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  href="mailto:westendchiropracticstl@gmail.com?Subject=Book Appointment&Body="
                  className="text-indigo-500 leading-relaxed"
                >
                  westendchiropracticstl@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <a href="tel:+314-361-4650" className="text-indigo-500 leading-relaxed cursor-pointer">314-361-4650</a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-grey flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-300 text-lg mb-1 font-medium title-font">
              Book your appointment
            </h2>
            <p className="leading-relaxed mb-5 text-gray-400">
              Schedule your appointment today and take the first step toward a
              healthier you.
            </p>
            <h3 className="text-gray-300 text-lg mb-1 font-medium title-font">
              Clinic Schedule
            </h3>
            <p className="leading-relaxed mb-2 text-gray-400">
              Monday: 9:00am – 6:00pm
            </p>
            <p className="leading-relaxed mb-2 text-gray-400">
              Tuesday: 2:00pm – 6:00pm
            </p>
            <p className="leading-relaxed mb-2 text-gray-400">
              Wednesday: 9:00am – 6:00pm
            </p>
            <p className="leading-relaxed mb-2 text-gray-400">
              Thursday: Closed
            </p>
            <p className="leading-relaxed mb-2 text-gray-400">
              Friday: 9:00am – 6:00pm
            </p>
            <p className="leading-relaxed mb-2 text-gray-400">
              Saturday: By Appointment Only
            </p>
            <p className="mb-2 text-gray-300">Office closed on all major holidays.</p>
            <button
              onClick={handleEmail}
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
