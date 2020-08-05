import * as types from '../actionTypes'
import AxiosCall from '../../utility/Axios'

export const serviceRequestStart = () => {
    return { type: types.SERVICE_REQUEST_START }
}

export const serviceRequestSuccess = ( payload: Object ) => {
    return { type: types.SERVICE_REQUEST_SUCCESS, payload }
}

export const serviceRequestFail = (payload: any ) => {
    return { type: types.SERVICE_REQUEST_FAIL, payload }
} 

export const serviceRequestCleanup = () => {
    return { type: types.SERVICE_REQUEST_CLEAN }
}

export const serviceRequest = (data: any) => {
    return async (dispatch : any ) => {
        dispatch(serviceRequestStart()) 
        try {

            const payloadObj = {
                method: 'GET',
                path: `/customers/schedule/`,
                data: data
            }

            const response = await AxiosCall(payloadObj, 'jwt')
            // console.log(payloadObj)
            dispatch(serviceRequestSuccess(response))
            
        } catch (e) {
            dispatch(serviceRequestFail(e.response.data))
        }
    }
}