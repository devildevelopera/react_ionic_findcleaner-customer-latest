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
  IonText,
  IonRouterLink,
} from "@ionic/react";

import "./Earnings.css";
// import iconmenu2 from "../../image/icon-menu-nobg.png";
import banner2 from "../../image/banner2.jpg";
import iconProfile from "../../image/avata.png";
import iconBack from "../../image/icon-arrow-back.png";

const Earnings: React.FC = () => {
  return (
    <IonPage className="input menu-animated">
      <IonHeader className="ion-no-border bg">
        <IonToolbar color="blue">
          <IonButtons slot="start">
            <IonRouterLink href="/home" className="shadow" auto-hide="false">
              <IonImg className="imgBack" src={iconBack} />
            </IonRouterLink>
          </IonButtons>

          <IonTitle className="ion-text-center title-white">Earnings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={banner2} />

        <IonList className="summary__list flexEarnings">
          <IonImg
            className="service__img imgAvata avataWhite flexAvataSmall"
            src={iconProfile}
          />
          <IonList className="service__item detail relativeEarnings">
            <IonList className="service__info width100Earnings">
              <IonList className="service__info-list detailColumn">
                <IonText className="service__name request__name earning__total">
                  Total Earnings
                </IonText>
                <IonText className="service__name request__name earning__price">
                  ₦ 200.00
                </IonText>
                <IonList className="listReview columnEarnings">
                  <IonList className="earning__list earning__title">
                    <IonText className="width1 displayNone">0</IonText>
                    <IonText className="width3">Time</IonText>
                    <IonText className="width3">Service</IonText>
                    <IonText className="width3">Earnings</IonText>
                  </IonList>

                  <IonList className="earning__list earning__text">
                    <IonText className="width1">1</IonText>
                    <IonText className="width3">22 Feb 2017</IonText>
                    <IonText className="width3">Office Service</IonText>
                    <IonText className="width3" color="blue">
                      ₦ 200.00
                    </IonText>
                  </IonList>
                  <IonList className="earning__list earning__text">
                    <IonText className="width1">2</IonText>
                    <IonText className="width3">22 Feb 2018</IonText>
                    <IonText className="width3">Event Service</IonText>
                    <IonText className="width3" color="blue">
                      ₦ 200.00
                    </IonText>
                  </IonList>
                  <IonList className="earning__list earning__text">
                    <IonText className="width1">3</IonText>
                    <IonText className="width3">22 Feb 2018</IonText>
                    <IonText className="width3">Event Service</IonText>
                    <IonText className="width3" color="blue">
                      ₦ 200.00
                    </IonText>
                  </IonList>
                  <IonList className="earning__list earning__text">
                    <IonText className="width1">4</IonText>
                    <IonText className="width3">22 Feb 2018</IonText>
                    <IonText className="width3">Event Service</IonText>
                    <IonText className="width3" color="blue">
                      ₦ 200.00
                    </IonText>
                  </IonList>
                  <IonList className="earning__list earning__text">
                    <IonText className="width1">5</IonText>
                    <IonText className="width3">22 Feb 2018</IonText>
                    <IonText className="width3">Event Service</IonText>
                    <IonText className="width3" color="blue">
                      ₦ 200.00
                    </IonText>
                  </IonList>
                </IonList>
              </IonList>
            </IonList>
          </IonList>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Earnings;
