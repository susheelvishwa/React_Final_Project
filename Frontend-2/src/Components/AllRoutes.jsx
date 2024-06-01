import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Tickets from "../Pages/Tickets";
import { PrivateRoute } from "./PrivateRoute";



const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/About"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      />
      <Route
        path="/Contact"
        element={
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        }
      />

      <Route path="/Login" element={<Login />} />
      <Route
        path="/Tickets"
        element={
          <PrivateRoute>
            <Tickets />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
