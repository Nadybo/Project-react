import React from "react"
import Photo from 'D:/website/src/components/img/lastimage.png'
import MapComponent from "./map"

class AboutUs extends React.Component{
    render(){
      return(
        <div className="AboutUsDiv">
          <h1>Контакты</h1>
            <div className="mapAndAbout">
              <div className="mapDiv">
                <MapComponent />
              </div>
              <div>
                <p><b> Куратор:</b> Лукашова Марина Ивановна</p>
                <p><b>Тимлид:</b> Чистяков Артём Дмитриевич</p>
                <p><b>Адрес:</b> Павла Корчагина, 22</p>
                <img src={Photo}/>
              </div>
          </div>
        </div>
      )
    }
  }

  export default AboutUs