import * as types from "../../action/actionTypes"
import { signup } from "../../initialState"

const signUpReducer = (
    state = signup,
    action : {
        type: string,
        payload: any
    }
) => {
    switch (action.type) {
        case types.SIGN_UP_START:
            return { ...state, isLoading: true }
            break;
        case types.SIGN_UP_SUCCESS:
            return { ...state, 
                        user: action.payload, 
                        isLoading: false, 
                        isSuccessful: true }
            break;
        case types.SIGN_UP_FAIL:
            return { ...state, 
                        error: action.payload, 
                        isLoading: false, 
                    }
        case types.SIGN_UP_CLEAN:
            return { ...state, 
                        isLoading: false, 
                        isSuccessful: false, 
                        error: null 
                    }
        default:
            return state
    }
}

export default signUpReducer;