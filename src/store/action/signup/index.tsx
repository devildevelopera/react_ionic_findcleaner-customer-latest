import * as types from '../actionTypes'
import AxiosCall from '../../utility/Axios'
import { Plugins } from '@capacitor/core'

const { Storage } = Plugins;

export const signupStart = () => {
    return { type: types.SIGN_UP_START }
}

export const signupSuccess = (payload: any) => {
    return { type: types.SIGN_UP_SUCCESS, payload }
}

export const signupFail = (payload: any) => {
    return { type: types.SIGN_UP_FAIL, payload }
}

export const signupCleanUp = () => {
    return { type: types.SIGN_UP_CLEAN }
}

export const signUpRequest = (user : Object) => {
    return async (dispatch: any) => {

        dispatch(signupStart())

        try{
            const payloadObj = {
                method: 'POST',
                path: '/customers/signup/',
                data: user
            }

            const response =  await AxiosCall(payloadObj)
            dispatch(signupSuccess(response))

        } catch (err) {

            let errorResponse;
            
            if (err.response.data) {
              errorResponse = 'Email already exists.'
            } else {
              errorResponse = ['Something went wrong. please try again'];
            }
            
            dispatch(signupFail(errorResponse))

        }
    }
}