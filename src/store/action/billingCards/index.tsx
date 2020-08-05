import * as types from '../actionTypes'
import AxiosCall  from '../../utility/Axios'

export const billingCardsStart = () => {
    return { type: types.BILLING_CARDS_START, }
}

export const billingCardsSuccess = (payload: any) => {
    return { type: types.BILLING_CARDS_SUCCESS, payload }
}

export const billingCardsFail = (payload: any) => {
    return { type: types.BILLING_CARDS_FAIL, payload }
}

export const billingCardsCleanUp = () => {
    return { type: types.BILLING_CARDS_CLEAN }
}

export const billingCardsRequest = () => {
    return async (dispatch: any) => {
        dispatch(billingCardsStart()) 

        try {
            const callDetail = {
                method: 'GET',
                path: '/billing/my_cards',
            }

            const response = await AxiosCall(callDetail);

            console.log(response);
            
            dispatch(billingCardsSuccess(response))

        } catch (e) {
            let errorRes;
            if(e.response) {
                errorRes =  e.response
            }
            dispatch(billingCardsFail(errorRes))
        }
    }
}