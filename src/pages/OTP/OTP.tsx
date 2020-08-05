import React from "react";

import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonImg,
  IonList,
  IonRouterLink,
  IonItem,
  IonInput,
  IonButton,
  IonText,
} from "@ionic/react";

import "./OTP.css";
import banner2 from "../../image/banner2.jpg";
import iconOtp from "../../image/icon-otp.png";
import iconBack from "../../image/icon-arrow-back.png";

const OTP: React.FC = () => {
  return (
    <IonPage className="input menu-animated">
      <IonHeader className="ion-no-border bg">
        <IonToolbar color="blue">
          <IonButtons slot="start">
            <IonRouterLink
              href="/forgotpassword"
              className="shadow"
              auto-hide="false"
            >
              <IonImg className="imgBack" src={iconBack} />
            </IonRouterLink>
          </IonButtons>

          {/* <IonTitle className="ion-text-center title-white">
            Forgot Password
          </IonTitle> */}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={banner2} />

        <IonList className="summary__list flexEarnings">
          <IonList className="service__item relativeEarnings noTop">
            <IonList className="service__info width100Earnings otp">
              <IonImg
                className="service__img imgAvata avataWhite flexAvataSmall iconOtp"
                src={iconOtp}
              />
              <IonList className="service__info-list detailColumn widthFull">
                <IonText className="otp__title">Welcome To FindCleaner</IonText>
                <IonText className="otp__desc">
                  We will send you a{" "}
                  <IonText className="otp__gray">One Time Password</IonText> on
                  your phone number
                </IonText>
                <IonItem className="addService__item" lines="none">
                  <IonInput
                    color="input"
                    type="tel"
                    className="inputProfile"
                    placeholder="Enter Phone Number"
                  ></IonInput>
                </IonItem>
              </IonList>
              <IonButton className="btn widthFull" size="large" expand="block">
                Get OTP
              </IonButton>
            </IonList>
          </IonList>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default OTP;
