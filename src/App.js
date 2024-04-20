import React from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Possibilities from "./components/possibilities"; 
import Skills from "./components/skills";
import Steps from "./components/steps";
import Process from "./components/process";
import AboutUs from "./components/aboutus";


  
  class App extends React.Component {
    render(){
      return (
        <div className='main'>
          <Home />
          <Possibilities />
          <Skills />
          <Steps />
          <Process />
          <AboutUs />
          <Footer />
        </div>
      );
    } 
  };

  export default App