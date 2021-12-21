// ./client/src/components/BikesMtb/Single/index.js
import React, { useEffect, useContext } from "react"
import BikeMtbContext from "./../../../context/BikeMtb/BikeMtbContext"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import UserContext from "../../../context/User/UserContext";


export default function Single() {

	const ctxUser = useContext(UserContext)

 const {   
    authStatus
  } = ctxUser 

    const ctx = useContext(BikeMtbContext)
    const { 
		singleBikeMtb,
		 getBikeMtb, 
		 deleteBikeMtb } = ctx
    const params = useParams()
    const id = params.id

    useEffect(() => {
        getBikeMtb(id)
    }, [])

    return (
        <>
		<div>

			{
				authStatus ?
				<>
				<div class="mt-4 flex md:mt-0">
						<Link to={`/bikesmtb/edit/${id}`}>
							<button 
                            type="button" 
                            class="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-indigo-800 to-lime-500 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black hover:from-lime-700 hover:to-indigo-700">
								Editar Bikemtb
							</button>
						</Link>


						<Link to={`/bikesmtb`}>
							<button 
							onClick={() => deleteBikeMtb(id)}
                            type="button" 
                            class="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-indigo-800 to-lime-500 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black hover:from-lime-700 hover:to-indigo-700">
								Borrra Bikemtb
							</button>
						</Link>
					</div>				
				</>
				:
				<>
				</>
			}					

			<div className="bg-white">
				<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
					<div className="lg:max-w-lg lg:self-end">
						<nav aria-label="Breadcrumb">
							<ol role="list" className="flex items-center space-x-2">
								<li>
									<div className="flex items-center text-sm">
										<Link to="/bikesmtb" className="font-medium text-gray-500 hover:text-gray-900">
											BikesMtb
										</Link>
										<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" className="ml-2 flex-shrink-0 h-5 w-5 text-gray-300">
											<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
										</svg>
									</div>
								</li>
								<li>
									<div className="flex items-center text-sm">
										<Link to="/bikesmtb" className="font-medium text-gray-500 hover:text-gray-900">
											{singleBikeMtb.modelo}
										</Link>
									</div>
								</li>
							</ol>
						</nav>
						<div className="mt-4">
							<h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{singleBikeMtb.marca}</h1>
						</div>

							<br></br>
						<nav aria-label="Breadcrumb">
							<ol role="list" className="flex-col ">					
								<li>
									<div className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">Año: {singleBikeMtb.year}</div>
								</li>
								<br></br>
								<li>
									<div className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">Talla: {singleBikeMtb.talla}</div>
								</li>
								<br></br>
								<li>
									<div className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">Rodada: {singleBikeMtb.rodada}</div>
								</li>
								<br></br>
								<li>
									<div className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">Color: {singleBikeMtb.color}</div>
								</li>
								<br></br>
								<li>
									<div className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">Recorrido Delantero: {singleBikeMtb.rdelantero}</div>
								</li>
								<br></br>
								<li>
									<div className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">Recorrido Trasero: {singleBikeMtb.rtrasero}</div>
								</li>
								<br></br>
								<li>
									<div className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">Material: {singleBikeMtb.material}</div>
								</li>
								<br></br>
								<li>
									<div className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">Modalidad: {singleBikeMtb.modalidad}</div>
								</li>
								<br></br>
								<li>
									<div className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">Descripcion: {singleBikeMtb.descripcion}</div>
								</li>
							</ol>
						</nav>

						<section aria-labelledby="information-heading" className="mt-4">
							<h2 id="information-heading" className="sr-only">Product information</h2>
							<div className="flex items-center">
								<p className="text-lg text-gray-900 sm:text-xl">MXN $ {singleBikeMtb.precio}</p>
								<div className="ml-4 pl-4 border-l border-gray-300">
									<h2 className="sr-only">Reviews</h2>
									<div className="flex items-center">
										<div>
											<div className="flex items-center">
												<svg className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
												<svg className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
												<svg className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
												<svg className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
												<svg className="text-gray-300 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
													<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
												</svg>
											</div>
											<p className="sr-only">4 out of 5 stars</p>
										</div>										
									</div>
								</div>
							</div>
							
							<div className="mt-6 flex items-center">				
								<p className="ml-2 text-sm text-gray-500">In stock and ready to ship</p>
							</div>
						</section>
					</div>
					<div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
						<div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
							<img src={singleBikeMtb.imagen} alt="Imagen de BikeMtb" className="w-full h-full object-center object-cover" />
						</div>
					</div>
					<div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
						<section aria-labelledby="options-heading">
							<h2 id="options-heading" className="sr-only">Product options</h2>
						</section>
					</div>
				</div>
			</div>
		</div>
		</>
   )
}