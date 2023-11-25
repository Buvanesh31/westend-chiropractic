

const testimonials = [
  {
    content:
      "Really enjoyed being treated here. My time spent here was very nice and comfortable. I would gladly recommend this place to anyone.",
    title: "Very nice and comfortable",
    name: "Johnny E.",
  },
  {
    content:
      "A great experience, my pain level went from 10 to a zero. I will be back in the future if any back problems ever happen again.",
    title: "My pain level went from 10 to a zero",
    name: "D. Anderson",
  },
  {
    content:
      "I was kinda skeptical at first, but after coming more frequently, I felt myself feeling more energized, and the pain was decreasing. I really appreciate the guys here. I truly can say they stand on their word to get you better. Dr. Gerdine and Dr. Will are AWESOME!",
    title: "They stand on their word",
    name: "S. Jefferies",
  },
  {
    content:
      "I loved my services and my treatment with my chiropractor. I will always refer clients.",
    title: "Loved my services and my treatment",
    name: "Nina R.",
  },
  {
    content:
      "I enjoy going to West End Chiropractic. Dr. Gerdine and his staff are professionals and sincerely care for their patients. I not only receive treatment at my visits, they take the time to educate me about my treatments. I recommend West End Chiropractic & Rehab Center to everyone to experience for themselves.",
    title: "Professionals who sincerely care",
    name: "Stacy G.",
  },
  {
    content:
      "Dr. Gerdine and his staff have been nothing but positively productive and professional. Thanks for all you have done.",
    title: "Positively productive and professional",
    name: "Jacqueline T.",
  },
  {
    content:
      "I was referred to Dr. Gerdine and West End Chiropractic after a car accident. From the time I called to schedule initial appointments for my daughter and myself I felt genuine care and concern; I knew I found my regular chiropractor. Every visit has been prompt, friendly, professional and effective.",
    title: "Genuine care and concern",
    name: "Tiffany B.",
  },
  {
    content:
      "My treatment was very effective. I'm a Lupus patient, and my health is better than ever. They helped me with my pain in my back and hips. The overall treatment helped a great deal with my lupus. Thank you so very much for bettering my health.",
    title: "My health is better than ever",
    name: "C. Richardson",
  },
];

export const Testimonial = () => {
  return (
    <>
      <section className="text-gray-500 font-serif">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="text-3xl font-bold title-font text-gray-400 mb-12 text-center text-dark">Testimonials from our clients.</h1>
    <div className="flex flex-wrap -m-4">
    {
      testimonials.map((e,i)=>{
        return(
          <TestimonialCard  key={i} title={e.title} content={e.content} name={e.name} />
        );
      })
    }
     
    </div>
  </div>
</section>
    </>
  );
};



function TestimonialCard(props) {
  return (
    <>
       <div className="p-4 md:w-1/2 w-full">
        <div className="h-full shadow-xl p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">{props.content}</p>
          <a className="inline-flex items-center">
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-400">{props.title}</span>
              <span className="text-gray-300 text-sm">{props.name}</span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

