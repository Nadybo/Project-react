import React from "react"

class Steps extends React.Component{
    render(){
      return(
        <div className="StepsDiv">
          <h1>Этапы разработки проекта</h1>
          <div class="container">
            <div class="row">
              <div class="item">
                <h3>Этап 1<br/>
                  (Аналитическая работа)</h3>
                <div className="inside">
                <h4>Введение - подэтап пройден</h4>
                <p>Краткий обзор программного обеспечения, которое будем использовать при разработки проекта.</p>
                <h4>Первые черновики - подэтап<br/>   
                  пройден</h4>
                  <p>Идея расположить к себе пользователя, обосновав свои задумки в комфорте и удобстве пользования интерфейсом.</p>
                  <h4>Обзор функций графического редактора - подэтап пройден</h4>
                  <p>Углубление в функции графических редакторов, для создания идеи дизайна мобильного приложения.</p>
                </div>
              </div>
              <div class="item">
                <h3>Этап 2<br/>
                (Работа над дизайном)</h3>
                <div className="inside">
                  <h4>Макет дизайна приветствия - подэтап пройден</h4>
                  <p>Макет для приветствия пользователя в приложении, созданный в Figma constructor.</p>
                  <h4>Работа с наполнением - подэтап пройден</h4>
                  <p>Составление перечня того, что будет содержаться в мобильном приложении. Создание дизайна механики мобильного приложения, под выбранные функции командой.</p>
                  <h4>Информационная безопасность,соглашение о предоставлении пользовательских данных - подэтап пройден</h4>
                  <p>Разработка инструкций для интеграции и разработки, для сохранения конфиденциальной информации.</p>
                </div>
              </div>
              <div class="item">
                <h3>Этап 3<br/>
                (Разработка приложения)</h3>
                <div className="inside">
                <h4>Вёрстка frontend части веб-версии мобильного приложения - в работе</h4>
                <p>Веб версия мобильного приложения, позволит нам запустить релиз функционала device версии.</p>
                <h4>Разработка клиент-серверной части - в работе</h4>
                <p>PHP набор инструкций и конфигурационных файлов для работы с мобильным приложением.</p>
                <h4>Начало работы над Flutter семейством - в работе</h4>
                <p>Front-flutter написание кода, визуальной части мобильного приложения.</p>
                </div>
              </div>
            </div>
          </div>
          <button>ПОДРОБНЕЕ О ПРОЕКТЕ</button>
        </div>
      )
    }
  }

  export default Steps