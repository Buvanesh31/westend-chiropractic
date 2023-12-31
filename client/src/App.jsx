import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/home/HomePage";
import { About } from "./pages/about/About";
import { Testimonial } from "./pages/testimonials/Testimonial";
import { Services } from "./pages/services/Services";
import { NotFound } from "./pages/404/NotFound";
import { Contact } from "./pages/contact/Contact";
import { Forms } from "./pages/forms/Forms";

function App() {
  const appStyle = {
    backgroundColor: 'rgb(23, 22, 21 )',
    // Add more styles as needed
  };

  return (
    <>
      <Router>
      <div style={appStyle}>
        <Header />
        
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
        <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
