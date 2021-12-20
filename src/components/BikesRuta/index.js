// ./client/src/components/BikesRuta/index.js
import React, { useEffect, useContext } from 'react'
import BikeRutaContext from './../../context/BikeRuta/BikerutaContext'
import { Link } from 'react-router-dom'

export default function BikesRuta() {
    //Estado Global
    const ctx = useContext(BikeRutaContext)

    const { 
        bikesRuta,                 
        getBikesRuta 
    } = ctx

    //Estado Local
    useEffect(() => {
        getBikesRuta()
    })


    return (
        <>
            <div className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8" >
                <div class="md:flex md:items-center md:justify-between">
                    <div class="flex-1 min-w-0">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            Listado de BikesRuta
                        </h2>
                    </div>
                    <div class="mt-4 flex md:mt-0">
                        <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Edit
                        </button>
                        <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Publish
                        </button>
                    </div>
                </div>


                <div class="bg-white">
                    <div>
                        <div class="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                            {
                                bikesRuta.map(element => {
                                    return (
                                        <>
                                            <div class="">
                                                <div class="rounded-lg bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                                                    <Link to={`/bikesruta/${element._id}`} >
                                                        <img src={element.imagen} alt="Imagen de BikeMtb" class="w-full h-full object-center object-cover" />
                                                    </Link>
                                                </div>
                                                <div class="pt-10 pb-4 text-center">
                                                    <h3 class="text-sm font-medium text-gray-900">
                                                        <Link to={`/bikesruta/${element._id}`} >
                                                            {element.marca}
                                                        </Link>
                                                    </h3>
                                                    <div class="mt-3 flex flex-col items-center">
                                                        <p class="mt-1 text-sm text-gray-500">{element.descripcion}</p>
                                                    </div>
                                                    <p class="mt-4 text-base font-medium text-gray-900">$ {element.precio}</p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
            </div>
            <button onClick={() => { getBikesRuta() }}>
                Listar BikesRuta
            </button>
        </>
            
    )
}
