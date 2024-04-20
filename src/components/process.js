import React from "react"
import Photo from 'D:/website/src/components/img/phones.png';

class Process extends React.Component{
    render(){
      return(
        <div className="processDiv">
          <div className="processText">
            <h1>Процесс разработки</h1>
            <li>Выпуск релиза на основе мобильного веб - приложения "Мой Дом", с предоставлением чётких инструкций для интеграции в информационную пользовательскую систему МосПолитеха соблюдая требования выдвинутые администрацией Университета</li>
            <li>Положено начало на написание кроссплатформенного мобильного приложения, при помощи frame work FLutter, пока что для Android систем языке программирования Dart</li>
            <li>Мы не оставляем идею комфорта, мы её развиваем - давайте поддержим развитие нашего бренда среди тех, кто знает Политех</li>
            <li>В экстренные ситуации наше приложение выручит каждого!</li>
          </div>
          <img className="processPhoto" src={Photo} width={509} height={469}/>

        </div>
      )
    }
  }

  export default Process