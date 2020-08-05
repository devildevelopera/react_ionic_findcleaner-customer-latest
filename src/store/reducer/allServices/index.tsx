import * as types from '../../action/actionTypes'
import { allServices } from '../../initialState'

const allServicesReducer = (
        state = allServices, 
        action: { 
            type: string, 
            payload: Array<[]>,
        }
    ) => {
    switch (action.type) {
        case types.ALL_SERVICES_START:
            return { ...state, isLoading: true }
            break;
        case types.ALL_SERVICES_SUCCESS:
            return { ...state, result: action.payload, isLoading: false, isSuccessful: true  }
            break;    
        case types.ALL_SERVICES_FAIL:
            return { ...state, error: action.payload, isLoading: false, isSuccessful: false }
            break;
        case types.ALL_SERVICES_CLEAN:
            return { ...state, isLoading: false, isSuccessful: false, error: null }
            break;
        default:
            return state
    }
}

export default allServicesReducer