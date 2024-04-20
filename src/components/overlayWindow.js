import React, { Fragment } from "react";
import Photo from './img/qrcode.png'

export function Overlay({ isOpen, onClose }) {
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
                <form className="formDiv">
                    <label>
                      <input className="inputText" placeholder="Электронная почта" type="email" />
                    </label>
                    <label>
                      <input className="inputText" placeholder="ФИО" type="text" />
                    </label>
                    <label>
                      <input className="inputText" placeholder="№ учебной группы" type="number" />
                    </label>
                    <label>
                      <input className="inputText" type="tel" id="phone" name="phone" pattern="\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{4}" placeholder="Телефон"/>
                    </label>
                    <label>
                      <input className="inputText" placeholder="Ссылка на VK / username в Telegram" type="text" />
                    </label>
                    <label>
                    <input type="checkbox" />
                      Я согласен(на) на обработку персональных данных
                    </label>
                    <input className="inputButton" type="submit" value="Отправить" />
                </form>
                <div className="DivForQrcode">
                  <h4>Подписывайся на наш Telegram канал!</h4>
                  <img src={Photo}/>
                </div>
              </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Overlay;
