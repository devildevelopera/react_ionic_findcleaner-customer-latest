import React, { useState, useEffect } from "react";
import {  useDispatch, useSelector } from 'react-redux'
import { Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonList,
  IonImg,
  IonText,
  IonRouterLink,
  IonContent,
  IonItem,
  IonButton,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

// import { Link } from "react-router-dom";
import HomeCustomer from "./pages/HomeCustomer/HomeCustomer";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import iconAvata from "./image/avata.png";
import iconArrow from "./image/icon-arrow.png";
import iconHome from "./image/icon-home.png";
import iconPayment from "./image/icon-payment.png";
import iconHelp from "./image/icon-help.png";
import iconService from "./image/icon-service.png";
import iconProfile from "./image/icon-profile.png";
import iconEarning from "./image/icon-earning.png";
import iconLogout from "./image/icon-logout.png";
import NewService from "./pages/NewService/NewService";
import Summary from "./pages/Summary/Summary";
import ServiceHistory from "./pages/ServiceHistory/ServiceHistory";
import ProviderDetail from "./pages/ProviderDetail/ProviderDetail";
import ProfileCustomer from "./pages/ProfileCustomer/ProfileCustomer";
import Earnings from "./pages/Earnings/Earnings";
import Payment from "./pages/Payment/Payment";
import OTP from "./pages/OTP/OTP";
import CleaningServiceRequest from "./pages/CleaningServiceRequest/CleaningServiceRequest";
import EditPasswordCustomer from "./pages/EditPasswordCustomer/EditPasswordCustomer";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Help from "./pages/Help/Help";
import AvailableProviders from "./pages/AvailableProviders/AvailableProviders";

import { Plugins } from '@capacitor/core'
const { Storage } = Plugins


const MainRoute = (props: any, user: any) => {

  const [ userProfile, setUserProfile ] = useState<any>()
  const dispatch = useDispatch()
  const status = useSelector((stat: any) => stat.login)

  useEffect(() => {
    if(status.isSuccessful) {
       setUserProfile(status)
       
       console.log(status)
    }
  })

  return(
    <IonApp>
         <IonMenu contentId="content1" side="start">
        <IonHeader className="ion-padding-horizontal ion-padding-vertical">
          <IonToolbar>
            <IonList className="listTitle">
              <IonImg className="imgAvata" src={iconAvata} />
              <IonList className="titleMenu">
                <IonText color="blue">Mira SK</IonText>
                <IonText className="email">infodymira@gmail.com</IonText>
              </IonList>
              {/* <Link to="/newservice" className="highlight"> */}
              <IonRouterLink href="/profilecustomer">
                <IonImg className="imgArrow" src={iconArrow} />
              </IonRouterLink>

              {/* </Link> */}
            </IonList>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList className="ion-padding-horizontal">
            <IonRouterLink href="/homecustomer">
              <IonItem>
                <IonImg className="imgMenu" src={iconHome} />
                <p className="textMenu">Home</p>
              </IonItem>
            </IonRouterLink>
            <IonRouterLink href="/servicehistory">
              <IonItem>
                <IonImg className="imgMenu" src={iconService} />
                <p className="textMenu">Service History</p>
              </IonItem>
            </IonRouterLink>
            <IonRouterLink href="/profilecustomer">
              <IonItem>
                <IonImg className="imgMenu" src={iconProfile} />
                <p className="textMenu">Profile</p>
              </IonItem>
            </IonRouterLink>
            {/* <IonRouterLink href="/payment"> */}
            <IonRouterLink href="/payment">
              <IonItem>
                <IonImg className="imgMenu" src={iconPayment} />
                <p className="textMenu">Payment</p>
              </IonItem>
            </IonRouterLink>
            <IonRouterLink href="/help">
              <IonItem>
                <IonImg className="imgMenu" src={iconHelp} />
                <p className="textMenu">Help</p>
              </IonItem>
            </IonRouterLink>
            <IonRouterLink href="/login">
              <IonItem>
                <IonImg className="imgMenu" src={iconLogout} />
                <p className="textMenu">
                  <IonButton
                    onClick={(e) => {
                      // Storage.clear();
                    }}
                  > Logout </IonButton>
                </p>
              </IonItem>
            </IonRouterLink>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="content1"></IonRouterOutlet>
      {/* Routes */}
      <IonRouterOutlet>
        <Route name="/homecustomer" component={HomeCustomer} exact={true} />
        <Route path="/newservice" component={NewService} exact={true} />
        <Route path="/summary" component={Summary} exact={true} />
        <Route path="/servicehistory" component={ServiceHistory} exact={true} />
        <Route path="/providerdetail" component={ProviderDetail} exact={true} />
        <Route path="/profilecustomer" component={ProfileCustomer} exact={true} />
        <Route path="/earnings" component={Earnings} exact={true} />
        <Route path="/payment" component={Payment} exact={true} />
        <Route path="/otp" component={OTP} exact={true} />
        <Route path="/cleaningservicerequest" component={CleaningServiceRequest} exact={true} />
        <Route path="/editpasswordcustomer" component={EditPasswordCustomer} exact={true} />
        <Route path="/forgotpassword" component={ForgotPassword} exact={true} />
        <Route path="/help" component={Help} exact={true} />
        <Route path="/availableproviders" component={AvailableProviders} exact={true} />
      </IonRouterOutlet>
    </IonApp>
  )
}

const Onboarding = (props : any) => {
  return(
    <> 
      <IonRouterOutlet>
        <Route name="/login" component={Login} exact={true}  />
        <Route path="/signup" component={SignUp} exact={true} />
      </IonRouterOutlet>
    </>
  )
}

const App = (appToken: any, userInfo: any) => {
  return(
    <IonApp>
      <IonReactRouter>
        <Route path="/" render={
            props => {
              return appToken.appToken ? <MainRoute  /> : <Onboarding />
            }
          }  />
      </IonReactRouter>
    </IonApp>

  )
}

export default App;
