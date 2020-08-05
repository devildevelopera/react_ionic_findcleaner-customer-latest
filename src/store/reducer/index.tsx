import { combineReducers } from 'redux'
import login from './login'
import signup from './signup'
import serviceHistory from './serviceHistory'
import profileUpdate from './profileUpdate'
import changePassword from './changePassword'
import billingCards from './billingCards'
import allServices from  './allServices';
import providers from './providers'

const rootReducer = combineReducers({
    login, 
    signup,
    allServices,
    providers,
    serviceHistory,
    profileUpdate,
    changePassword,
    billingCards
})

export default rootReducer;