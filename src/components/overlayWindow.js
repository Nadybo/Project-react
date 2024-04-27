import React, { Fragment, useState } from "react";
import Photo from './img/qrcode.png';
import { useForm, ValidationError } from '@formspree/react';


export function Overlay({ isOpen, onClose }) {

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

  return (
    <Fragment>
      {isOpen && (
        <div className="overlay">
          <div className="overlay__background" onClick={onClose} />
          <div className="overlay__container">
            <div className="overlay__controls">
              <button
                className="overlay__close"
                type="button"
                onClick={onClose}
              />
            </div>
            <div className="formAndQrcode">
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
              <div className="DivForQrcode">
                <img src={Photo} width={220} height={211} alt="QR-код"/>
                <h4>Подписывайся на наш <br/>Telegram канал!</h4>
                <div className="iconsDiv">
                <a href="https://t.me/my_moshome" className="icons" target="_blank"><i class="fab fa-telegram"></i></a>
                <a href="mailto:info@myhomemos.ru?subject=Хочу вступить в команду&body=Здравствуйте, команда Мой Дом," className="icons"><i class="far fa-envelope"></i></a>
                <a href="https://github.com/Nadybo/Flutter2.0.git" className="icons"><i class="fab fa-github"></i></a>
                <a href="https://vk.com/mpoly_project" className="icons"><i class="fab fa-vk"></i></a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Overlay;