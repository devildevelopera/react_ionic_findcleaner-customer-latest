import * as types from '../../action/actionTypes'
import {  serviceRequest } from '../../initialState'

const serviceRequestReducer = (
    state = serviceRequest,
    action: {
        type: string,
        payload: Object
    }
) => {
    switch (action.type) {
        case types.SERVICE_REQUEST_START:
            return { ...state, isLoading: true }
            break;
        case types.SERVICE_REQUEST_SUCCESS: 
            return { ...state, result: action.payload, isLoading: false, isSuccessful: true }
            break;
        case types.SERVICE_REQUEST_FAIL: 
            return { ...state, error: action.payload, isLoading: false, isSuccessful: false } 
            break;
        case types.SERVICE_REQUEST_CLEAN:
            return { ...state, isLoading: false, isSuccessful: false, error: null }   
    
        default:
            return state
    }
}

export default serviceRequestReducer;