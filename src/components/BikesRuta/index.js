// ./client/src/components/BikesRuta/index.js
import React, { useEffect, useContext } from 'react'
import BikeRutaContext from "./../../context/BikeRuta/BikeRutaContext"
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
    }, [])


    return (
        <>
            <div className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8" >
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex-1 min-w-0">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            Bicicletas de Ruta
                        </h2>
                    </div>
                    
                </div>


                <div className="bg-white">
                    <div>
                        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                            {
                                bikesRuta.map(element => {
                                    return (
                                        <>
                                            <div className="">
                                                <div className="rounded-lg bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                                                    <Link to={`/bikesruta/${element._id}`} >
                                                        <img src={element.imagen} alt="Imagen de BikeMtb" className="w-full h-full object-center object-cover" />
                                                    </Link>
                                                </div>
                                                <div className="pt-10 pb-4 text-center">
                                                    <h3 className="text-sm font-medium text-gray-900">
                                                        <Link to={`/bikesruta/${element._id}`} >
                                                        <h1>Marca</h1>   <br></br>    {element.marca}
                                                        </Link>
                                                    </h3>
                                                    <div className="mt-3 flex flex-col items-center">
                                                        <p className="mt-1 text-sm text-gray-500"><h1>Descripcion</h1><br></br>{element.descripcion}</p>
                                                    </div>
                                                    <p className="mt-4 text-base font-medium text-gray-900"><h1>Precio $</h1><br></br> {element.precio}.00 MXN</p>
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
