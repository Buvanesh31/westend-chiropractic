import { useNavigate } from "react-router-dom";
import logo from "/westend.png"
const navItems = [
  {
    name: "Home",
    to: "/"
  },

  {
    name: "About",
    to: "/about",
  },
  {
    name: "Services",
    to: "/services",
  },
  {
    name: "Testimonials",
    to: "/testimonials",
  },
  {
    name: "Contact",
    to: "/contact",
  },
  {
    name: "Patient Forms",
    to: "/forms",
  },
];

export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="text-gray-300 font-serif">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            {navItems.map((e, i) => {
              return (
                <>
                  <NavbarButton key={i} name={e.name} to={e.to} />
                </>
              );
            })}
          </nav>
          <a
  className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0 p-2 border border-blue-500 rounded-md bg-white"
  style={{ zIndex: 1 }}
>
  <img
    src={logo}
    className="w-12 h-12 p-2 rounded-full filter brightness-9 invert-0"
    alt="Your Logo"
  />
  <span className="ml-3 text-lg font-serif">
    West End Chiropractic
  </span>
</a>

          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button onClick={()=>{
              navigate("/contact")
            }} className="inline-flex items-center bg-gray-100 text-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded font-medium mt-4 md:mt-0">
             Contact Now
              </button>
          </div>
        </div>
      </header>
    </>
  );
};

function NavbarButton(props) {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate(props.to);
        }}
        className="mr-7 cursor-pointer font-medium  hover:text-gray-900 "
      >
        {props.name}
      </button>
    </>
  );
}
