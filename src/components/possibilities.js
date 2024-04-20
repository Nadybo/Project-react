import React from "react"
import Photo1 from "D:/website/src/components/img/item1.png"
import Photo2 from "D:/website/src/components/img/item2.png"
import Photo3 from "D:/website/src/components/img/item3.png"
import Photo4 from "D:/website/src/components/img/item4.png"
import Photo5 from "D:/website/src/components/img/item5.png"
import Photo6 from "D:/website/src/components/img/item6.png"
class Possibilities extends React.Component{
    render(){
      return(
        <div className="beforeHomepage">
            <h1>Возможности приложения</h1>
            <div class="container">
              <div class="row">
                
                <div class="item">
                <img src={Photo1}/>
                  <p>Интерактивные встречи</p>
                </div>
                <div class="item">
                  <img src={Photo2}/>
                  <p>Оплата услуг в один клик</p>
                </div>
                <div class="item">
                <img src={Photo3}/>
                  <p>Статистика посещаемости<br/>
                    мероприятий</p>
                </div>
              </div>
              <div class="row">
                <div class="item">
                <img src={Photo4}/>
                  <p>Доступ к важным личным<br/>
                  документам</p>
                </div>
                <div class="item">
                  <img src={Photo5}/>
                  <p>Заселиться в обжежитие своего<br/>
                  ВУЗа через телефон</p>
                </div>
                <div class="item">
                <img src={Photo6}/>
                  <p>Удобный способ интеграции с<br/>
                     ВУЗами страны и даже мира</p>
                </div>
              </div>
            </div>
        </div>
      )
    }
  }

  export default Possibilities