// ./client/src/components/BikesMtb/Single/index.js
import React, { useEffect, useContext } from "react"
import BikeMtbContext from "./../../../context/BikeMtb/BikeMtbContext"
import { useParams } from "react-router-dom"

export default function Single() {

    const ctx = useContext(BikeMtbContext)
    const { singleBikeMtb, getBikeMtb  } = ctx

    const params = useParams()
    const id = params.id

    useEffect(() => {
        getBikeMtb(id)
    }, [])

    return(
        <div>
            Pagina individual BikeMtb

            <button
            type='button'
            class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
            onClick={() => { getBikeMtb(id) }} >
                Obtener BikeMtb  individual
            </button>
            
            <h1>{singleBikeMtb.marca}</h1>
            <p>{singleBikeMtb.descripcion}</p>
            <p>{singleBikeMtb.precio}</p>


        </div>
    )
}