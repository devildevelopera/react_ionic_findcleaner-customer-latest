import * as types from '../actionTypes'
import AxiosCall  from '../../utility/Axios'

export const profileUpdateStart = () => {
    return { type: types.PROFILE_UPDATE_START, }
}

export const profileUpdateSuccess = (payload: any) => {
    return { type: types.PROFILE_UPDATE_SUCCESS, payload }
}

export const profileUpdateFail = (payload: any) => {
    return { type: types.PROFILE_UPDATE_FAIL, payload }
}

export const profileUpdateCleanUp = () => {
    return { type: types.PROFILE_UPDATE_CLEAN }
}

export const profileUpdateRequest = (user: Object, username: string) => {
    return async (dispatch: any) => {
        dispatch(profileUpdateStart())

        try {

            const callDetail = {
                method: 'PATCH',
                path: `/accounts/update-user/${username}/`,
                data: user
            }

            const response = await AxiosCall(callDetail);
            dispatch(profileUpdateSuccess(response))


        } catch (e) {
             let errorRes;
            if(e.response) {
                errorRes = "Check you details"
            } else {
                errorRes = "Something went wrong. please try again"
            }
            dispatch(profileUpdateFail(errorRes))
        }
    }
}