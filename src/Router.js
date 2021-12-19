//./ client/src/Router.js

//1.Importaciones
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import Layout from "./components/Layout";

import BikesMtb from "./components/BikesMtb";
import BikesRuta from "./components/BikesRuta";
import BikeMtbState from "./context/BikeMtb/BikeMtbState";
import BikeRutaState from "./context/BikeRuta/BikeRutaState";
//2. Función

const Router = () => {
  return (
    <>
      <BikeRutaState>
        <BikeMtbState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* localhost:3000/  */}
                <Route index element={<Home />} />
                {/* localhost:3000/registro  */}
                <Route path="registro" element={<Register />} />
                {/* localhost:3000/iniciar-sesion  */}
                <Route path="iniciar-sesion" element={<Login />} />
                {/* localhost:3000/bikesmtb  */}
                <Route path="bikesmtb" element={<BikesMtb />} />
                {/* localhost:3000/bikesruta  */}
                <Route path="bikesruta" element={<BikesRuta />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </BikeMtbState>
      </BikeRutaState>
    </>
  );
};

//3. Exportación
export default Router;
