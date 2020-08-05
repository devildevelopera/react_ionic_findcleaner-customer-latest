import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  // IonFab,
  // IonFabButton,
  IonRouterLink,
} from "@ionic/react";
import { Plugins } from '@capacitor/core'
// import ExploreContainer from "../../components/ExploreContainer";
import "./HomeCustomer.css";
import iconmenu from "../../image/icon-menu.png";
import banner from "../../image/banner.jpg";
import iconcons from "../../image/icon-cons.png";
import iconevent from "../../image/icon-event.png";
import iconfumi from "../../image/icon-fumi.png";
import iconindu from "../../image/icon-indu.png";
import iconoffice from "../../image/icon-office.png";
import iconresi from "../../image/icon-resi.png"; 
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { allServicesRequest, allServicesCleanup } from "../../store/action/allServices";
import { stat } from "fs";
// import iconadd from "../../image/icon-add.png";

const HomeCustomer: React.FC = () => {
  let history = useHistory()
  const dispatch = useDispatch()
  const [ allService, setAllService ] = useState<any>()
  const allServices = useSelector( (stat : any) => stat.allServices)

  useEffect(() => {
    if(allServices.isSuccessful){
      setAllService(allServices)
      console.log(allServices)
    }
  }, [allServices.isSuccessful])

  return (
    <IonPage className="container menu-animated">
      <IonHeader className="ion-no-border bg">
        <IonToolbar color="gray">
          <IonButtons slot="start">
            <IonMenuButton className="shadow" auto-hide="false">
              <IonImg className="iconButton" src={iconmenu} />
            </IonMenuButton>
          </IonButtons>

          <IonTitle className="ion-text-center title">FindCleaner</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={banner} />
        <IonGrid className="wrapper">
          
            <IonRow className="listTab">
              {
                allServices && allServices.result.map((service: any, i : string) => (
                  <IonCol size="6" key={i}>
                    <IonRouterLink className="itemHome" color="link" onClick={() => history.push('/cleaningservicerequest', { service })}>
                      <IonImg className="sizeImg" src={service.avatar} />
                      <p>{ service.service }</p>
                    </IonRouterLink>
                  </IonCol>
                ))
              }
              
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default HomeCustomer;
