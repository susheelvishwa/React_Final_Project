import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Tickets from "../Pages/Tickets";
import  PrivateRoute from "./PrivateRoute";
import  TicketCreate from "../Pages/TicketCreate";
import  TicketEdit from "../Pages/TicketEdit";
import TicketView from "../Pages/TicketView";


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
      <Route
        path="/ticket/create"
        element={
          <PrivateRoute>
            <TicketCreate />
          </PrivateRoute>
        }
      />
      <Route
        path="/ticket/view/:id"
        element={
          <PrivateRoute>
            <TicketView />
          </PrivateRoute>
        }
      />
      <Route
        path="/ticket/edit/:id"
        element={
          <PrivateRoute>
            <TicketEdit />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
