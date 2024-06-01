import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
// import Home12 from "../Pages/Home12";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Tickets from "../Pages/Tickets";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      {/* <Route path="/Home12" element={<Home12 />} /> */}
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Tickets" element={<Tickets />} />
    </Routes>
  );
};

export default AllRoutes;
