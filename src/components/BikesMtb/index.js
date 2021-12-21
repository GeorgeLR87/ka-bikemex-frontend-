// ./client/src/components/BikesMtb/index.js
import React, { useEffect, useContext } from 'react'
import BikeMtbContext from './../../context/BikeMtb/BikeMtbContext'
import { Link } from 'react-router-dom'


export default function BikesMtb() {
    //Estado global
    const ctx = useContext(BikeMtbContext)

    const {
        bikesMtb,
        getBikesMtb
    } = ctx

    //Estado Local

    useEffect(() => {
        getBikesMtb()
    }, [])

    return (
        <>
            <div className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8" >
                <div class="md:flex md:items-center md:justify-between">
                    <div class="flex-1 min-w-0">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            Bicicletas de Montaña
                        </h2>
                    </div>
                    
                </div>


                <div class="bg-white">
                    <div>
                        <div class="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                            {
                                bikesMtb.map(element => {
                                    return (
                                        <>
                                            <div class="">
                                                <div class="rounded-lg bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                                                    <Link to={`/bikesmtb/${element._id}`} >
                                                        <img src={element.imagen} alt="Imagen de BikeMtb" class="w-full h-full object-center object-cover" />
                                                    </Link>
                                                </div>
                                                <div class="pt-10 pb-4 text-center">
                                                    <h3 class="text-sm font-medium text-gray-900">
                                                        <Link to={`/bikesmtb/${element._id}`}>
                                                        <h1>Marca</h1><br></br> {element.marca}
                                                        </Link>
                                                    </h3>
                                                    <div class="mt-3 flex flex-col items-center">
                                                        <p class="mt-1 text-sm text-gray-500"><h1>Descripcion</h1><br></br>{element.descripcion}</p>
                                                    </div>
                                                    <p class="mt-4 text-base font-medium text-gray-900"><h1>Precio $</h1><br></br> {element.precio}</p>
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
        </>
            
        
    )
}


