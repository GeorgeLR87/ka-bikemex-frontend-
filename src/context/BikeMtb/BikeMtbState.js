// ./client/src/BikeMtb/bikeMtbState.js

//Estado global - Store
//La arquitectura que se utiliza para generar el estado global se le conoce como flux.

import { useReducer } from "react"
import BikeMtbContext from './BikeMtbContext'
import BikeMtbReducer from './BikeMtbReducer'
import axiosClient from './../../config/axios'


const BikeMtbState = (props) => {

    //1. Initial State (Estado Inicial)
    const initialState = {
        bikesMtb: [],
        singleBikeMtb: {
            _id:"",
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
            precio: ""
        },
        hola: 'mundo'

    }

    //2. Configuración de reducer y creación de estado Global
    // Reducers son funciones que alteran el estado global
    const [globalState, dispatch] = useReducer(BikeMtbReducer, initialState)


    // 3. Funciones de cambio en estado Global
    const getBikesMtb = async () => {

        const res = await axiosClient.get('bikesmtb/readall')

        console.log('Obteniendo bikesmtb...')
        
        const list = res.data.data
        
        dispatch({
            type: 'GET_BIKESMTB',
            payload: list
        })
    }

    const getBikeMtb = async (bikeMtbId) => {

        const res = await axiosClient.get(`bikesmtb/readone/${bikeMtbId}`)

        const selectedBikeMtb = res.data.data

        dispatch({
            type: 'GET_BIKEMTB',
            payload: selectedBikeMtb
        })
    }

    //4. Retorno
    return (

        <BikeMtbContext.Provider
        value={{
            bikesMtb: globalState.bikesMtb,
            hola: globalState.hola, 
            singleBikeMtb: globalState.singleBikeMtb,           
            getBikesMtb,
            getBikeMtb
        
        }}
        >
            {props.children}
        </BikeMtbContext.Provider>
    )
}

export default BikeMtbState