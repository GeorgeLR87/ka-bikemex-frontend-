// ./client/src/components/Layout/Header.js

import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/User/UserContext";

export default function Header() {
  const ctx = useContext(UserContext);

  const { 
    currentUser, 
    verifyingToken, 
    logoutUser, 
    authStatus } = ctx;

  

  useEffect(() => {
    verifyingToken();
  }, []);

  return (
    <header className="bg-gradient-to-r from-lime-500 to-indigo-900">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link to="/">
              <img
                className="h-12 w-auto"
                src="https://i.ibb.co/z4fsjy9/BIKE-1.png"
                alt=""
              />
            </Link>
            <div className="ml-10 space-x-8 lg:block">
              <Link
                to="/bikesmtb"
                className="text-base font-medium text-indigo-50 hover:text-black"
              >
                Bikes MTB
              </Link>
              <Link
                to="/bikesruta"
                className="text-base font-medium text-indigo-50 hover:text-black"
              >
                Bikes Ruta
              </Link>
              <Link
                to="/aboutus"
                className="text-base font-medium text-indigo-50 hover:text-black"
              >
                Sobre nosotros
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            
            {
            authStatus ? 
              <>
                <Link
                  to="bikesruta/crear"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-indigo-800 to-lime-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-indigo-50 hover:text-black hover:from-lime-700 hover:to-indigo-700"
                >
                  Crear BikeRuta
                </Link>

                <Link
                  to="bikesmtb/crear"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-indigo-800 to-lime-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-indigo-50 hover:text-black hover:from-lime-700 hover:to-indigo-700"
                >
                  Crear BikeMtb
                </Link>

               {/*  <Link
                  to="/profile"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-indigo-800 to-lime-500 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black hover:from-lime-700 hover:to-indigo-700"
                >
                  Tu perfil
                </Link> */}

                <a
                  onClick={() => logoutUser()}
                  href="/"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-indigo-800 to-lime-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black hover:text-indigo-50 hover:from-lime-700 hover:to-indigo-700"
                >
                  Cerrar sesión
                </a>
              </>
             : 
              <>
                <Link
                  to="/users/create"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-indigo-800 to-lime-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-indigo-50 hover:text-black hover:from-lime-700 hover:to-indigo-700"
                  
                >
                  Crear cuenta
                </Link>
                <Link
                  to="/users/login"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-indigo-800 to-lime-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-indigo-50 hover:text-black hover:from-lime-700 hover:to-indigo-700"
                >
                  Iniciar sesión
                </Link>
              </>
            }
          </div>
        </div>
      </nav>
    </header>
  );
}
