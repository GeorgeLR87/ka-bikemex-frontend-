// ./client/src/components/Layout/Header.js

import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header className="bg-lime-600">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
				<div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
					<div className="flex items-center">
						<Link to="/">
							<img className="h-12 w-auto" src="https://i.ibb.co/gPyxy7j/Ka-bike.png" alt="" />
						</Link>
						<div className="ml-10 space-x-8 lg:block">
							<Link to="/bikesmtb" className="text-base font-medium text-black hover:text-indigo-50">
								Bikes MTB
							</Link>
							<Link to="/bikesruta" className="text-base font-medium text-black hover:text-indigo-50">
								Bikes Ruta
							</Link>
							<Link to="/sobre-nosotros" className="text-base font-medium text-black hover:text-indigo-50">
								Sobre nosotros
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}