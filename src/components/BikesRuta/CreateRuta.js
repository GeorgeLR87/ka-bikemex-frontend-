// ./client/src/components/BikesMtb/CreateMtb.js
import React, { useState, useContext } from "react";
import BikeRutacontext from "./../../context/BikeRuta/BikerutaContext"

export default function Create() {
  //1. Estado Global
  const ctx = useContext(BikeRutacontext)
  const {
    createBikeRuta
  } = ctx

  console.log(createBikeRuta)

  //2. Estado Local
  const [newBikeRuta, setNewBikeRuta] = useState({
    marca: "",
    modelo: "",
    year: "",
    talla: "",
    rodada: "",
    color: "",
    tipofreno: "",
    transmision: "",
    material: "",
    modalidad: "",
    descripcion: "",
    precio: "",
  });

  //3. Funciones
  const handleChange = (e) => {
    e.preventDefault();

    setNewBikeRuta({
      ...newBikeRuta,
      [e.target.marca]: e.target.value,
    });
  };

  return (
    <>
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                BikeRuta Informacion
              </h3>
              
            </div>

            <div class="grid grid-cols-6 gap-6">

            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  for="postal-code"
                  class="block text-sm font-medium text-gray-700">
                  Marca
                </label>
                <input
                onChange={ (event) => { handleChange(event) } }
                  type="text"
                  name="marca"                  
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  for="postal-code"
                  class="block text-sm font-medium text-gray-700">
                  Modelo
                </label>
                <input
                onChange={ (event) => { handleChange(event) } }
                  type="text"
                  name="modelo"                  
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  for="postal-code"
                  class="block text-sm font-medium text-gray-700">
                  Año
                </label>
                <input
                onChange={ (event) => { handleChange(event) } }
                  type="number"
                  name="year"                  
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-700">
                  Talla
                </label>
                <select
                onChange={ (event) => { handleChange(event) } }                  
                  name="talla"                  
                  class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option value={''}>---</option>
                  <option value={'Small'}>Small</option>
                  <option value={'Medium'}>Medium</option>
                  <option value={'Large'}>Large</option>
                  <option value={'XLarge'}>XLarge</option>                  
                </select>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  for="postal-code"
                  class="block text-sm font-medium text-gray-700">
                  Rodada
                </label>
                <input
                onChange={ (event) => { handleChange(event) } }
                  type="text"
                  name="rodada"                  
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  for="city"
                  class="block text-sm font-medium text-gray-700">
                  Color
                </label>
                <input
                onChange={ (event) => { handleChange(event) } }
                  type="text"
                  name="color"                  
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  for="region"
                  class="block text-sm font-medium text-gray-700">
                  Tipo Freno
                </label>
                <input
                onChange={ (event) => { handleChange(event) } }
                  type="text"
                  name="tipofreno"                  
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  for="postal-code"
                  class="block text-sm font-medium text-gray-700">
                  Transmision
                </label>
                <input
                onChange={ (event) => { handleChange(event) } }
                  type="text"
                  name="transmision"                  
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-700">
                  Material
                </label>
                <select
                onChange={ (event) => { handleChange(event) } }                  
                  name="material"                  
                  class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option value={''}>---</option>
                  <option value={'Aluminio'}>Aluminio</option>
                  <option value={'Carbono'}>Carbono</option>                                   
                </select>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-700">
                  Modalidad
                </label>
                <select
                onChange={ (event) => { handleChange(event) } }                  
                  name="modalidad"                  
                  class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option value={''}>---</option>
                  <option value={'Desempeno'}>Desempeño</option>
                  <option value={'Gravel'}>Gravel</option>                                   
                  <option value={'Ciclocross'}>Ciclocross</option>                                   
                  <option value={'Triatlon'}>Triatlon</option>                                   
                </select>
              </div>

              <div class="col-span-6">
                <label
                  for="street-address"
                  class="block text-sm font-medium text-gray-700">
                  Descripcion
                </label>
                <input
                onChange={ (event) => { handleChange(event) } }
                  type="text"
                  name="descripcion"                  
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  for="postal-code"
                  class="block text-sm font-medium text-gray-700">
                  Precio
                </label>
                <input
                onChange={ (event) => { handleChange(event) } }
                  type="number"
                  name="precio"                  
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>




            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Guardar BikeRuta
            </button>
          </div>
        </div>
      </form>
    </>
  );
}