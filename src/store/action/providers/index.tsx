import * as types from '../actionTypes'
import AxiosCall from '../../utility/Axios'

export const providerstStart = () => {
    return { type: types.PROVIDERS_START }
}

export const providerstSuccess = ( payload: Array<[]> ) => {
    return { type: types.PROVIDERS_SUCCESS, payload }
}

export const providerstFail = (payload: any ) => {
    return { type: types.PROVIDERS_FAIL, payload }
} 

export const providersCleanup = () => {
    return { type: types.PROVIDERS_CLEAN }
}

export const providersRequest = (data: any) => {
    return async (dispatch : any ) => {
        dispatch(providerstStart()) 
        try {

            const payloadObj = {
                method: 'GET',
                path: `/customers/search-providers`,
                data: data
            }

            const response = await AxiosCall(payloadObj)

            dispatch(providerstSuccess(response.results))
            
        } catch (e) {
            dispatch(providerstFail(e.response.data))
        }
    }
}