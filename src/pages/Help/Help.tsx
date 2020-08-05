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
  IonFab,
  IonFabButton,
  IonText,
} from "@ionic/react";

import "./Help.css";
import banner2 from "../../image/banner2.jpg";
import iconProfile from "../../image/avata.png";
import iconBack from "../../image/icon-arrow-back.png";
import iconPhone from "../../image/icon-phone.png";
import iconMail from "../../image/icon-email.png";

const Help: React.FC = () => {
  return (
    <IonPage className="input menu-animated">
      <IonHeader className="ion-no-border bg">
        <IonToolbar color="blue">
          <IonButtons slot="start">
            <IonRouterLink
              href="/homecustomer"
              className="shadow"
              auto-hide="false"
            >
              <IonImg className="imgBack" src={iconBack} />
            </IonRouterLink>
          </IonButtons>

          <IonTitle className="ion-text-center title-white">Help</IonTitle>
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
            <IonList className="service__info width100Earnings help">
              <IonText>How can we serve you better?</IonText>
              <IonList className="service__info-list detailColumn list__icon">
                <IonFabButton color="blue" size="small" className="mgRight">
                  <IonImg className="img-width" src={iconPhone} />
                </IonFabButton>
                <IonFabButton color="blue" size="small">
                  <IonImg className="img-width" src={iconMail} />
                </IonFabButton>
              </IonList>
              {/* <IonButton className="btn" size="large" expand="block">
                Confirm
              </IonButton> */}
            </IonList>
          </IonList>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Help;
