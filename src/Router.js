//./ client/src/Router.js

//1.Importaciones
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import Layout from "./components/Layout";

import BikesMtb from "./components/BikesMtb";
import SingleMtb from "./components/BikesMtb/Single";
import BikeMtbState from "./context/BikeMtb/BikeMtbState";
import CreateMtb from "./components/BikesMtb/CreateMtb";
import EditarMtb from "./components/BikesMtb/Single/EditMtb"

import BikesRuta from "./components/BikesRuta";
import SingleRuta from "./components/BikesRuta/Single";
import BikeRutaState from "./context/BikeRuta/BikeRutaState";
import Createruta from "./components/BikesRuta/CreateRuta";
import EditarRuta from "./components/BikesRuta/Single/EditRuta"

import UserState from "./context/User/UserState";
import Profile from "./components/User/Profile";
import Auth from "./routes/Auth"
import Private from "./routes/Private"
import AboutUs from "./components/User/AboutUs";

//import Public from "./routes/Public"

//2. Función

const Router = () => {
  return (
    <>
    <UserState>
    <BikeRutaState>
        <BikeMtbState>
          <BrowserRouter>
            <Routes>

              <Route path="/" element={<Layout />}>
                
                {/* localhost:3000/  */}
                <Route index element={<Home />} />
                {/* localhost:3000/registro  */}
                <Route
                 path="users/create" 
                 element={<Auth component={Register} />} />
                {/* localhost:3000/iniciar-sesion  */}
                <Route 
                path="users/login" 
                element={<Auth component={Login} />} />

                {/* localhost:3000/bikesmtb  */}
                <Route path="bikesmtb" element={<BikesMtb />} />
                {/* localhost:3000/bikesmtb/crear */}
							  <Route path="bikesmtb/crear" element={<CreateMtb />} />
                {/* localhost:3000/bikesmtb/:id  */}
                <Route path="bikesmtb/:id" element={<SingleMtb />} />
                {/* localhost:3000/bikesmtb/:id/editar  */}
                <Route path="bikesmtb/edit/:id" element={<EditarMtb />} />

                {/* localhost:3000/bikesruta  */}
                <Route path="bikesruta" element={<BikesRuta />} />
                {/* localhost:3000/bikeruta/crear */}
							  <Route path="bikesruta/crear" element={<Createruta />} />                
                {/* localhost:3000/bikesruta/:id  */}
                <Route path="bikesruta/:id" element={<SingleRuta />} />
                {/* localhost:3000/bikesruta/:id/editar  */}
                <Route path="bikesruta/edit/:id" element={<EditarRuta />} />

                {/* localhost:3000/profile */}
							 <Route path="profile" element={<Private component={Profile} />} />
               {/* localhost:3000/profile */}
							 <Route path="aboutus" element={<Private component={AboutUs} />} />

              </Route>
            </Routes>
          </BrowserRouter>
        </BikeMtbState>
      </BikeRutaState>
    </UserState>      
    </>
  );
};

//3. Exportación
export default Router;
