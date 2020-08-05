import React from "react";

import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonImg,
  IonList,
} from "@ionic/react";

import "./Summary.css";
import iconmenu2 from "../../image/icon-menu-nobg.png";
import banner2 from "../../image/banner2.jpg";
import iconTotal from "../../image/icon-total.png";
import iconRevenue from "../../image/icon-revenue.png";
import iconSche from "../../image/icon-sche.png";
import iconCalcel from "../../image/icon-cancel.png";

const Summary: React.FC = () => {
  return (
    <IonPage className="input menu-animated">
      <IonHeader className="ion-no-border bg">
        <IonToolbar color="blue">
          <IonButtons slot="start">
            <IonMenuButton className="shadow" auto-hide="false">
              <IonImg src={iconmenu2} />
            </IonMenuButton>
          </IonButtons>

          <IonTitle className="ion-text-center title-white">Summary</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={banner2} />

        <IonList className="summary__list">
          <IonList className="summary__item">
            <IonImg className="summary__img" src={iconTotal} />
            <p>
              Total no of service : <span>123</span>
            </p>
          </IonList>
          <IonList className="summary__item">
            <IonImg className="summary__img" src={iconRevenue} />
            <p>
              Revenue : <span>113</span>
            </p>
          </IonList>
          <IonList className="summary__item">
            <IonImg className="summary__img" src={iconSche} />
            <p>
              Schedule Service : <span>15</span>
            </p>
          </IonList>
          <IonList className="summary__item">
            <IonImg className="summary__img" src={iconCalcel} />
            <p>
              Cancelled Service : <span>160</span>
            </p>
          </IonList>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Summary;
