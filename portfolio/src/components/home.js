import React from 'react';
// import ReactTypingEffect from 'react-typing-effect';
import Typewriter from "typewriter-effect";

function home (){
    return(
      // add more features and words
      <div className = "intro">
      <Typewriter
      // delays and looping
      options = {{
          loop:true,
          delay: 100
      }}
      onInit = {(typewriter) => {
       
          typewriter
              .typeString("Hey, I'm Steven")
              .pauseFor()
              // .typeString("")
              // .deleteAll()
              // .typeString("Come Join Us On Our Adventure")
              // .deleteAll()
              // .typeString("To Find The Perfect Vacation With Us")
              // .deleteAll()
              .start();
      }}
      />
      </div>
    )  
}

export default home;