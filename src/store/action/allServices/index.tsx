import * as types from '../actionTypes'
import AxiosCall from '../../utility/Axios'

export const allServicesStart = () => {
    return { type: types.ALL_SERVICES_START }
}

export const allServicesSuccess = ( payload: any ) => {
    return { type: types.ALL_SERVICES_SUCCESS, payload }
}

export const allServicesFail = (payload: any ) => {
    return { type: types.ALL_SERVICES_FAIL, payload }
} 

export const allServicesCleanup = () => {
    return { type: types.ALL_SERVICES_CLEAN }
}

export const allServicesRequest = () => {
    return async (dispatch : any ) => {
        dispatch(allServicesStart()) 
        try {

            const payloadObj = {
                method: 'GET',
                path: `/services/all-services`,
            }

            const response = await AxiosCall(payloadObj, 'jwt')

            dispatch(allServicesSuccess(response))
            
        } catch (e) {
            console.log(e.response)
            dispatch(allServicesFail(e.response))
        }
    }
}