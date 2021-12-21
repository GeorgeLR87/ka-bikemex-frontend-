// ./src/context/User/UserState
import { useReducer } from "react";
import UserReducer from "./UserReducer.js";
import UserContext from "./UserContext";
import axiosClient from "../../config/axios";


const UserState = (props) => {

    //1. Initial State
    const initialState = {
        currentUser: {
            nombre: '',
            apellido: '',
            pais: '',
            direccion: '',
            email: '',
            password: ''
        },

        authStatus: false
    }

    //2. Configuración del reducer
    const [globalState, dispatch] = useReducer(UserReducer, initialState)

    //3. Funciones
    const registerUser = async (form) => {

        const res = await axiosClient.post('users/create', form)

        console.log(res)

        const token = res.data.data

        dispatch({
            type: 'REGISTRO_EXITOSO',
            payload: token
        })
    }

    const loginUser = async (form) => {

        console.log(form)

        const res = await axiosClient.post('users/login', form)

        console.log(res)

        const token = res.data.data

        dispatch({
            type: 'LOGIN_EXITOSO',
            payload: token
        })
    }

    const verifyingToken = async () => {

        const token = localStorage.getItem('token')

        //Anexar token a la siguiente petición de axios
        if(token) {
            axiosClient.defaults.headers.common["x-auth-token"] = token
        } else {
            delete axiosClient.defaults.headers.common["x-auth-token"]
        }

        try {
            
            const res = await axiosClient.get('users/verifytoken')

            const userData = res.data.data

            dispatch({
                type: 'GET_USER_USER',
                payload: userData
            })

        } catch (error) {
            console.log(error)            
        }
    }

    const logoutUser = async () => {        
		dispatch({
            type: "LOGOUT_USUARIO"
        })
	}

    //4. Retorno
    return (
        <UserContext.Provider 
        value={{
            currentUser: globalState.currentUser,
            authStatus: globalState.authStatus,
            registerUser,
            loginUser, 
            verifyingToken,
            logoutUser
        }}
        >
            {props.children}

        </UserContext.Provider>
    )
}

export default UserState