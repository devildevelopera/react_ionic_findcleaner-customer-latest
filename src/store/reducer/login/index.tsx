import * as types from '../../action/actionTypes'
import { login } from '../../initialState'

const loginReducer = (
        state = login, 
        action: { 
            type: string, 
            payload: Object,
            token: string
        }
    ) => {
    switch (action.type) {
        case types.LOGIN_START:
            return { ...state, isLoading: true }
            break;
        case types.LOGIN_SUCCESS:
            return { ...state, user: action.payload, isLoading: false, isSuccessful: true, error: null }
            break;    
        case types.LOGIN_FAIL:
            return { ...state, error: action.payload, isLoading: false, isSuccessful: false }
            break;
        case types.LOGIN_CLEAN:
            return { ...state, isLoading: false, isSuccessful: false, error: null }
            break;
        case types.SAVE_USER:
            return { ...state, user: action.payload, token: action.token }
            break;
        default:
            return state
    }
}

export default loginReducer