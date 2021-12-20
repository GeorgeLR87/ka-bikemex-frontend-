// ./client/src/components/BikesRuta/Single/index.js
import React, { useEffect, useContext } from "react"
import BikeRutaContext from "./../../../context/BikeRuta/BikerutaContext"
import { useParams } from "react-router-dom"

export default function Single() {

    const ctx = useContext(BikeRutaContext)
    const { singleBikeRuta, getBikeRuta } = ctx

    const params = useParams()
    const id = params.id

    useEffect(() => {
        getBikeRuta(id)
    }, [])

    return(
        <div>
            Pagina individual BikeRuta

            <button
            type='button'
            class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
            onClick={() => { getBikeRuta(id) }} >
                Obtener BikeRuta individual
            </button>

            <h1>{singleBikeRuta.marca}</h1>
            <p>{singleBikeRuta.descripcion}</p>
            <p>{singleBikeRuta.precio}</p>

        </div>
    )
}