import React, { useEffect } from "react";

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
  IonText,
  IonRouterLink,
} from "@ionic/react";

import "./ServiceHistory.css";
import iconmenu2 from "../../image/icon-menu-nobg.png";
import banner2 from "../../image/banner2.jpg";
import iconStar from "../../image/icon-star.png";
import iconProfile from "../../image/avata.png";
import { useDispatch, useSelector } from "react-redux";
import { serviceHistoryRequest, serviceHistoryCleanup } from "../../store/action/serviceHistory";

const ServiceHistory: React.FC = props => {
  const dispatch = useDispatch()
  const status = useSelector((stat: any) => stat.login)
  const serviceData = useSelector((stat: any) => stat.serviceHistory)

  useEffect(() => {
    if(status.user.id !== undefined) {
       dispatch(serviceHistoryRequest(status.user.id))
    }
  }, [status.user.id])

  useEffect(() => {
    if(serviceData.isSuccessful) {
      console.log(serviceData)
    }
  }, [serviceData.isSuccessful])


  return (
    <IonPage className="input menu-animated">

      <IonHeader className="ion-no-border bg">
        <IonToolbar color="blue">
          <IonButtons slot="start">
            <IonMenuButton className="shadow" auto-hide="false">
              <IonImg src={iconmenu2} />
            </IonMenuButton>
          </IonButtons>

          <IonTitle className="ion-text-center title-white">
            Service History
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonImg src={banner2} />
        <IonList className="service__list">
        
          <IonRouterLink href="/providerdetail">
            <IonList className="service__item">
              <IonImg className="service__img imgAvata " src={iconProfile} />
              <IonList className="service__info">
                <IonList className="service__info-list">
                  <IonText className="service__name">Ahmed Ali</IonText>
                  <IonImg className="service__icon" src={iconStar} />
                  <IonText className="service__rate">5.0</IonText>
                </IonList>
                <IonList>
                  <IonText className="service__date">
                    Friday, 20-12-2018
                  </IonText>
                </IonList>
                <IonList className="service__request request--completed">
                  Completed
                </IonList>
              </IonList>
              <IonText className="service__price">₦ 300.00</IonText>
            </IonList>
          </IonRouterLink>
        
          <IonRouterLink href="/providerdetail">
            <IonList className="service__item">
              <IonImg className="service__img imgAvata " src={iconProfile} />
              <IonList className="service__info">
              
                <IonList className="service__info-list">
                  <IonText className="service__name">Ahmed Ali</IonText>
                    <IonImg className="service__icon" src={iconStar} />
                  <IonText className="service__rate">5.0</IonText>
                </IonList>
              
                <IonList>
                  <IonText className="service__date">
                    Friday, 20-12-2018
                  </IonText>
                </IonList>
              
                <IonList className="service__request request--completed">
                  Completed
                </IonList>
              
              </IonList>
              
              <IonText className="service__price">₦ 300.00</IonText>
            </IonList>
          </IonRouterLink>
        
          <IonRouterLink href="/providerdetail">
            <IonList className="service__item">
              <IonImg className="service__img imgAvata " src={iconProfile} />
              <IonList className="service__info">
                <IonList className="service__info-list">
                  <IonText className="service__name">Ahmed Ali</IonText>
                  <IonImg className="service__icon" src={iconStar} />
                  <IonText className="service__rate">5.0</IonText>
                </IonList>
                <IonList>
                  <IonText className="service__date">
                    Friday, 20-12-2018
                  </IonText>
                </IonList>
                <IonList className="service__request request--completed">
                  Completed
                </IonList>
              </IonList>
              <IonText className="service__price">₦ 300.00</IonText>
            </IonList>
          </IonRouterLink>
        
        </IonList>
      </IonContent>

    </IonPage>
  );
};

export default ServiceHistory;
