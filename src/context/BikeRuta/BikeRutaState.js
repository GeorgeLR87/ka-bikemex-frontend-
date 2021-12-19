// ./client/src/BikeMtb/bikeMtbState.js

import { useReducer } from "react"
import BikeRutaContext from './BikerutaContext'
import BikeRutaReducer from './BikeRutaReducer'
import axiosClient from './../../config/axios'

const BikeRutaState = (props) => {

    //1. Initial State (Estado Inicial)
    const initialState = {
        bikesRuta:[],
        hola: 'mundo'
    }

    //2. Configuración de reducer y creación de estado Global
    const [globalState, dispatch] = useReducer(BikeRutaReducer, initialState)


    // 3. Funciones de cambio en estado Global
    const getBikesRuta = async () => {

        const res = await axiosClient.get('bikesruta/readall')

        console.log('Obteniendo bikesRuta...')

        const list = res.data.data

        dispatch({
            type: 'GET_BIKESRUTA',
            payload: list
        })
    }


    //4. Retorno
    return (
        <BikeRutaContext.Provider
        value={{
            bikesRuta: globalState.bikesRuta,
            hola: globalState.hola,           
            getBikesRuta
        }}
        >
            {props.children}
        </BikeRutaContext.Provider>
    )

}

export default BikeRutaState