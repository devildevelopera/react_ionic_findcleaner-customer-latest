import * as types from '../actionTypes'
import AxiosCall  from '../../utility/Axios'
import { Plugins } from '@capacitor/core'

const { Storage } = Plugins

export const loginStart = () => {
    return { type: types.LOGIN_START, }
}

export const loginSuccess = (payload: any) => {
    return { type: types.LOGIN_SUCCESS, payload }
}

export const saveUser = (payload: any, token : string ) => {
    return { type: types.SAVE_USER, payload, token }
}

export const loginFail = (payload: any) => {
    return { type: types.LOGIN_FAIL, payload }
}

export const cleanUp = () => {
    return { type: types.LOGIN_CLEAN }
}

export const loginUserRequest = (user: Object) => {
    return async (dispatch: any) => {
        dispatch(loginStart())

        try {
            
            const callDetail =  {
                method: 'POST',
                path: '/customers/login/',
                data: user
            }

            const response = await AxiosCall(callDetail);

            dispatch(saveUser(response.user, response.token))

            const jsonString = JSON.stringify(response.user);
            
            // Store Token 
            Storage.set({ key: 'token', value: response.token })
            Storage.set({ key: 'user_data', value: jsonString })

            dispatch(loginSuccess(response.user))
            
        } catch(err) {
            let errorRes;
            if(err.response) {
                errorRes = "Check you login details"
            } else {
                errorRes = "Something went wrong. please try again"
            }
            dispatch(loginFail(errorRes))
        }
    }
}
