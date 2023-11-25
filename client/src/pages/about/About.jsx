import React from "react";

const Doctors = [
  {
    name: "Dr. Michael L. Gerdine",
    designation: "Chiropractor",
    content:
      "Dr. Michael L. Gerdine, a native St. Louisan, has been a licensed chiropractor since 1999. He earned a Bachelor of Science in Human Biology in 1997 and a Doctor of Chiropractic from Logan College of Chiropractic in 1999. In June of 2000, Dr. Gerdine established West End Chiropractic & Rehabilitation Center, specializing in chiropractic, acupuncture, sports rehabilitation, wellness and personal injury. In 2016, he studied in Beijing, China, under the world-renowned Dr. Zhu.",
      imageSrc: "/images/doctors/gerdine-headshot.jpg"
  },
  {
    name: "Sandra Rupert-Long",
    designation: "Yoga and Tai Chi instructor",
    content:
      "Fitness is a way of life for Sandra, and although it is not her only professional pursuit, her certifications in yoga and Tai Chi instruction are central to her vow to help others live their best lives. She is a member of the Yoga Alliance, having completed her yoga teacher training in February of 2019. She trained at the West East Yoga school directed by Jaime Sanchez, where she studied anatomy and physiology, yoga techniques, and philosophy. Sandra has been an exercise enthusiast for many years, having taught aerobics and other fitness activities for more than a decade for Bally’s Vic Tanny health clubs. Now, she is focused on teaching the benefits of yoga for everyday life, particularly during the senior years.",
      imageSrc: "images/doctors/rupert-long-headshot.jpg"
  },
];

export const About = () => {
  return (
    <> 
      <div className= "font-serif flex flex-col pt-24  text-center w-full mb-12">
        <h1 className="mb-4 text-3xl text-gray-300 font-bold text-dark sm:text-4xl md:text-[40px]">
          About Us
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-400 ">
          We specialize in personalized chiropractic care, offering treatments
          for back and neck pain, sports injuries, and overall wellness. Our
          expert team employs advanced techniques to restore your body's natural
          balance, ensuring a holistic path to better health and vitality.
          Schedule your appointment today to experience our tailored approach to
          wellness.
        </p>
      </div>
      {Doctors.map((e, index) => {
        return (
          <AboutCard
            key={index}
            name={e.name}
            designation={e.designation}
            content={e.content}
            imageSrc={e.imageSrc}
          />
        );
      })}
    </> 
  );
};

function AboutCard(props) {
  return (
    <>
      <section className="text-gray-400 font-serif">
        <div className="container px-5 pb-10 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                
                  <img
                    alt="testimonial"
                    className="items-center justify-center  text-gray-400 w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2"
                    src={props.imageSrc}
                  />
               
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-400 text-lg">
                    {props.name}
                  </h2>
                  <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">{props.designation}</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">{props.content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
