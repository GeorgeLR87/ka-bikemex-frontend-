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

            <div class="relative mt-0 ">
                <div class="absolute inset-x-0 bottom-0 bg-gray-100"></div>
                <div class="max-w-8x1 mx-auto">
                    <div class="h-[50rem] relative shadow-xl sm:overflow-hidden">
                        <div class="absolute inset-0">
                            <img class="h-full w-full object-cover" src="https://trek.scene7.com/is/image/TrekBicycleProducts/BT21_WEB_TLR_PLP_MTNMarquee?$responsive-pjpg$&cache=on,on&wid=1920" alt="People working on laptops"/>
                                <div class="absolute inset-0 bg-lime-700 mix-blend-multiply"></div>
                        </div>
                        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                            <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                <span class="block text-white">Vendemos tu Bicicleta</span>
                                <br></br>
                                <span class="block text-indigo-100">Tienda de Bicibletas usadas Gama Alta</span>
                            </h1>
                            <br></br>
                            <p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                Empresa enfocada a la venta de bicibletas de Ruta y Montaña de Gama Alta. Vendemos todas las marcas de bicicletas usadas.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>

           
        </main>
    )
}
