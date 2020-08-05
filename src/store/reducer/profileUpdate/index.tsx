import * as types from '../../action/actionTypes'
import { updateProfile } from '../../initialState'

const profileUpdate = (
    state = updateProfile,
    action: {
        type: string,
        payload: any
    }
) => {
    switch (action.type) {
        case types.PROFILE_UPDATE_START:
            return { ...state, isLoading: true }
            break;
        case types.PROFILE_UPDATE_SUCCESS:
            return { ...state, 
                        user: action.payload, 
                        isLoading: false, 
                        isSuccessful: true }
            break;
        case types.PROFILE_UPDATE_FAIL:
            return { ...state, 
                        error: action.payload, 
                        isLoading: false, 
                    }
        case types.PROFILE_UPDATE_CLEAN:
            return { ...state, 
                        isLoading: false, 
                        isSuccessful: false, 
                        error: null 
                    }
        default:
            return state
    }
}

export default profileUpdate;