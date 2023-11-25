import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="text-gray-600 font-serif">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <div className=" aspect-w-4 aspect-h-3">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={"/images/main/mainimage.jpg"}
              />
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-300">
              Discover relief and vitality through
              <br className="hidden lg:inline-block"></br> tailored chiropractic
              treatments
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400">
              Discover a personalized approach to wellness at West End
              Chiropractic. Our expert team is dedicated to your health,
              providing tailored chiropractic care to address various
              conditions, from back and neck pain to sports injuries. Using
              advanced techniques, we aim to restore your body's natural
              balance. Experience a holistic path to better health and vitality.
              Book your appointment today and start your journey to a healthier
              you.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  navigate("/contact");
                }}
                className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  navigate("/services");
                }}
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                Services
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 font-serif">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <div className=" aspect-w-4 aspect-h-3">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src={"/images/main/sanuwave.jpg"}
      />
    </div>
  </div>
  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-300">
              Sanuwave
              
            </h1>
    <p className="mb-8 leading-relaxed text-gray-400">
      Discover advanced healing at West End Chiropractic, where we proudly offer cutting-edge Sanuwave treatment. Experience the future of chiropractic care as we harness the power of innovative technology to accelerate your healing journey and bring relief to your body. Sanuwave treatment utilizes advanced acoustic wave therapy, a non-invasive and FDA-approved method that stimulates your body's natural healing processes. These gentle waves promote increased blood flow, tissue regeneration, and reduced inflammation, addressing the root cause of discomfort. Our commitment to your well-being drives us to provide the latest and most effective therapies for a healthier, pain-free you. Trust in the science of Sanuwave and the expertise of our dedicated team to guide you towards optimal health and vitality.
    </p>
  </div>
</div>
</section>
      <section className="text-gray-600 font-serif">
        <div className="container px-5 pb-20 mx-auto flex flex-wrap">
          <div className="lg:w-2/3 mx-auto">
            <div className=" flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block opacity-90 absolute inset-0 rounded"
                src={"/images/main/last.jpg"}
              />
              <div className="text-center relative z-10 w-full">
                <h2 className="text-3xl text-white font-light mb-2">
                  Where wellness begins
                </h2>
                <p className="text-white leading-relaxed ">
                  Using advanced techniques, we aim to restore your body's
                  natural balance.
                </p>
                <a
                 onClick={()=>{
                  window.location = "/services"
                 }}
                  className="cursor-pointer mt-3 text-blue-500 inline-flex items-center font-bold"
                >
                  Our Services
                  <svg
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block  opacity-90 absolute inset-0 rounded"
                    src={"/images/main/first.jpg"}
                  />
                  <div className="text-center relative z-10 w-full">
                    <h2 className=" text-3xl text-white font-light mb-2">
                    Health Journeys
                    </h2>
                    <p className="text-white leading-relaxed">
                      Call Today, we would love to chat about our services.
                    </p>
                    <a
                      onClick={() => {
                        window.location = "/testimonials";
                      }}
                      className="mt-3 cursor-pointer text-blue-500 font-bold inline-flex items-center"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img
                    alt="gallery"
                    className=" w-full object-cover h-full object-center block absolute inset-0  rounded opacity-90"
                    src={"/images/main/main.jpg"}
                  />
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-3xl text-white font-light mb-2">
                    Connect Today!
                    </h2>
                    <p className="text-white leading-relaxed">
                    Your path to well-being begins with a simple contact.
                    </p>
                    <a className="ml-10 cursor-pointer mt-3 font-bold text-blue-500 inline-flex items-center">
                    Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
