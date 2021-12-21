//./src/components/Guitars/Single/Edit.js

import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BikeRutaContext from '../../../context/BikeRuta/BikeRutaContext'



export default function Edit() {

	// 1. ESTADO GLOBAL
	const params = useParams()
	const idBikeRuta = params.id

	const ctx = useContext(BikeRutaContext)

	const {
		singleBikeRuta,
		getBikeRuta,
		updateBikeRuta
	} = ctx

	

	// 2. ESTADO LOCAL
	const [bikeRutaData, setBikeRutaData] = useState({
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
            imagen: ""
	})

	// 3. FUNCIONES

	// USEEFFECT PARA ACTUALIZAR DATOS EN EL ESTADO GLOBAL
	useEffect(() => {

		getBikeRuta(idBikeRuta)

	}, [])

	// USEEFFECT PARA ACTUALIZAR LOS DATOS DEL ESTADO GLOBAL AL ESTADO LOCAL
	useEffect(() => {

		const {
			marca,
            modelo,
            year,
            talla,
            rodada,
            color,
            tipofreno,
            transmision,
            material,
            modalidad,
            descripcion,
            precio,
            imagen
		} = ctx.singleBikeRuta

		setBikeRutaData({
			marca: marca,
            modelo: modelo,
            year: year,
            talla: talla,
            rodada: rodada,
            color: color,
            tipofreno: tipofreno,
            transmision: transmision,
            material: material,
            modalidad: modalidad,
            descripcion: descripcion,
            precio: precio,
            imagen: imagen
		})
	}, [singleBikeRuta])

	const handleChange = (e) => {
		e.preventDefault()

		setBikeRutaData({
			...bikeRutaData,
			[e.target.name]: e.target.value
		})

	}

	const handleSubmit = (e) => {
		
		e.preventDefault()

		updateBikeRuta( bikeRutaData, idBikeRuta)

	}

	return (
		<>
		<form onSubmit={ (event) => { handleSubmit(event)}}>
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                BikeMtb Informacion
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
				value={bikeRutaData.marca}
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
				value={bikeRutaData.modelo}
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
				value={bikeRutaData.year}
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
				value={bikeRutaData.rodada}
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
				value={bikeRutaData.color}
                onChange={ (event) => { handleChange(event) } }
                  type="text"
                  name="color"                  
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  for="region"
                  class="block text-sm font-medium text-gray-700">
                  Recorrido Delantero
                </label>
                <input
				value={bikeRutaData.tipofreno}
                onChange={ (event) => { handleChange(event) } }
                  type="text"
                  name="tipofreno"                  
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  for="postal-code"
                  class="block text-sm font-medium text-gray-700">
                  Tipo de Freno
                </label>
                <input
				value={bikeRutaData.transmision}
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
                  <option value={'Ciclocross'}>ciclocross</option>                                   
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
				value={bikeRutaData.descripcion}
                onChange={ (event) => { handleChange(event) } }
                  type="text"
                  name="descripcion"                  
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div class="col-span-6">
                <label
                  for="street-address"
                  class="block text-sm font-medium text-gray-700">
                  Imagen
                </label>
                <input
				value={bikeRutaData.imagen}
                onChange={ (event) => { handleChange(event) } }
                  type="text"
                  name="imagen"                  
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  for="postal-code"
                  class="block text-sm font-medium text-gray-700">
                  Precio
                </label>
                <input
				value={bikeRutaData.precio}
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
              class="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-indigo-800 to-lime-500 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black hover:from-lime-700 hover:to-indigo-700"
            >
              Guardar BikeRuta
            </button>
          </div>
        </div>
      </form>	
		</>
	)
}
