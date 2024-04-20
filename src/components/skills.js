import React, { Component } from "react";
import Overlay from "./overlayWindow";

class Skills extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleOverlay = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
    render(){
      return(
        <div className="SkillsDiv">
          <h1>Необходимые навыки для участия в проекте</h1>
          <div>
            <li>Представление о мобильной разработке flutter</li>
            <li>Навыки в UX/UI дизайне</li>
            <li>Представление о клиент-сервере</li>
            <li>Умение работать в команде</li>
            </div>
          <button className="submitButton"  onClick={this.toggleOverlay}> ХОЧУ В КОМАНДУ</button>

          <Overlay isOpen={this.state.isOpen} onClose={this.toggleOverlay}/>
    
        </div>
      )
    }
  }
 
  export default Skills