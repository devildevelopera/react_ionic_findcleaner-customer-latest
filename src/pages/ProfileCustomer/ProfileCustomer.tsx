import React, { useEffect } from "react";
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
  IonButton,
  IonFab,
  IonFabButton,
  IonItem,
  IonLabel,
  IonInput,
  IonFooter,
  IonAvatar,
} from "@ionic/react";
import { Formik } from 'formik'
import * as Yup from 'yup'
import "./ProfileCustomer.css";
import banner2 from "../../image/banner2.jpg";
import iconEdit from "../../image/icon-edit.png";
import iconProfile from "../../image/avata.png";
import iconBack from "../../image/icon-arrow-back.png";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { profileUpdateRequest } from "../../store/action/profileUpdate";



const validateUpdate = Yup.object().shape({
  first_name: Yup.string().min(2, 'First name is too short'),
  last_name: Yup.string().min(2, 'Last name is too Short')
})
const ProfileCustomer: React.FC = (props: any) => {
  let history  = useHistory()
  const dispatch = useDispatch()
  const status = useSelector((stat: any) => stat.login)

  const getImage = () => {
    console.log(status.user)
  }

  useEffect(() => {
    if(status.token === null) {
      history.push('/login')
    }
  })

  return (
    <IonPage className="container">
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
          <IonTitle className="ion-text-center title-white">Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={banner2} />
        <Formik
          enableReinitialize
          initialValues={{
            avatar: status.user.avatar_url,
            first_name: status.user.first_name,
            last_name: status.user.last_name,
            email: status.user.email,
            phone_number: status.user.phone_number
          }}
          validationSchema={validateUpdate}
          onSubmit={
            (values, { setSubmitting }) => {
              
              const payloadObj = {
                first_name: values.first_name,
                last_name: values.last_name,
                phone_number: values.phone_number
              }

              console.log(payloadObj)
              
              dispatch(profileUpdateRequest(payloadObj, status && status.user.id))
              setSubmitting(false) 
            }
          }
        >
          {
            ({ 
              handleBlur, 
              submitForm, 
              values, 
              setFieldValue,
              isSubmitting
            }) => (
                <IonList className="service__list">
                  <IonList className="service__item detail noborderProfile">
                    <IonImg
                      className="service__img imgAvata avataWhite noMarginProfile"
                      src={iconProfile}
                    />
                      <IonAvatar>
                        <img src={ status && status.user.avatar_url}/>
                      </IonAvatar>
                      <IonFab
                        vertical="top"
                        horizontal="end"
                        slot="fixed"
                        className="btnEdit"
                      >
                        
                      <IonFabButton 
                        onClick={() => getImage()}
                        size="small" className="colorWhite">
                        <IonImg className="iconEdit" src={iconEdit} />
                      </IonFabButton>
                    </IonFab>
                    <IonList className="profile__list">
                      <IonItem className="addService__item" lines="none">
                        <IonLabel
                          color="label"
                          position="floating"
                          className="labelProfile"
                        >
                          First Name
                        </IonLabel>
                        <IonInput
                          color="input"
                          value={values.first_name}
                          onIonBlur={(e) => handleBlur(e)}
                          onIonChange={(e: any) => setFieldValue('first_name', e.detail.value)}
                          className="inputProfile"
                          placeholder="Ayushkman"
                        ></IonInput>
                      </IonItem>
                      <IonItem className="addService__item" lines="none">
                        <IonLabel
                          color="label"
                          position="floating"
                          className="labelProfile"
                        >
                          Last Name
                        </IonLabel>
                        <IonInput
                          color="input"
                          value={values.last_name}
                          onIonBlur={(e) => handleBlur(e)}
                          onIonChange={(e: any) => setFieldValue('last_name', e.detail.value)}
                          className="inputProfile"
                          placeholder="Abhishek"
                        ></IonInput>
                      </IonItem>
                      <IonItem className="addService__item" lines="none">
                        <IonLabel
                          color="label"
                          position="floating"
                          className="labelProfile"
                        >
                          Phone Number
                        </IonLabel>
                        <IonInput
                          type="tel"
                          color="input"
                          value={values.phone_number}
                          onIonBlur={(e) => handleBlur(e)}
                          onIonChange={(e: any) => setFieldValue('phone_number', e.detail.value)}
                          className="inputProfile"
                          placeholder="012-453-7654"
                        ></IonInput>
                      </IonItem>
                    </IonList>
                  </IonList>
        
                  <IonButton 
                    onClick={(e) => submitForm()}
                    disabled={isSubmitting}
                    className="btn" 
                    size="large" 
                    expand="block">
                    Update
                  </IonButton>
                </IonList>
              
            )
          }
        </Formik>
       
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton
            href="/editpasswordcustomer"
            size="large"
            className="btn"
            expand="block"
          >
            Change Password
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ProfileCustomer;
