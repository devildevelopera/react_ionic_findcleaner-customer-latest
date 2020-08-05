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
} from "@ionic/react";

import "./ForgotPassword.css";
import banner2 from "../../image/banner2.jpg";
import iconProfile from "../../image/avata.png";
import iconBack from "../../image/icon-arrow-back.png";

const ForgotPassword: React.FC = () => {
  return (
    <IonPage className="input menu-animated">
      <IonHeader className="ion-no-border bg">
        <IonToolbar color="blue">
          <IonButtons slot="start">
            <IonRouterLink href="/login" className="shadow" auto-hide="false">
              <IonImg className="imgBack" src={iconBack} />
            </IonRouterLink>
          </IonButtons>

          <IonTitle className="ion-text-center title-white">
            Forgot Password
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={banner2} />

        <IonList className="summary__list flexEarnings">
          <IonImg
            className="service__img imgAvata avataWhite flexAvataSmall"
            src={iconProfile}
          />
          <IonList className="service__item relativeEarnings">
            <IonList className="service__info width100Earnings">
              <IonList className="service__info-list detailColumn">
                <IonItem className="addService__item" lines="none">
                  <IonInput
                    color="input"
                    type="email"
                    className="inputProfile"
                    placeholder="Please Enter Your Email"
                  ></IonInput>
                </IonItem>
              </IonList>
              <IonButton
                className="btn"
                href="/otp"
                size="large"
                expand="block"
              >
                Confirm
              </IonButton>
            </IonList>
          </IonList>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ForgotPassword;
