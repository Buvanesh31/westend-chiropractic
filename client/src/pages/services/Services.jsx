import { useNavigate } from "react-router-dom";

const service = [
  {
    title: "Non-surgical Spinal Decompression Therapy",
    description:
      "West End Chiropractic is proud to announce that our clinic is now equipped with the newest option in back pain and knee arthritis relief.",
    image: "1.png",
  },
  {
    title: "Physical Therapy & Rehabilitation",
    description:
      "We provide therapy to develop, maintain and restore maximum movement and functional ability throughout your life.",
    image: "2.jpg",
  },
  {
    title: "Sports Rehabilitation",
    description:
      "All athletes deserve the very best sports-related care and treatment that is focused, one-on-one and state-of-the art.",
    image: "3.jpg",
  },
  {
    title: "Pre-Employment and Sports Physicals",
    description:
      "At West End Chiropractic we perform pre-employment physical exams.",
    image: "4.jpg",
  },
  {
    title: "Weight Loss",
    description:
      "At West End Chiropractic we can help you meet your weight loss goals. Contact us to participate in a personalized diet and exercise program.",
    image: "5.jpg",
  },
  {
    title: "Acupuncture",
    description:
      "Acupuncture involves the insertion of extremely thin needles through your skin, to various depths at strategic points on your body.",
    image: "6.jpg",
  },
  {
    title: "Treating Spinal Conditions",
    description:
      "Bulging and Herniated Disc, Degenerative Joint Disease Compression Fracture, Facet Syndrome, Spondylolisthesis, Scoliosis,  Sciatica",
    image: "7.jpg",
  },
  {
    title: "Treating Knee Conditions",
    description:
      "ACL injury, Fractures, Meniscus Tear, Knee Bursitis, Patellar Tendinitis, Osteoarthritis, Osteochondritis Dessicans",
    image: "8.jpg",
  },
  {
    title: "Chiropractic Adjsutment",
    description:
      "Chiropractic neck adjustments involve targeted, manual manipulation of the cervical spine to enhance mobility and alleviate neck pain. This non-invasive technique aims to improve joint function, reduce inflammation, and provide relief from discomfort.",
    image: "20.jpeg",
  },
];

const service2 = [
 
  {
    title: "Non-surgical Spinal Decompression Therapy",
    description:
      "West End Chiropractic is proud to announce that our clinic is now equipped with the newest option in back pain and knee arthritis relief.",
    image: "9.jpeg",
  },
];

export const Services = () => {

  return (
    <>
      <section className=" font-serif ">
        <div className="container px-5 py-20 pb-20">
          <div className="flex flex-wrap -m-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="block mb-2 text-gray-300 text-lg font-semibold text-primary">
                  Our Services
                </span>
                <h2 className="mb-4 text-3xl text-gray-400 font-bold text-dark sm:text-4xl md:text-[40px]">
                  What We Offer
                </h2>
                <p className="text-base text-body-color text-gray-400">
                  Explore our range of specialized chiropractic services at West
                  End Chiropractic, including personalized treatments for back
                  and neck pain, sports injuries, and holistic wellness
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-gray-600 font-serif container px-5 pb-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {service2.map((e, index) => {
            return <ServiceImage key={index} image={e.image} />;
          })}
        </div>
      </div>
      <div className="text-gray-600 font-serif container px-5 pb-24 mx-auto">
        <div className="flex flex-wrap -m-4">
         {service.map((e,index)=>{
          return(
            <ServiceCard key={index} image={e.image} title={e.title} description={e.description} />
          );
         })}
        </div>
      </div>
     
    </>
  );
};

const ServiceImage = (props) => {
  return (
    <div className="p-4 md:w-full flex items-center justify-center">
      <img
  className="lg:h-64 md:h-52 w-full md:w-2/3 lg:w-1/3 object-cover object-center border border-gray-300 rounded-md"
  src={"/images/services/" + props.image}
  alt="blog"
/>
    </div>
  );
};

const ServiceCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="p-4 md:w-1/3">
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <img
        className="lg:h-48 md:h-36 w-full object-cover object-center"
        src={"/images/services/" + props.image}
        alt="blog"
      />
      <div className="p-6">
        <h1 className="title-font text-lg font-medium text-gray-300 mb-3">
          {props.title}
        </h1>
        <p className="leading-relaxed mb-3 text-gray-200">
          {props.description}
        </p>

          <a onClick={()=>{
                  navigate("/contact")
          }} className="text-indigo-500 hover:text-indigo-300  inline-flex cursor-pointer items-center md:mb-2 lg:mb-0">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
      
      </div>
    </div>
  </div>
  );
};


