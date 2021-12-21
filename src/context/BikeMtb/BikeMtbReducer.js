// ./client/context/bikeMtbReducer.js

const reducer = (globalState, action) => {
    
    switch (action.type) {

        case 'GET_BIKEMTB':
        case 'UPDATE_BIKEMTB':
            return {
                ...globalState,
                singleBikeMtb: action.payload
            }

        case 'GET_BIKESMTB':
            return {
                ...globalState,
                bikesMtb: action.payload
            }

        
        default: 
        return globalState
    }
}

export default reducer