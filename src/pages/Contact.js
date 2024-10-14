import { Helmet } from "react-helmet"
import React from "react"
import { useState } from "react"
import { Formik,Form,Field,useFormik } from "formik"
export default function Contact(){
    const [selectedOption,setSelectedOption]=useState('')
    return(
     <>
      <Helmet><title>iletişim</title></Helmet> 
        <Formik
      initialValues={{ email: '' ,yesno:''}}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Email gerekli';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = 'Geçersiz email adresi';
        }
        if (!values.password) {
          errors.password = 'Şifre gerekli';
        } else if (values.password.length < 6) {
          errors.password = 'Şifre en az 6 karakter olmalı';
        }
        if(!values.about){
          errors.about='metin gerekli'
        }
        if(!values.yesno){
          errors.yesno='lütfen seçiniz'
        }
        return errors;
      }}
      onSubmit={(values) => {
        console.log(values);
        alert('form gönderildi!')
      }}
    > 
    {({ errors, touched }) => (
      <Form>
        <div>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="Email" />
          {errors.email && touched.email && <div>{errors.email}</div>}
        </div>

        <div>
          <label htmlFor="password">Şifre</label>
          <Field id="password" name="password" type="password" placeholder="Şifre" />
          {errors.password && touched.password && <div>{errors.password}</div>}
        </div>
        <div>
          <label htmlFor="about">hakkında</label>
          <Field id="about" name="about" type="text" placeholder="hakkında"/>
          {errors.about&&touched.about&&<div>{errors.about}</div>}
        </div>
        <div>
          <label >Öğrenci misiniz?</label>
         <div>
          <label>            
          <Field  name="yesno" type="radio" value="yes" onChange={(e)=>setSelectedOption(e.target.value)}></Field>
          yes
         </label>
         </div>
            <div>
              <label>
              <Field name="yesno" type="radio" value="no" onChange={(e)=>setSelectedOption(e.target.value)}/>
              no
              </label>
            </div>
            {errors.yesno&&touched.yesno&&<div>{errors.yesno}</div>}

            {selectedOption=='yes'&&(
              <div>
                <label htmlFor="textForOption">Okuduğunuz üniversite</label>
                <Field id="textForOption" name="textForOption1" placeholder="üniversite" />
              </div>
            )}
       
        </div>

        <button type="submit">Gönder</button>
      </Form>
    )}
  </Formik>
  </>
);
}