import * as types from '../actionTypes'
import AxiosCall from '../../utility/Axios'

export const serviceHistoryStart = () => {
    return { type: types.SERVICE_HISTORY_START }
}

export const serviceHistorySuccess = ( payload: Array<[]> ) => {
    return { type: types.SERVICE_HISTORY_SUCCESS, payload }
}

export const serviceHistoryFail = (payload: any ) => {
    return { type: types.SERVICE_HISTORY_FAIL, payload }
} 

export const serviceHistoryCleanup = () => {
    return { type: types.SERVICE_HISTORY_CLEAN }
}

export const serviceHistoryRequest = (id: string) => {
    return async (dispatch : any ) => {
        dispatch(serviceHistoryStart()) 
        try {

            const payloadObj = {
                method: 'GET',
                path: `/customers/work-history/${id}?status=new`,
                data: id
            }

            const response = await AxiosCall(payloadObj)

            console.log(response)

            dispatch(serviceHistorySuccess(response))
            
        } catch (e) {
            console.log(e.response.data)
            dispatch(serviceHistoryFail(e.response.data))
        }
    }
}