import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from "./store";
import { Plugins } from '@capacitor/core'
import { saveUser } from './store/action/login'
import { allServicesRequest } from "./store/action/allServices";

const { Storage } = Plugins

const Auth = () => {
    
    const [ token, setToken ] = useState<any>('')
    const [ userInfo, setUserInfo ] = useState<any>()
    const [ userStat, setUserState ] = useState<any>()
    const dispatch = useDispatch()

    useEffect(() => {
       const getToken = async () => {
            Storage.get({
                key: 'token'
            }).then(data => {
                setToken(data.value)
            })
       }
       getToken()
    })
    useEffect(() => {

        Storage.get({
            key: 'user_data'
        }).then( data => {
            setUserInfo(data.value)
        })
        if(token && userInfo !== undefined) {
            dispatch(saveUser(JSON.parse(userInfo),token))
            dispatch(allServicesRequest())
        }

    })
    

    return (
        <App appToken={token} />
    )   
}
ReactDOM.render(
    <Provider store={store}>
        <Auth />
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
