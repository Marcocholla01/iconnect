import { useState } from "react";
import { ToastContainer, Slide } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/App/Homepage";
import Aboutpage from "./Pages/App/Aboutpage";
import Servicespage from "./Pages/App/Servicespage";
import Packagespage from "./Pages/App/Packagespage";
import FAQpage from "./Pages/App/FAQpage";
import Contactpage from "./Pages/App/Contactpage";
import Loader from "./components/App/Loader/Loader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Loader />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/services" element={<Servicespage />} />
          <Route path="/packages" element={<Packagespage />} />
          <Route path="/faq" element={<FAQpage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </>
  );
}

export default App;
