import React, { useEffect, useState } from "react";
import { Redirect, Route, RouteComponentProps, useHistory } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonContent,
  IonToolbar,
  IonList,
  IonItem,
  IonImg,
  IonRouterLink,
  IonText,
  IonButton,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
// import { Link } from "react-router-dom";
import HomeCustomer from "./pages/HomeCustomer/HomeCustomer";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

import NewService from "./pages/NewService/NewService";
import Summary from "./pages/Summary/Summary";
import ServiceHistory from "./pages/ServiceHistory/ServiceHistory";
import ProviderDetail from "./pages/ProviderDetail/ProviderDetail";
import ProfileCustomer from "./pages/ProfileCustomer/ProfileCustomer";
import Earnings from "./pages/Earnings/Earnings";
import EditPasswordCustomer from "./pages/EditPasswordCustomer/EditPasswordCustomer";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import AvailableProviders from "./pages/AvailableProviders/AvailableProviders";
import Help from "./pages/Help/Help";
import CleaningServiceRequest from "./pages/CleaningServiceRequest/CleaningServiceRequest";
import Payment from "./pages/Payment/Payment";
import OTP from "./pages/OTP/OTP";
// import Page from "./pages/Page";
// import Menu from "./components/Menu";

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

import { Plugins } from '@capacitor/core'
import { useDispatch, useSelector } from "react-redux";

const { Storage } = Plugins;

const App = (appToken: any ) => {
  const dispatch = useDispatch()
  const [ userData , setUserData ] = useState<any>()
  const status = useSelector((stat: any) => stat.login)

  useEffect(() => {
    if(status.user.id) {
      setUserData(status.user)
    }
  }, [status.user.id])
  
  return(
    <IonApp>
      <IonMenu contentId="content1" side="start">
        <IonHeader className="ion-padding-horizontal ion-padding-vertical">
          <IonToolbar>
            <IonList className="listTitle">
              <IonImg className="imgAvata" src={iconAvata} />
              <IonList className="titleMenu">
                <IonText color="blue">{ userData && userData.first_name } { userData && userData.last_name }</IonText>
                <IonText className="email">{ userData && userData.email }</IonText>
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
                    onClick={(e) => { Storage.clear(); }}
                  > Logout </IonButton>
                </p>
              </IonItem>
            </IonRouterLink>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="content1"></IonRouterOutlet>
      {/* Routes */}
      <IonReactRouter>
        <Route path="/homecustomer" component={HomeCustomer} exact={true} />
        <Route exact path="/" render={() => true ? <Redirect to="/login" /> : '' } />
        <Route path="/login" component={Login} exact={true} />
        <Route path="/signup" component={SignUp} exact={true} />
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
      </IonReactRouter>
    </IonApp>
  )
}

export default App;
