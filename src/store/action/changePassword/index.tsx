import * as types from '../actionTypes'
import AxiosCall  from '../../utility/Axios'
import { Plugins } from '@capacitor/core'

const { Storage } = Plugins

export const changePasswordStart = () => {
    return { type: types.CHANGE_PASSWORD_START, }
}

export const changePasswordSuccess = (payload: any) => {
    return { type: types.CHANGE_PASSWORD_SUCCESS, payload }
}

export const changePasswordFail = (payload: any) => {
    return { type: types.CHANGE_PASSWORD_FAIL, payload }
}

export const cleanUp = () => {
    return { type: types.CHANGE_PASSWORD_CLEAN }
}

export const changePasswordRequest = (passwords: Object) => {
    return async (dispatch: any) => {
        dispatch(changePasswordStart())
        try {
            
            const callDetail =  {
                method: 'POST',
                path: '/accounts/rest-auth/password/change/',
                data: passwords
            }

            const response = await AxiosCall(callDetail, 'JWT')

            dispatch(changePasswordSuccess(response))

        } catch(err) {
            let errorRes;
            if(err.response) {
                errorRes = "Check your details"
            } else {
                errorRes = "Something went wrong. please try again"
            }
            dispatch(changePasswordFail(errorRes))
        }
    }
}
