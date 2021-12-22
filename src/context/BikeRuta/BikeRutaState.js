// ./client/src/BikeMtb/bikeMtbState.js

import { useReducer } from "react"
import BikeRutaContext from "./BikerutaContext"
import BikeRutaReducer from './BikeRutaReducer'
import axiosClient from './../../config/axios'

const BikeRutaState = (props) => {

    //1. Initial State (Estado Inicial)
    const initialState = {
        bikesRuta:[],
        singleBikeRuta: {
            _id:"",
            marca: "",
            modelo: "",
            year: "",
            talla: "",
            rodada: "",
            color: "",
            tipofreno: "",
            transmision: "",
            material: "",
            modalidad: "",
            descripcion: "",
            precio: "",
            imagen:""
        },
        hola: 'mundo'
    }

    //2. Configuración de reducer y creación de estado Global
    const [globalState, dispatch] = useReducer(BikeRutaReducer, initialState)


    // 3. Funciones de cambio en estado Global
    const getBikesRuta = async () => {

        const res = await axiosClient.get('bikesruta/readall')        

        const list = res.data.data

        dispatch({
            type: 'GET_BIKESRUTA',
            payload: list
        })
    }

    const getBikeRuta = async (bikeRutaId) => {

        const res = await axiosClient.get(`bikesruta/readone/${bikeRutaId}`)

        const selectedBikeRuta = res.data.data

        dispatch({
            type: 'GET_BIKERUTA',
            payload: selectedBikeRuta
        })
    }

    const createBikeRuta = async (form) => {

        const res = await axiosClient.post('/bikesruta/create', form)
       
    }

    const updateBikeRuta  = async (form, idBikeRuta) => {

		const res = await axiosClient.put(`bikesruta/edit/${idBikeRuta}`, form)

		const updatedRutaMtb = res.data.data        

		dispatch({
			type: "UPDATE_BIKERUTA",
			payload: updatedRutaMtb
		})

	}

    const deleteBikeRuta = async (idBikeRuta) => {
        const res = await axiosClient.delete(`bikesruta/delete/${idBikeRuta}`);

        const deletedBikeRuta = res.data.data;

        dispatch({
            type: 'DELETE_BIKERUTA',
            payload: deletedBikeRuta,
        });
    };




    //4. Retorno
    return (
        <BikeRutaContext.Provider
        value={{
            bikesRuta: globalState.bikesRuta,
            hola: globalState.hola,  
            singleBikeRuta: globalState.singleBikeRuta,         
            getBikesRuta,
            getBikeRuta,
            createBikeRuta,
            updateBikeRuta,
            deleteBikeRuta
        }}
        >
            {props.children}
        </BikeRutaContext.Provider>
    )

}

export default BikeRutaState