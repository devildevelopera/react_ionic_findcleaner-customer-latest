import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  IonContent,
  IonPage,
  IonInput,
  IonItem,
  IonList,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonImg,
  IonLabel,
  IonFooter,
  IonSelect,
  IonSelectOption,
  IonText,
  IonDatetime,
  IonRadio,
  IonRadioGroup,
  IonTextarea,
} from "@ionic/react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';
// import ExploreContainer from "../../components/ExploreContainer";
import "./CleaningServiceRequest.css";
import iconclose from "../../image/icon-close.png";
import iconDrop from "../../image/icon-drop.png";
import iconCheck from "../../image/icon-check.png";
import iconCash from "../../image/icon-cash.png";
import iconCard from "../../image/icon-card.png";
import iconCalendar from "../../image/icon-calendar.png";
import { environment } from "../../store/utility/enviroment";
import { useDispatch, useSelector } from "react-redux";
import { serviceRequest } from "../../store/action/serviceRequest";
import { Formik } from "formik";

const CleaningServiceRequest = () => {
  let history = useHistory<any>()
  const dispatch = useDispatch()
  const serviceStore = useSelector((stat : any) => stat)
  const [ servicePad , setServicePad ] = useState<any>();

  useEffect(() => {
    
    if(history.location.state !== undefined) {
      const { service } = history.location.state
      setServicePad(service)
    }
   
  }, [])  


  return (
    <IonPage className="container">
      <IonHeader className="ion-no-border bg">
        <IonToolbar color="blue">
          <IonList color="blue" className="addService__width">
            <IonButtons slot="end">
              <Link to="/homecustomer">
                <IonImg src={iconclose} />
              </Link>
            </IonButtons>

            <IonTitle className="ion-text-left title-white">
              Cleaning Service Request
            </IonTitle>
          </IonList>
        </IonToolbar>
      </IonHeader>
      
      <Formik
      
        initialValues={{
          address: {},
          service_required_on: '',
          no_of_toilets: '',
          no_of_spaces: '',
          cleaners: '',
          no_of_pets: '',
          cleaning_products: '',
          cleaning_equipment: '',
          requirement_description: '',
          payment_mode: '',
          lat: '',
          lng: '',
        }}
        onSubmit={
          async (values, { setSubmitting }) => {
            const cleanServiceData = {
              address: values.address,
              service_required_on: values.service_required_on,
              no_of_toilets: values.no_of_toilets,
              no_of_spaces: values.no_of_spaces,
              cleaners: values.cleaners,
              no_of_pets: values.no_of_pets,
              cleaning_products: values.cleaning_products,
              cleaning_equipment: values.cleaning_equipment,
              requirement_description: values.requirement_description,
              payment_mode: values.payment_mode,
              lat: values.lat,
              lng: values.lng,
              service: servicePad
            }

            dispatch(serviceRequest(cleanServiceData))
            history.push('/availableproviders', cleanServiceData)
          }
        }
      >
        {
          ({ 
            setFieldValue,
            values,
            submitForm,
          }) => (
            <>
              <IonContent class="scroll-content">
                <IonList className="addService__list">
                  <IonList>
                    <IonText className="cleaning__title">Where?</IonText>

                    <GooglePlacesAutocomplete
                        placeholder="Type location"
                        apiKey={environment.googleMapApiKey}
                        autocompletionRequest={{
                          componentRestrictions: {
                            country: ['ng'],
                          }
                        }}
                        
                        renderSuggestions={(active, suggestions, onSelectSuggestion) => (
                          <div className="suggestions-container">
                            {
                              suggestions.map((suggestion, i) => (
                                <IonItem key={i} className="suggestion"
                                  onClick={(event) => onSelectSuggestion(suggestion, event)}
                                >
                                  {suggestion.description}
                                </IonItem>
                              ))
                            }
                          </div>
                        )}
                        
                        onSelect={(e) =>  
                          {
                            setFieldValue('address', e)
                            geocodeByPlaceId(e.place_id).then(results => getLatLng(results[0]))
                              .then(({ lat, lng }) =>{
                                setFieldValue('lat', lat);
                                setFieldValue('lng', lng)
                              }
                            )
                          } 
                        }
                        
                        />
                    {/* <IonItem
                      className="addService__item cleaning__margintop"
                      lines="none"
                      id="rounded"
                    >
                      <IonSelect
                        color="input"
                        className="ion-padding-end noFlat"
                        multiple={false}
                        value={country}
                        onIonChange={(e) => {
                          setCountry(e.detail.value)
                          console.log(e)
                        }}
                      >
                        <IonSelectOption color="input" value="Egypt">
                          Egypt
                        </IonSelectOption>
                        <IonSelectOption color="input" value="service2">
                          Service 2
                        </IonSelectOption>
                        <IonSelectOption color="input" value="service3">
                          Service 3
                        </IonSelectOption>
                        <IonSelectOption color="input" value="service4">
                          Service 4
                        </IonSelectOption>
                      </IonSelect>
                      <IonImg className="icon__input-right" src={iconDrop} />

                    </IonItem> */}
                    
                  </IonList>
                    
                  <IonList>
                    <IonText className="cleaning__title">When?</IonText>
                    <IonItem
                      className="addService__item cleaning__margintop"
                      lines="none"
                    >
                      <IonDatetime
                        color="input"
                        displayFormat="DD - MM - YYYY"
                        placeholder="Select Date"
                        value={values.service_required_on}
                        onIonChange={(e) => setFieldValue('service_required_on',e.detail.value!)}
                      ></IonDatetime>

                      <IonImg
                        className="icon__input-right iconCalendar"
                        src={iconCalendar}
                      />
                    </IonItem>
                  </IonList>
                  <IonList>
                    <IonText className="cleaning__title">
                      How many bathrooms / toilet?
                    </IonText>
                    <IonRadioGroup value={values.no_of_toilets} onIonChange={e => setFieldValue('no_of_toilets',e.detail.value)}>
                      <IonItem>
                        <IonLabel>1 Toilet</IonLabel>
                        <IonRadio slot="start" value="1 toilet" />
                      </IonItem>

                      <IonItem>
                        <IonLabel>2 Toilet</IonLabel>
                        <IonRadio slot="start" value="2 toilet" />
                      </IonItem>

                      <IonItem>
                        <IonLabel>3 Toilet</IonLabel>
                        <IonRadio slot="start" value="3 toilet" />
                      </IonItem>
                      <IonItem>
                        <IonLabel>4 Toilet</IonLabel>
                        <IonRadio slot="start" value="4 toilet" />
                      </IonItem>
                      <IonItem>
                        <IonLabel>5 Toilet</IonLabel>
                        <IonRadio slot="start" value="5 toilet" />
                      </IonItem>
                    </IonRadioGroup>
                    {/* Radio group */}
                    {/* <IonRadioGroup
                      value={bathromsSelected}
                      onIonChange={(e) => {
                        setbathromsSelected(e.detail.value)
                        console.log(e)
                      }}
                    >
                      <IonList className="listRadio">

                        <IonItem lines="none" className="ion-no-padding ion-no-margin noPad" >
                          <IonRadio
                            className="styleRadio"
                            slot="start"
                            value="1 Toilet"
                          />
                          
                          <IonImg className="iconRadio showIcon" src={iconCheck} />

                          <IonList className="listRadio__item checkList">
                            <IonLabel className="flexLabelCleaning">
                              <IonLabel className="blueNum">1</IonLabel>Toilet
                            </IonLabel>
                          </IonList>
                        </IonItem>


                        <IonItem
                          lines="none"
                          className="ion-no-padding ion-no-margin noPad"
                          >
                          <IonRadio
                            className="styleRadio"
                            slot="start"
                            value="2 Toilet"
                          />
                          <IonImg className="iconRadio" src={iconCheck} />
                          <IonList className="listRadio__item">
                            <IonLabel className="flexLabelCleaning">
                              2 <IonLabel>Toilet</IonLabel>
                            </IonLabel>
                          </IonList>
                        </IonItem>

                        <IonItem
                          lines="none"
                          className="ion-no-padding ion-no-margin noPad" >
                          <IonRadio
                            className="styleRadio"
                            slot="start"
                            value="3 Toilet"
                          />
                          <IonImg className="iconRadio" src={iconCheck} />
                          <IonList className="listRadio__item">
                            <IonLabel className="flexLabelCleaning">
                              3 <IonLabel>Toilet</IonLabel>
                            </IonLabel>
                          </IonList>
                        </IonItem>

                        <IonItem
                          lines="none"
                          className="ion-no-padding ion-no-margin noPad" >
                          <IonRadio
                            className="styleRadio"
                            slot="start"
                            value="4 Toilet"
                          />
                          <IonImg className="iconRadio" src={iconCheck} />
                          <IonList className="listRadio__item">
                            <IonLabel className="flexLabelCleaning">
                              5 <IonLabel>Toilet</IonLabel>
                            </IonLabel>
                          </IonList>
                        </IonItem>

                      </IonList>
                    </IonRadioGroup> */}

                    {/* End Radio group */}
                  </IonList>
                  <IonList>
                    <IonText className="cleaning__title">How many open spaces?</IonText>
                    <IonItem
                      className="addService__item cleaning__margintop"
                      lines="none"
                      id="rounded"
                    >
                      <IonInput
                        placeholder="Enter Space"
                        color="input"
                        value={values.no_of_spaces}
                        onIonChange={e => setFieldValue('no_of_spaces',e.detail.value!)}
                        className="ion-padding-end"
                      ></IonInput>
                    </IonItem>
                  </IonList>
                  <IonList>
                    <IonText className="cleaning__title">
                      How many cleaners needed?
                    </IonText>
                    <IonRadioGroup value={values.cleaners} onIonChange={e => setFieldValue('cleaners',e.detail.value)}>
                      <IonItem>
                        <IonLabel>3 Cleaners</IonLabel>
                        <IonRadio slot="start" value="3 cleaners" />
                      </IonItem>

                      <IonItem>
                        <IonLabel>5 Cleaners</IonLabel>
                        <IonRadio slot="start" value="5 cleaners" />
                      </IonItem>

                      <IonItem>
                        <IonLabel>7 Cleaners</IonLabel>
                        <IonRadio slot="start" value="7 cleaners" />
                      </IonItem>
                      <IonItem>
                        <IonLabel>9 Cleaners</IonLabel>
                        <IonRadio slot="start" value="9 cleaners" />
                      </IonItem>
                    </IonRadioGroup>
                    {/* <IonRadioGroup
                      value={cleaners}
                      onIonChange={(e) => setCleaners(e.detail.value)}
                    >
                      <IonList className="listRadio">
                        <IonItem
                          lines="none"
                          className="ion-no-padding ion-no-margin noPad"
                        >
                          <IonRadio
                            className="styleRadio"
                            slot="start"
                            value="3 Cleaners"
                          />
                          <IonImg className="iconRadio showIcon" src={iconCheck} />
                          <IonList className="listRadio__item checkList">
                            <IonLabel className="flexLabelCleaning">
                              <IonLabel className="blueNum">3</IonLabel>Cleaners
                            </IonLabel>
                          </IonList>
                        </IonItem>
                        <IonItem
                          lines="none"
                          className="ion-no-padding ion-no-margin noPad"
                        >
                          <IonRadio
                            className="styleRadio"
                            slot="start"
                            value="5 Cleaners"
                          />
                          <IonImg className="iconRadio" src={iconCheck} />
                          <IonList className="listRadio__item">
                            <IonLabel className="flexLabelCleaning">
                              5 <IonLabel>Cleaners</IonLabel>
                            </IonLabel>
                          </IonList>
                        </IonItem>
                        <IonItem
                          lines="none"
                          className="ion-no-padding ion-no-margin noPad"
                        >
                          <IonRadio
                            className="styleRadio"
                            slot="start"
                            value="7 Cleaners"
                          />
                          <IonImg className="iconRadio" src={iconCheck} />
                          <IonList className="listRadio__item">
                            <IonLabel className="flexLabelCleaning">
                              7 <IonLabel>Cleaners</IonLabel>
                            </IonLabel>
                          </IonList>
                        </IonItem>
                        <IonItem
                          lines="none"
                          className="ion-no-padding ion-no-margin noPad"
                        >
                          <IonRadio
                            className="styleRadio"
                            slot="start"
                            value="9 Cleaners"
                          />
                          <IonImg className="iconRadio" src={iconCheck} />
                          <IonList className="listRadio__item">
                            <IonLabel className="flexLabelCleaning">
                              9 <IonLabel>Cleaners</IonLabel>
                            </IonLabel>
                          </IonList>
                        </IonItem>
                      </IonList>
                    
                    </IonRadioGroup>
                  */}
                  </IonList>

                  <IonList>
                    <IonText className="cleaning__title">Do you have pets?</IonText>
                    <IonRadioGroup
                      value={values.no_of_pets}
                      onIonChange={(e) => setFieldValue('no_of_pets', e.detail.value)}
                    >
                      <IonList className="yesNo">
                        <IonItem lines="none">
                          <IonRadio slot="start" value="yes" />
                          <IonLabel className="ion-padding-horizontal">Yes</IonLabel>
                        </IonItem>

                        <IonItem lines="none">
                          <IonRadio slot="start" value="no" />
                          <IonLabel className="ion-padding-horizontal">No</IonLabel>
                        </IonItem>
                      </IonList>
                    </IonRadioGroup>
                  </IonList>
                  <IonList>
                    <IonText className="cleaning__title">Cleaning Products?</IonText>
                    <IonRadioGroup
                      value={values.cleaning_products}
                      onIonChange={(e) => setFieldValue( 'cleaning_products', e.detail.value)}
                    >
                      <IonList className="yesNo">
                        <IonItem lines="none">
                          <IonRadio slot="start" value="yes" />
                          <IonLabel className="ion-padding-horizontal">Yes</IonLabel>
                        </IonItem>

                        <IonItem lines="none">
                          <IonRadio slot="start" value="no" />
                          <IonLabel className="ion-padding-horizontal">No</IonLabel>
                        </IonItem>
                      </IonList>
                    </IonRadioGroup>
                  </IonList>
                  <IonList>
                    <IonText className="cleaning__title">Clearing Equipment?</IonText>
                    <IonRadioGroup
                      value={values.cleaning_equipment}
                      onIonChange={(e) => setFieldValue( 'cleaning_equipment', e.detail.value)}
                    >
                      <IonList className="yesNo">
                        <IonItem lines="none">
                          <IonRadio slot="start" value="yes" />
                          <IonLabel className="ion-padding-horizontal">Yes</IonLabel>
                        </IonItem>

                        <IonItem lines="none">
                          <IonRadio slot="start" value="no" />
                          <IonLabel className="ion-padding-horizontal">No</IonLabel>
                        </IonItem>
                      </IonList>
                    </IonRadioGroup>
                  </IonList>
                  <IonList>
                    <IonText className="cleaning__title">
                      Any extra requirements ?
                    </IonText>
                    <IonItem
                      className="addService__item cleaning__margintop"
                      lines="none"
                    >
                      {/* <IonLabel color="label" position="floating">
                        Description
                      </IonLabel> */}
                      <IonTextarea
                        color="input"
                        value={values.requirement_description}
                        onIonChange={e => setFieldValue( 'requirement_description', e.detail.value )}
                        className="height"
                      ></IonTextarea>
                    </IonItem>
                  </IonList>
                  <IonList>
                    {/* <IonRadioGroup
                      value={pay}
                      onIonChange={(e) => setPay(e.detail.value)}
                    >
                      <IonList className="listRadio">
                        <IonItem
                          lines="none"
                          className="ion-no-padding ion-no-margin noPad"
                        >
                          <IonRadio className="styleRadio" slot="start" value="card" />
                          <IonImg className="iconRadio" src={iconCheck} />

                          <IonList className="listRadio__item checkList cleaning__card">
                            <IonLabel className="flexLabelCleaning ion-padding-end">
                              CARD
                            </IonLabel>
                            <IonImg src={iconCard} className="blueNum" />
                          </IonList>
                        </IonItem>
                        <IonItem
                          lines="none"
                          className="ion-no-padding ion-no-margin noPad"
                        >
                          <IonRadio className="styleRadio" slot="start" value="cash" />
                          <IonImg className="iconRadio" src={iconCheck} />
                          <IonList className="listRadio__item cleaning__card">
                            <IonLabel className="flexLabelCleaning ion-padding-end">
                              CASH
                            </IonLabel>
                            <IonImg src={iconCash} className="blueNum" />
                          </IonList>
                        </IonItem>
                      </IonList>
                    </IonRadioGroup> */}

                  </IonList>
                </IonList>
              </IonContent>
              <IonFooter>
                <IonToolbar>
                  <IonButton
                    onClick={() => submitForm()}
                    size="large"
                    className="btn"
                    expand="full"
                    detail-none
                  >
                    Continue
                  </IonButton>
                </IonToolbar>
              </IonFooter>

            </>
          )
        }
      </Formik>
    </IonPage>
  );
};

export default CleaningServiceRequest;
