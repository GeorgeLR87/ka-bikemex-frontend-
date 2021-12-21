//./client/components/HOME
import React, {useContext} from 'react'
import UserContext from '../context/User/UserContext'

export default function Home() {

    const ctx = useContext(UserContext)

    const {
        verifyingToken
    } = ctx


    return (
        <div>
            <h1>Este es el Home</h1>

            <button onClick={() => {
                verifyingToken()
            }}>
                Verificar sesion
            </button>
        </div>
    )
}
