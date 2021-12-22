//./client/components/HOME
import React, { useContext } from 'react'
import UserContext from '../context/User/UserContext'

export default function Home() {

    const ctx = useContext(UserContext)

    const {
        verifyingToken
    } = ctx


    return (

        <main> 

            <div className="relative mt-0 ">
                <div className="absolute inset-x-0 bottom-0 bg-gray-100"></div>
                <div className="max-w-8x1 mx-auto">
                    <div className="h-[50rem] relative shadow-xl sm:overflow-hidden">
                        <div className="absolute inset-0">
                            <img className="h-full w-full object-cover" src="https://trek.scene7.com/is/image/TrekBicycleProducts/BT21_WEB_TLR_PLP_MTNMarquee?$responsive-pjpg$&cache=on,on&wid=1920" alt="People working on laptops"/>
                                <div className="absolute inset-0 bg-lime-700 mix-blend-multiply"></div>
                        </div>
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                <span className="block text-white">Vendemos tu Bicicleta</span>
                                <br></br>
                                <span className="block text-indigo-100">Tienda de Bicicletas usadas Gama Alta</span>
                            </h1>
                            <br></br>
                            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                Empresa enfocada a la venta de bicicletas de Ruta y Montaña de Gama Alta. Vendemos todas las marcas.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>

           
        </main>
    )
}
