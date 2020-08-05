import * as types from '../../action/actionTypes'
import { login } from '../../initialState'

const changePasswordReducer = (
        state = login, 
        action: { 
            type: string, 
            payload: Object
        }
    ) => {
    switch (action.type) {
        case types.CHANGE_PASSWORD_START:
            return { ...state, isLoading: true }
            break;
        case types.CHANGE_PASSWORD_SUCCESS:
            return { ...state, result: action.payload, isLoading: false, isSuccessful: true  }
            break;    
        case types.CHANGE_PASSWORD_FAIL:
            return { ...state, error: action.payload, isLoading: false, isSuccessful: false }
            break;
        case types.CHANGE_PASSWORD_CLEAN:
            return { ...state, isLoading: false, isSuccessful: false, error: null }
            break;
        default:
            return state
    }
}

export default changePasswordReducer