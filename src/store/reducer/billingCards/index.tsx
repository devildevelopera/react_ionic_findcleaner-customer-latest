import * as types from '../../action/actionTypes'
import { billingCards } from '../../initialState'

const billingCardReducer = (
        state = billingCards, 
        action: { 
            type: string, 
            payload: Array<[]>,
        }
    ) => {
    switch (action.type) {
        case types.BILLING_CARDS_START:
            return { ...state, isLoading: true }
            break;
        case types.BILLING_CARDS_SUCCESS:
            return { ...state, cards: action.payload, isLoading: false, isSuccessful: true  }
            break;    
        case types.BILLING_CARDS_FAIL:
            return { ...state, error: action.payload, isLoading: false, isSuccessful: false }
            break;
        case types.BILLING_CARDS_CLEAN:
            return { ...state, isLoading: false, isSuccessful: false, error: null }
            break;
        default:
            return state
    }
}

export default billingCardReducer