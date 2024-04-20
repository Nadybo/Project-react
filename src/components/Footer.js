import React from "react"
import telegram from 'D:/website/src/components/icons/telegram.svg';
import mail from 'D:/website/src/components/icons/mail-svgrepo-com.svg';
import discort from 'D:/website/src/components/icons/discord-svgrepo-com.svg';
import vk from 'D:/website/src/components/icons/vk-svgrepo-com.svg';

class Footer extends React.Component{
    render(){
      return(
        <footer>
          <div>
          <a>
            <img src={telegram}/>
          </a>
          <a>
            <img src={mail}/>
          </a>
          <a>
            <img src={discort}/>
          </a>
          <a>
            <img src={vk}/>
          </a>
          </div>
          
        </footer>
      )
    }
  }

  export default Footer