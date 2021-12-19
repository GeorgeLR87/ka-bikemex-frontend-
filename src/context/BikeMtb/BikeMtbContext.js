// ./client/src/BikeMtb/BikeMtbContext.js
// BikeMtb Context
// Inicialización del context, esto significa que emepiza con un valor inciall de null, pero conforme vayamos agredando nuevos valores, ese null va a cambiar a un objeto

import { createContext } from "react"

const BikeMtbContext = createContext(null)

export default BikeMtbContext