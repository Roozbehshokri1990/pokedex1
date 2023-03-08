import React from "react";
import Logo from "./component/Logo";
import BestPokemon from "./component/BestPokemon";
import { CaughtPokemon } from "./component/CaughtPokemon";
// import PokemonMoves from "./component/PokemonMoves";
import PokemonMovesSelector from "./component/PokemonMovesSelector";
import PokemonCity from "./component/PokemonCity";

function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();
  function logWhenClicked (){
    console.log("it doesn't matter what the message is");
  }
// };





  return (
    <div>
      <Logo appName="Pokedex" click={logWhenClicked}/>
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
      <pokemonData date={date}/>
      <PokemonMovesSelector />
      <PokemonCity />
    </div>);
}
export default App;
