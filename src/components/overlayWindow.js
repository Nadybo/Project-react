

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
  if (state.succeeded) {
    return <p>Succes</p>
  }

  
  const showAlert = () => {
    alert('Привет, мир!');
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
              <form className="formDiv" onSubmit={handleSubmit}>
                <label>
                  <input 
                    className="inputText" 
                    placeholder="Электронная почта" 
                    htmlFor="email"
                    name="email"
                    type="email"
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
                    name="fullname"
                    id="fullname"
                    type="text"
                    value={formData.fullname}
                    onChange={handleChange}
                  />
                  <ValidationError 
                    prefix="fullname" 
                    field="fullname"
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
                    name="Телефон"
                    id="phoneNumber"
                    type="text"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                  <ValidationError 
                    prefix="phoneNumber" 
                    field="Телефон"
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
                <label>
                  <input 
                    name="согласен" 
                    id="agree"
                    type="checkbox" 
                    checked={formData.agree}
                    onChange={() => setFormData({ ...formData, agree: !formData.agree })}
                  />
                  Я согласен(на) на обработку персональных данных
                </label>
                <ValidationError 
                    prefix="agree" 
                    field="согласия"
                    errors={state.errors}
                  />
                <button className="inputButton" type="submit" disabled={state.submitting}>
                Отправить
                </button>
              </form>
              <div className="DivForQrcode">
                <h4>Подписывайся на наш Telegram канал!</h4>
                <img src={Photo} alt="QR-код"/>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Overlay;