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

    return (
        <>
            <p>Listado BikesMtb</p>
            
            <button
            type='button'
            class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
             onClick={() => {getBikesRuta()}} >
                Listar BikesRuta
            </button>

            <div>
                <h2>Listado de Bikesruta</h2>
                <ul>
                    {
                        bikesRuta.map((element) => {
                            return (
                                <li key={element._id}>

                                    <Link to={`/bikesruta/${element._id}`}>
                                    <p>{element.marca}</p>
                                    </Link>
                                    
                                    <p>{element.precio}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}
