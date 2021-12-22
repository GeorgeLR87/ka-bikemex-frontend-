// ./client/src/Auth/Register.js
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './../../context/User/UserContext'



export default function Register() {

  const ctx = useContext(UserContext)

  const {
    registerUser
  } = ctx

    const [newUser, SetNewUser] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmarpassword: ''
    }) 

    const handleChange = (e) => {
        e.preventDefault()

        SetNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        registerUser(newUser)
    }

	return (
		<div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src="https://i.ibb.co/z4fsjy9/BIKE-1.png" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Crea tu cuenta
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          ¿Ya tienes cuenta? &nbsp;
          <Link to="/users/login">
            <a className="font-medium text-lime-500 hover:text-indigo-800">
              Inicia sesión.
            </a>
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          
          <form 
          onSubmit={(event) => { handleSubmit(event)}}
          className="space-y-6">
          <div>
              <label for="password" className="block text-sm font-medium text-gray-700">
                Tu nombre completo
              </label>
              <div className="mt-1">
                <input 
                onChange={(event) => { handleChange(event)}}
                  name="nombre" 
                  type="text" 
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label for="email" className="block text-sm font-medium text-gray-700">
                Tu correo electrónico
              </label>
              <div className="mt-1">
                <input 
                onChange={(event) => { handleChange(event)}}
                  name="email" 
                  type="email" 
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label for="password" className="block text-sm font-medium text-gray-700">
                Tu contraseña
              </label>
              <div className="mt-1">
                <input 
                onChange={(event) => { handleChange(event)}}
                  name="password" 
                  type="password" 
                  required 
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label for="password" className="block text-sm font-medium text-gray-700">
                Confirma tu contraseña
              </label>
              <div className="mt-1">
                <input 
                onChange={(event) => { handleChange(event)}}
                name="confirmarpassword" 
                type="password" 
                required 
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black form bg-lime-600 to lime hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Crear cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
	)
}