import React, { useEffect, useState } from "react";

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
import Moment from 'react-moment';
import "./AvailableProviders.css";
import iconBack from "../../image/icon-arrow-back.png";
import banner2 from "../../image/banner2.jpg";
import iconStar from "../../image/icon-star.png";
import iconProfile from "../../image/avata.png";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { providersRequest, providersCleanup } from "../../store/action/providers";
import { providers } from "../../store/initialState";

const AvailableProviders: React.FC = (props: any) => {
  let history = useHistory<any>();
  const dispatch = useDispatch()
  const [dateNeeded, setDateNeeded ] = useState<any>()
  const stores = useSelector((stat: any) => stat)
  const [ servicePrvd , setServicePrvd ] = useState<any>()
  const allProviders = useSelector((stat: any) => stat.providers.providers)

  useEffect(() => {
    const { service, lat, lng, address } = history.location.state;
    if(service && lat && lng && address ) {

      const requestData = {
        service_id: service.service.id,
        lat: lat,
        lng: lng
      }

      dispatch(providersRequest(requestData))

    }

  }, [])

  useEffect(() => {
    const { service, coords, address, service_required_on } = history.location.state;
    
    if(service) {
      
      setDateNeeded(service.service_required_on)
      const providers = allProviders.filter( (provider : any) => provider.service === service.id)
      setServicePrvd(providers)

    }

    if(allProviders.isSuccessful) {
      dispatch(providersCleanup())
    }
    
  }, [allProviders])
  

  return (
    <IonPage className="input menu-animated">
      <IonHeader className="ion-no-border bg">
        <IonToolbar color="blue">
          <IonButtons slot="start">
            <IonRouterLink
              href="/cleaningservicerequest"
              className="shadow"
              auto-hide="false"
            >
              <IonImg className="imgBack" src={iconBack} />
            </IonRouterLink>
          </IonButtons>

          <IonTitle className="ion-text-center title-white">
            Available Providers
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={banner2} />

        <IonList className="service__list">
          {
            allProviders && servicePrvd ? servicePrvd.map((providerPad: any, i : string) => (
              <IonRouterLink key={i} onClick={() => history.push('/providerdetail',{ providerPad } )}>
                <IonList className="service__item">
                  <IonImg className="service__img imgAvata " src={iconProfile} />
                  <IonList className="service__info">
                    <IonList className="service__info-list">
                      <IonText className="service__name">{ providerPad.name }</IonText>
                    </IonList>
                    <IonList>
                      <IonText className="service__date">
                        <Moment format="dddd, DD-MM-YYYY">{ dateNeeded }</Moment>
                      </IonText>
                    </IonList>
                    <IonList className="service__request request--completed">
                      Available
                    </IonList>
                  </IonList>
                  <IonText className="service__price">₦ { Math.floor(providerPad.billing_rate).toFixed(2) }</IonText>
                </IonList>
              </IonRouterLink>
            )
            )  
            : ''
          }

        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AvailableProviders;
