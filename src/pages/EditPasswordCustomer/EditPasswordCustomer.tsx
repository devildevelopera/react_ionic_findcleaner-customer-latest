import React, { useEffect } from "react";
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
} from "@ionic/react";
import { Formik } from 'formik'
import * as Yup from 'yup'
// import ExploreContainer from "../../components/ExploreContainer";
import "./EditPasswordCustomer.css";
import iconclose from "../../image/icon-close.png";
import { useDispatch, useSelector } from "react-redux";
import { changePasswordRequest } from "../../store/action/changePassword";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validatePasswordConfirmSchema = Yup.object().shape({
  new_password1: Yup.string()
            .min(6,'Must be atlest 6 characters!').required('Password is required!'),
  new_password2: Yup.string()
            .when("password", {
              is: val => (val && val.length > 0 ? true : false),
              then: Yup.string().oneOf(
                [Yup.ref("new_password2")],
                "Password are not the same."
            )
  })
})

const EditPasswordCustomer: React.FC = () => {
  let history  = useHistory()
  const dispatch = useDispatch()
  const isSuccessful = useSelector((stat: any) => stat)
  const status = useSelector((stat: any) => stat.login)

  useEffect(() => {
    if(status.token === null) {
      history.push('/login')
    }

    console.log(isSuccessful);
  })

  return (
    <IonPage className="container">
      <IonHeader className="ion-no-border bg">
        <IonToolbar color="blue">
          <IonList color="blue" className="addService__width">
            <IonButtons slot="end">
              <Link to="/profilecustomer">
                <IonImg src={iconclose} />
              </Link>
            </IonButtons>

            <IonTitle className="ion-text-left title-white">
              Edit Password
            </IonTitle>
          </IonList>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Formik 
          initialValues = {{
            current_password: '',
            new_password1: '',
            new_password2: ''
          }}
          validationSchema={validatePasswordConfirmSchema}
          onSubmit = {
            async (values, { setSubmitting}) => {

              const payloadObj = {
                current_password: values.current_password,
                new_password1: values.new_password1,
                new_password2: values.new_password2
              }
              dispatch(changePasswordRequest(payloadObj))
              setSubmitting(false)
            }
          }
        >
          {({
            handleBlur,
            setFieldValue,
            values,
            submitForm,
            isSubmitting
          }) => (
            <IonList className="addService__list">
              <IonItem className="addService__item" lines="none">
                <IonLabel color="label" position="floating">
                  Current Password
                </IonLabel>
                <IonInput 
                    color="input" 
                    show-hide-input
                    value={values.current_password}
                    onIonBlur={(e) => handleBlur(e)}
                    onIonChange={(e: any) => setFieldValue('current_password', e.detail.value)}
                    placeholder="Enter current password"></IonInput>
              </IonItem>
              <IonItem className="addService__item" lines="none">
                <IonLabel color="label" position="floating">
                  New Password
                </IonLabel>
                <IonInput 
                    color="input" 
                    show-hide-input
                    value={values.new_password1}
                    onIonBlur={(e) => handleBlur(e)}
                    onIonChange={(e: any) => setFieldValue('new_password1', e.detail.value)}
                    placeholder="Enter new password"></IonInput>
              </IonItem>
              <IonItem className="addService__item" lines="none">
                <IonLabel color="label" position="floating">
                  Confirm Password
                </IonLabel>
                <IonInput 
                    color="input" 
                    show-hide-input
                    value={values.new_password2}
                    onIonBlur={(e) => handleBlur(e)}
                    onIonChange={(e: any) => setFieldValue('new_password2', e.detail.value)}
                    placeholder="Confirm new password"></IonInput>
              </IonItem>
    
              <IonButton 
                onClick={(e) => submitForm()}
                disabled={isSubmitting}
                className="btn" 
                size="large" 
                expand="block">
                Update
              </IonButton>
            </IonList>
          )}
        </Formik>
      </IonContent>
    </IonPage>
  );
};

export default EditPasswordCustomer;
