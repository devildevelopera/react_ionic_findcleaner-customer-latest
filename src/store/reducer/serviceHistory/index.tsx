import * as types from '../../action/actionTypes'
import {  serviceHistory } from '../../initialState'

const serviceHistoryReducer = (
    state = serviceHistory,
    action: {
        type: string,
        payload: Array<[]>
    }
) => {
    switch (action.type) {
        case types.SERVICE_HISTORY_START:
            return { ...state, isLoading: true }
            break;
        case types.SERVICE_HISTORY_SUCCESS: 
            return { ...state, result: action.payload, isLoading: false, isSuccessful: true }
            break;
        case types.SERVICE_HISTORY_FAIL: 
            return { ...state, error: action.payload, isLoading: false, isSuccessful: false } 
            break;
        case types.SERVICE_HISTORY_CLEAN:
            return { ...state, isLoading: false, isSuccessful: false, error: null }   
    
        default:
            return state
    }
}

export default serviceHistoryReducer;