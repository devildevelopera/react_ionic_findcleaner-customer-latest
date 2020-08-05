import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  IonContent,
  IonPage,
  IonInput,
  IonItem,
  IonList,
  IonButton,
  IonText,
} from "@ionic/react";
import { Formik } from 'formik';
import * as Yup from 'yup';

import "./SignUp.css";
import logo from "../../image/logo.png";

import { signUpRequest, signupCleanUp} from '../../store/action/signup'
import { useDispatch, useSelector } from "react-redux";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validateSignUpSchema = Yup.object().shape({
  fullName:  Yup.string()
                .min(5, 'Too short').required('Full names required!'),
  phone: Yup.string().matches(
            phoneRegExp, 
            'Phone number is not valid').required('Phone no. is required!'),
  email: Yup.string()
            .min(2, 'Too Short')
            .email('Enter type of email!').required('Email is required!'),
  password: Yup.string()
            .min(6,'Must be atlest 6 characters!').required('Password is required!'),
  confirmPassword: Yup.string()
            .when("password", {
              is: val => (val && val.length > 0 ? true : false),
              then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Password are not the same."
            )
  })
})

const SignUp: React.FC = (props: any) => { 
  const dispatch = useDispatch()
  const errorPad = useSelector((stat: any ) => stat.signup.error)
  const status = useSelector((stat: any) => stat.signup)

  useEffect(() => {

    if(status.isSuccessful) {
      dispatch(signupCleanUp())
      props.history.push('/login')
    }
  },[status.isSuccessful])

  return (
    <IonPage>
      <IonContent className="container">
        <div className="list-custom">
          <div className="header">
            <img src={logo} alt="" />
            <h1>Hello there!</h1>
            <p>Proceed with your Sign Up</p>
          </div>
          <Formik
            initialValues={{
              fullName: '',
              phone: '',
              email: '',
              password: '',
              confirmPassword: ''
            }}

            validationSchema={validateSignUpSchema}

            onSubmit={ 
              async (values, { setSubmitting}) => {

                const names = values.fullName.split(' ');

                const payload = {
                  first_name: names[0],
                  last_name: names[1],
                  phone_number: values.phone,
                  email: values.email,
                  password: values.password
                }

                await dispatch(signUpRequest(payload))
                setSubmitting(false)

              }
            }
          >
            { 
            ({
              setFieldValue,
              setFieldTouched,
              handleBlur,
              values,
              touched,
              isSubmitting,
              errors,
              submitForm
            }) => (
               <IonList className="mb4">
                <IonItem className="input-custom" lines="none">
                  <IonInput
                    placeholder="Enter FullName"
                    value={values.fullName}
                    onIonBlur={(e) => { setFieldTouched('fullName') }}
                    onIonChange={(e) => setFieldValue('fullName', e.detail.value)}
                  ></IonInput>
                  { errors.fullName && touched.fullName ? (<IonText color="danger"><p className="error_text content_padding">{ errors.fullName }</p></IonText>) : null }
                </IonItem>
                <IonItem className="input-custom" lines="none">
                  <IonInput
                    placeholder="Enter Phone"
                    value={values.phone}
                    onIonBlur={(e) => { handleBlur(e) }}
                    onIonChange={(e) => setFieldValue('phone', e.detail.value)}
                  ></IonInput>
                  {  errors.phone && touched.phone ? (<IonText color="danger"><p className="error_text content_padding">{ errors.phone }</p></IonText>) : null }
                </IonItem>
                <IonItem className="input-custom" lines="none">
                  <IonInput
                    placeholder="Enter Email"
                    value={values.email}
                    onIonBlur={(e) => { handleBlur(e) }}
                    onIonChange={(e) => setFieldValue('email',e.detail.value!)}
                  ></IonInput>
                  { errors.email && touched.email ? (<IonText color="danger"><p className="error_text content_padding">{ errors.email }</p></IonText>) : null }
                  {  errorPad && !errors.email ? (<IonText color="danger"><p className="error_text content_padding">{ errorPad }</p></IonText>) : null }
                </IonItem>
                <IonItem className="input-custom" lines="none">
                  <IonInput
                    type="password"
                    placeholder="Enter Password"
                    value={values.password}
                    onIonBlur={(e) => { handleBlur(e) }}
                    onIonChange={(e) => setFieldValue('password', e.detail.value)}
                    show-hide-input
                  ></IonInput>
                  { errors.password && touched.password ? 
                    (<IonText color="danger">
                        <p className="error_text content_padding">{ errors.password }</p>
                      </IonText>) : null }
                </IonItem>
                <IonItem className="input-custom" lines="none">
                  <IonInput
                    type="password"
                    placeholder="Confirm Password"
                    value={values.confirmPassword}
                    onIonBlur={(e) => { handleBlur(e) }}
                    onIonChange={(e) => setFieldValue('confirmPassword', e.detail.value)}
                    show-hide-input
                  ></IonInput>
                  { errors.confirmPassword && touched.confirmPassword ? (<IonText color="danger"><p className="error_text content_padding">{ errors.confirmPassword }</p></IonText>) : null }
                </IonItem>
                
                <IonButton 
                    onClick={(e) => submitForm()} 
                    disabled={isSubmitting}
                    className="btn" 
                    size="large" 
                    expand="block">
                  Register 
                </IonButton>
              </IonList>
              
            )}
          </Formik>
          <div className="forgot">
            <p>
              Have an Account{" "}
              <a href="/login" className="highlight">
                Login
              </a>
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
