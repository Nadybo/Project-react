import React from "react"

class Footer extends React.Component{
    render(){
      return(
        <footer>
          <div>
          <a href="https://t.me/my_moshome" className="icons" target="_blank"><i class="fab fa-telegram"></i></a>
          <a href="mailto:info@myhomemos.ru?subject=Хочу вступить в команду&body=Здравствуйте, команда Мой Дом," className="icons"><i class="far fa-envelope"></i></a>
          <a href="https://github.com/Nadybo/Flutter2.0.git" className="icons"><i class="fab fa-github"></i></a>
          <a href="https://vk.com/mpoly_project" className="icons"><i class="fab fa-vk"></i></a>
          </div>
        </footer>
      )
    }
  }

  export default Footer