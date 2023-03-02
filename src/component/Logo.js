import React from "react";



//  function onClick() {
        //   }
        //  return <button onClick={logWhenClicked}>Click me!</button>;
        //  }

const Logo = (props) => {
   console.log(props);
    return (
        <header>
        <h1> welcom to the pokedex {props.appName} </h1>
        <img alt="pic" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"/>
        <button onClick ={props.click}>Click me!</button>;


      </header>
    );
};

export default Logo;