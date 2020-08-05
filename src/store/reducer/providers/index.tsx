import * as types from '../../action/actionTypes'
import { providers } from '../../initialState'

const providersReducer = (
    state = providers,
    action: {
        type: string,
        payload: any
    }
) => {
    switch (action.type) {
        case types.PROVIDERS_START:
            return { ...state, isLoading: true }
            break;
        case types.PROVIDERS_SUCCESS:
            return { ...state, 
                        providers: action.payload, 
                        isLoading: false, 
                        isSuccessful: true }
            break;
        case types.PROVIDERS_FAIL:
            return { ...state, 
                        error: action.payload, 
                        isLoading: false, 
                    }
        case types.PROVIDERS_CLEAN:
            return { ...state, 
                        isLoading: false, 
                        isSuccessful: false, 
                        error: null 
                    }
        default:
            return state
    }
}

export default providersReducer;