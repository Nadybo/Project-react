import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import MapComponent from "./map"

const AboutUs = () =>{
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    groupNumber: "",
    phone: "",
    socialLink: "",
    agree: false
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [state, handleSubmit] = useForm("mrgnrwrj");

  const validateForm = () => {

    for (const key in formData) {
      if (formData.hasOwnProperty(key) && !formData[key]) {
        return false;
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return false;
    }

    return true;
  };

  const manageSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      handleSubmit(e);
      if (state.succeeded) {
          // alert("Успешно отправлено");
        window.location.reload();
      }
    } else {
      alert("Пожалуйста, заполните все поля правильно.");
    }
  };
  return(
    <div className="AboutUsDiv">
      <h1>Контакты</h1>
          <div className="mapAndAbout">
            <div className="mapDiv">
              <MapComponent />
            </div>
            <form id="formId" className="formDiv" onSubmit = {manageSubmit}>
                <label>
                  <h2 className="titleform">
                  Записывайся в проект!
                  </h2>
                </label>
                <label>
                  <input 
                    className="inputText" 
                    placeholder="Электронная почта" 
                    name="email"
                    type="email"
                    id="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                </label>
                <label>
                  <input 
                    className="inputText" 
                    placeholder="ФИО" 
                    name="fullName"
                    id="fullname"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  <ValidationError 
                    prefix="fullName" 
                    field="fullName"
                    errors={state.errors}
                  />
                </label>
                <label>
                  <input 
                    className="inputText" 
                    placeholder="№ учебной группы" 
                    name="groupNumber"
                    id="groupNumber"
                    type="text"
                    value={formData.groupNumber}
                    onChange={handleChange}
                  />
                  <ValidationError 
                    prefix="groupNumber" 
                    field="groupNumber"
                    errors={state.errors}
                  />
                </label>
                <label>
                  <input 
                    className="inputText" 
                    placeholder="Телефон" 
                    name="phone"
                    id="phone"
                    type="tel"
                    // pattern="\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{4}"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <ValidationError 
                    prefix="phone" 
                    field="phone"
                    errors={state.errors}
                  />
                </label>
                <label>
                  <input 
                    className="inputText" 
                    placeholder="Ссылка на VK / username в Telegram" 
                    name="socialLink"
                    id="socialLink"
                    type="text"
                    value={formData.socialLink}
                    onChange={handleChange}
                  />
                  <ValidationError 
                    prefix="socialLink" 
                    field="socialLink"
                    errors={state.errors}
                  />
                </label>
                <label className="agreeText">
                  <input 

                    name="agree" 
                    id="agree"
                    type="checkbox" 
                    checked={formData.agree}
                    onChange={() => setFormData({ ...formData, agree: !formData.agree })}
                  />
                  <ValidationError 
                    prefix="agree" 
                    field="agree"
                    errors={state.errors}
                  />
                  Я согласен(на) на обработку персональных данных
                  
                </label>
                <input className="inputButton" type="submit" value="Отправить" />
              </form>
        </div>
      </div>
    )
  }
  

  export default AboutUs