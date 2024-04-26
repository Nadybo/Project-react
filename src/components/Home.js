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
              Проект "Мой Дом" - проект, направленный на 
              упрощение жизни студентов, проживающих в 
              общежитиях Политеха. Потенциальным 
              продуктом является приложение,
              совмещающее в себе весь функционал,
              необходимый студентам, проживающим в 
              общежитиях.
            </p>
          </div>
          <img src={Photo} className="photo" />
        </div>
          <button className="submitButton"  onClick={this.toggleOverlay}>ЗАПИСАТЬСЯ В ПРОЕКТ</button>

          <Overlay isOpen={this.state.isOpen} onClose={this.toggleOverlay}/>
    
        </div>
    );
  }
}

export default Home;


