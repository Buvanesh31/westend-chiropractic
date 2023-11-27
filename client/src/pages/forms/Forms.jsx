import { useState } from "react";

export const Forms = () => {
  const handleEmail = () => {
    window.location =
      "mailto:westendchiropracticstl@gmail.com?Subject=Book Appointment&Body=";
  };

  return (
    <>
     
      <section className="text-gray-600 font-serif relative">
        <div className="container px-4 mx-auto flex sm:flex-nowrap flex-wrap">
          
          <div className="lg:w-1/3 md:w-1/2 bg-grey flex flex-col md:ml-auto w-full md:py-8 mt-7 md:mt-0">
            <h1 className="text-gray-300 text-lg mb-1 font-medium title-font">
Forms
            </h1>
            <p className="leading-relaxed mb-5 text-gray-400">
              
            </p>
        
            <a
  href="images/services/patient-information.pdf"  // Replace "your-file.pdf" with the actual name of your PDF file
  target="_blank"  // Opens the link in a new tab
  className="leading-relaxed mb-2 text-gray-400 text-blue-500 underline cursor-pointer"
>
  Patient Information and Health History
</a>
              <a
  href="images/services/patient-authorizations.pdf"  // Replace "your-file.pdf" with the actual name of your PDF file
  target="_blank"  // Opens the link in a new tab
  className="leading-relaxed mb-2 text-gray-400 text-blue-500 underline cursor-pointer"
>
 Patient Authorizations and Payment Agreements
</a>
               <a
  href="images/services/memorandum.pdf"  // Replace "your-file.pdf" with the actual name of your PDF file
  target="_blank"  // Opens the link in a new tab
  className="leading-relaxed mb-2 text-gray-400 text-blue-500 underline cursor-pointer"
>
 Memorandum of Understanding
</a>
                <a
  href="images/services/informed-consent.pdf"  // Replace "your-file.pdf" with the actual name of your PDF file
  target="_blank"  // Opens the link in a new tab
  className="leading-relaxed mb-2 text-gray-400 text-blue-500 underline cursor-pointer"
>
Informed Consent to Chiropractic Care
</a>
               <a
  href="images/services/release-of-medical-records.pdf"  // Replace "your-file.pdf" with the actual name of your PDF file
  target="_blank"  // Opens the link in a new tab
  className="leading-relaxed mb-2 text-gray-400 text-blue-500 underline cursor-pointer"
>
Authorization for Release of Medical Records
</a>
               <a
  href="images/services/patient-information.pdf"  // Replace "your-file.pdf" with the actual name of your PDF file
  target="_blank"  // Opens the link in a new tab
  className="leading-relaxed mb-2 text-gray-400 text-blue-500 underline cursor-pointer"
>
  Patient Information and Health History
</a>
                <a
  href="images/services/motor-vehicle-accidents.pdf"  // Replace "your-file.pdf" with the actual name of your PDF file
  target="_blank"  // Opens the link in a new tab
  className="leading-relaxed mb-2 text-gray-400 text-blue-500 underline cursor-pointer"
>
  Motor Vehicle Accidents
</a>
            
          </div>
        </div>
      </section>
    </>
  );
};
