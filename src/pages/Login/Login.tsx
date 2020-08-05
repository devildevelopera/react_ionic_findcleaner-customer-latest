import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonPage,
  IonInput,
  IonItem,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
} from "@ionic/react";
import { Formik } from 'formik'
import * as Yup from 'yup';
import "./Login.css";
import logo from "../../image/logo.png";
import { Link, useHistory } from "react-router-dom";

import { loginUserRequest, cleanUp } from '../../store/action/login'
import { useDispatch, useSelector } from "react-redux";

const validateSchema = Yup.object().shape({
  email: Yup.string().min(2, 'Too Short').email('Enter type of email!'),
  password: Yup.string().min(6,'Must be atlest 6 characters!')
})

const Login: React.FC = (props: any) => {
  let history = useHistory()
  const status = useSelector((status: any) => status.login)
  const errPad = useSelector((stat: any) => stat.login.error )
  const dispatch = useDispatch()

  useEffect(() => {
    if(status.token || status.isSuccessful) {
      history.push('/homecustomer')
    } 
  }, [status.isSuccessful])

  return (
    <IonPage>
      <IonGrid>
        <IonRow>
          <IonCol>
            <div className="list-custom">
              <div className="header">
                <img src={logo} alt="" />
                <h1>Hello there!</h1>
                <p>Proceed with your Login</p>
              </div>
              <Formik
                initialValues={{
                  email: '',
                  password: ''
                }}
                validationSchema={validateSchema}
                onSubmit={
                  async (values) => {

                    const payload = {
                      email: values.email,
                      password: values.password
                    }

                    await dispatch(loginUserRequest(payload))

                }}
              >
                {
                 ({ 
                    values, 
                    setFieldValue, 
                    handleBlur, 
                    touched,
                    errors, 
                    submitForm,
                    isSubmitting 
                  }) => (
                    <IonGrid className="content_padding mb4">
                       { errPad && !errors.email ? 
                        (
                          <IonRow >
                            <IonCol>
                              <IonText color="danger errPadding">
                                <p className="error_text content_padding">{ errPad }</p>
                              </IonText>
                            </IonCol>
                          </IonRow>
                      ) : null }
                      <IonRow>
                        <IonCol class="input__pad">
                          <IonItem className="input-custom" lines="none">
                            <IonInput
                              type="email"
                              placeholder="Enter Your Email"
                              value={values.email}
                              onIonBlur={(e) => handleBlur(e)}
                              onIonChange={(e: any) => setFieldValue('email', e.detail.value)}
                            ></IonInput>
                             { errors.email && touched.email? (<IonText color="danger"><p className="error_text content_padding">{ errors.email }</p></IonText>) : null }
                          </IonItem>
                         
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol class="input__pad">
                          <IonItem className="input-custom" lines="none">
                            <IonInput
                              type="password"
                              placeholder="Enter Your Password"
                              show-hide-input
                              value={values.password}
                              onIonBlur={(e) => handleBlur(e)}
                              onIonChange={(e: any) => setFieldValue('password',e.target.value)}
                            ></IonInput>
                            { errors.password && touched.password? (<IonText color="danger"><p className="error_text content_padding">{ errors.password }</p></IonText>) : null }
                          </IonItem>  
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonButton
                            onClick={(e) => submitForm()}
                            disabled={isSubmitting}
                            className="btn"
                            size="large"
                            expand="block" >
                            Login
                          </IonButton>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  )
                }
              </Formik>
              <div className="forgot">
                <Link to="/forgotpassword" className="mb5">
                  Forgot Password?
                </Link>
                <p>
                  Don’t have an Account{" "}
                  <Link to="/signup" className="highlight">
                    sign Up
                  </Link>
                </p>
              </div>
            </div>
          </IonCol>
        </IonRow> 
      </IonGrid>
    </IonPage>
  );
};

export default Login;
