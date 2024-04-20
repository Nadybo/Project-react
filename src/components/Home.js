import React, { Component } from "react";
import Photo from 'D:/website/src/components/img/phones.png';
import Overlay from "./overlayWindow";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleOverlay = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="homeDiv">
        <div className="texts">
          <div>
            <h1 className="SuzBoshi">Мой дом</h1>
            <p>
              Проект "Мой Дом" - проект, направленный на <br/>
              упрощение жизни студентов, проживающих в <br/>
              общежитиях Политеха. Потенциальным <br/>
              продуктом является приложение, <br/>
              совмещающее в себе весь функционал,<br/>
              необходимый студентам, проживающим в <br/>
              общежитиях.
            </p>
          </div>
          <img src={Photo} className="photo" width={422} height={411.2} />
        </div>
          <button className="submitButton"  onClick={this.toggleOverlay}>ЗАПИСАТЬСЯ В ПРОЕКТ</button>

          <Overlay isOpen={this.state.isOpen} onClose={this.toggleOverlay}/>
    
        </div>
    );
  }
}

export default Home;
