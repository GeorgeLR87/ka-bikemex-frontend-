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

    return (
        <>
        <p>Listado de BikesMtb</p>
        
        <button
        type='button'
        class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => { getBikesMtb() }}>
            Listar BikesMtb
        </button>

        <div>
            <h2>Listado de BikesMtb</h2>
            
            <ul>
                {
                    bikesMtb.map((element) => {
                        return (
                            <li key={element._id}>

                                <Link to={`/bikesmtb/${element._id}`}>
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
