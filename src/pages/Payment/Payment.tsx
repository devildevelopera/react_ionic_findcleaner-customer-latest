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
  IonSlides,
  IonSlide,
} from "@ionic/react";

import "./Payment.css";
import iconmenu2 from "../../image/icon-menu-nobg.png";
import banner2 from "../../image/banner2.jpg";
import iconVisa from "../../image/icon-visa.png";
import iconProfile from "../../image/avata.png";
import { useDispatch, useSelector } from "react-redux";
import { billingCardsRequest, billingCardsCleanUp } from "../../store/action/billingCards";

const Payment: React.FC = () => {
  const dispatch = useDispatch()
  const cardLoaded = useSelector((stat: any) => stat.billingCards)
  const status = useSelector((stat: any) => stat.login)
  
  useEffect(() => {
    if(status.user.id !== undefined) {
      dispatch(billingCardsRequest())
    }
  }, [ status.user.id])


  useEffect(() => {
    if(cardLoaded.isSuccessful) {
      dispatch(billingCardsCleanUp())
    }
  }, [ cardLoaded.isSuccessful])
  
  const slideOpts = {
    initialSlide: 2,
    speed: 400,
  };

  return (
    <IonPage className="input menu-animated">
      <IonHeader className="ion-no-border bg">
        <IonToolbar color="blue">
          <IonButtons slot="start">
            <IonMenuButton className="shadow" auto-hide="false">
              <IonImg src={iconmenu2} />
            </IonMenuButton>
          </IonButtons>

          <IonTitle className="ion-text-center title-white">Payment</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={banner2} />

        <IonList className="service__list">
          <IonRouterLink>
            {/*  href="/providerdetail" */}
            <IonList className="service__item">
              <IonImg className="service__img imgAvata " src={iconProfile} />
              <IonList className="service__info">
                <IonList className="service__info-list">
                  <IonText className="service__name">Mira SK</IonText>
                </IonList>
                <IonList>
                  {/* className="service__date" */}
                  <IonText className="service__date noItalic">
                    infodymira@gmail.com
                  </IonText>
                </IonList>
              </IonList>
              <IonText className="service__price">₦ 600.00</IonText>
            </IonList>
          </IonRouterLink>
          <IonText className="linkedCard">
            Linked Cards ( 2 of 3 added )
          </IonText>
        </IonList>

        <IonSlides className="sli" pager={true} options={slideOpts}>
          <IonSlide className="slidersNew">
            <IonList className="slider__item">
              <IonList className="slider__smallitem">
                <IonText className="card__title">My Personal Card</IonText>
                <IonImg src={iconVisa} />
              </IonList>
              <IonList className="slider__smallitem silder__column">
                <IonList className="slider__smallitem">
                  <IonText className="card__titlesmall">Number of card</IonText>
                  <IonText className="card__titlesmall">Exp</IonText>
                </IonList>
                <IonList className="slider__smallitem">
                  <IonText className="card__text">
                    xxxx - xxxx - xxxx - 3762
                  </IonText>
                  <IonText className="card__text">10 / 27</IonText>
                </IonList>
              </IonList>
              <IonList className="slider__smallitem silder__column">
                <IonList className="slider__smallitem">
                  <IonText className="card__titlesmall">Name of holder</IonText>
                  <IonText className="card__titlesmall">CVV / CVC</IonText>
                </IonList>
                <IonList className="slider__smallitem">
                  <IonText className="card__text">Mira SK</IonText>
                  <IonText className="card__text">728</IonText>
                </IonList>
              </IonList>
            </IonList>
          </IonSlide>
          <IonSlide className="slidersNew">
            <IonList className="slider__item">
              <IonList className="slider__smallitem">
                <IonText className="card__title">My Personal Card</IonText>
                <IonImg src={iconVisa} />
              </IonList>
              <IonList className="slider__smallitem silder__column">
                <IonList className="slider__smallitem">
                  <IonText className="card__titlesmall">Number of card</IonText>
                  <IonText className="card__titlesmall">Exp</IonText>
                </IonList>
                <IonList className="slider__smallitem">
                  <IonText className="card__text">
                    xxxx - xxxx - xxxx - 3762
                  </IonText>
                  <IonText className="card__text">10 / 27</IonText>
                </IonList>
              </IonList>
              <IonList className="slider__smallitem silder__column">
                <IonList className="slider__smallitem">
                  <IonText className="card__titlesmall">Name of holder</IonText>
                  <IonText className="card__titlesmall">CVV / CVC</IonText>
                </IonList>
                <IonList className="slider__smallitem">
                  <IonText className="card__text">Mira SK</IonText>
                  <IonText className="card__text">728</IonText>
                </IonList>
              </IonList>
            </IonList>
          </IonSlide>
          <IonSlide className="slidersNew">
            <IonList className="slider__item">
              <IonList className="slider__smallitem">
                <IonText className="card__title">My Personal Card</IonText>
                <IonImg src={iconVisa} />
              </IonList>
              <IonList className="slider__smallitem silder__column">
                <IonList className="slider__smallitem">
                  <IonText className="card__titlesmall">Number of card</IonText>
                  <IonText className="card__titlesmall">Exp</IonText>
                </IonList>
                <IonList className="slider__smallitem">
                  <IonText className="card__text">
                    xxxx - xxxx - xxxx - 3762
                  </IonText>
                  <IonText className="card__text">10 / 27</IonText>
                </IonList>
              </IonList>
              <IonList className="slider__smallitem silder__column">
                <IonList className="slider__smallitem">
                  <IonText className="card__titlesmall">Name of holder</IonText>
                  <IonText className="card__titlesmall">CVV / CVC</IonText>
                </IonList>
                <IonList className="slider__smallitem">
                  <IonText className="card__text">Mira SK</IonText>
                  <IonText className="card__text">728</IonText>
                </IonList>
              </IonList>
            </IonList>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Payment;
