//./src/components/Guitars/Single/Edit.js

import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BikeMtbContext from '../../../context/BikeMtb/BikeMtbContext'


export default function Edit() {

	// 1. ESTADO GLOBAL
	const params = useParams()
	const idBikeMtb = params.id

	const ctx = useContext(BikeMtbContext)

	const {
		singleBikeMtb,
		getBikeMtb,
		updateBikeMtb
	} = ctx

	

	// 2. ESTADO LOCAL
	const [bikeMtbData, setBikeMtbData] = useState({
			      marca: "",
            modelo: "",
            year: "",
            talla: "",
            rodada: "",
            color: "",
            rdelantero: "",
            rtrasero: "",
            material: "",
            modalidad: "",
            descripcion: "",
            precio: "",
            imagen: ""
	})

	// 3. FUNCIONES

	// USEEFFECT PARA ACTUALIZAR DATOS EN EL ESTADO GLOBAL
	useEffect(() => {

		getBikeMtb(idBikeMtb)

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
            rdelantero,
            rtrasero,
            material,
            modalidad,
            descripcion,
            precio,
            imagen
		} = ctx.singleBikeMtb

		setBikeMtbData({
			      marca: marca,
            modelo: modelo,
            year: year,
            talla: talla,
            rodada: rodada,
            color: color,
            rdelantero: rdelantero,
            rtrasero: rtrasero,
            material: material,
            modalidad: modalidad,
            descripcion: descripcion,
            precio: precio,
            imagen: imagen
		})
	}, [singleBikeMtb])

	const handleChange = (e) => {
		e.preventDefault()

		setBikeMtbData({
			...bikeMtbData,
			[e.target.name]: e.target.value
		})

	}

	const handleSubmit = (e) => {
		
		e.preventDefault()

		updateBikeMtb( bikeMtbData, idBikeMtb)

	}

	return (
		<>
		<form onSubmit={ (event) => { handleSubmit(event)}}>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                BikeMtb Informacion
              </h3>
              
            </div>

            <div className="grid grid-cols-6 gap-6">

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700">
                  Marca
                </label>
                <input
				value={bikeMtbData.marca}
                onChange={ (event) => { handleChange(event) } }
                  type="text"
                  name="marca"                  
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700">
                  Modelo
                </label>
                <input
				value={bikeMtbData.modelo}
                onChange={ (event) => { handleChange(event) } }
                  type="text"
                  name="modelo"                  
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700">
                  Año
                </label>
                <input
				value={bikeMtbData.year}
                onChange={ (event) => { handleChange(event) } }
                  type="number"
                  name="year"                  
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700">
                  Talla
                </label>
                <select
                onChange={ (event) => { handleChange(event) } }                  
                  name="talla"                  
                  className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option value={''}>---</option>
                  <option value={'Small'}>Small</option>
                  <option value={'Medium'}>Medium</option>
                  <option value={'Large'}>Large</option>
                  <option value={'XLarge'}>XLarge</option>                  
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700">
                  Rodada
                </label>
                <input
				value={bikeMtbData.rodada}
                onChange={ (event) => { handleChange(event) } }
                  type="text"
                  name="rodada"                  
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700">
                  Color
                </label>
                <input
				value={bikeMtbData.color}
                onChange={ (event) => { handleChange(event) } }
                  type="text"
                  name="color"                  
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700">
                  Recorrido Delantero
                </label>
                <input
				value={bikeMtbData.rdelantero}
                onChange={ (event) => { handleChange(event) } }
                  type="text"
                  name="rdelantero"                  
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700">
                  Recorrido Trasero
                </label>
                <input
				value={bikeMtbData.rtrasero}
                onChange={ (event) => { handleChange(event) } }
                  type="text"
                  name="rtrasero"                  
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700">
                  Material
                </label>
                <select
                onChange={ (event) => { handleChange(event) } }                  
                  name="material"                  
                  className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option value={''}>---</option>
                  <option value={'Aluminio'}>Aluminio</option>
                  <option value={'Carbono'}>Carbono</option>                                   
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700">
                  Modalidad
                </label>
                <select
                onChange={ (event) => { handleChange(event) } }                  
                  name="modalidad"                  
                  className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option value={''}>---</option>
                  <option value={'Crosscountry'}>Crosscountry</option>
                  <option value={'Trail'}>Trail</option>                                   
                  <option value={'Enduro'}>Enduro</option>                                   
                  <option value={'Downhill'}>Downhill</option>                                   
                </select>
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium text-gray-700">
                  Descripcion
                </label>
                <input
				value={bikeMtbData.descripcion}
                onChange={ (event) => { handleChange(event) } }
                  type="text"
                  name="descripcion"                  
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium text-gray-700">
                  Imagen
                </label>
                <input
				value={bikeMtbData.imagen}
                onChange={ (event) => { handleChange(event) } }
                  type="text"
                  name="imagen"                  
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700">
                  Precio
                </label>
                <input
				value={bikeMtbData.precio}
                onChange={ (event) => { handleChange(event) } }
                  type="number"
                  name="precio"                  
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
              </div>

            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
			  
            <button
              type="submit"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-indigo-800 to-lime-500 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black hover:from-lime-700 hover:to-indigo-700"
            >
              Guardar BikeMtb
            </button>
          </div>
        </div>
      </form>	
		</>
	)
}
