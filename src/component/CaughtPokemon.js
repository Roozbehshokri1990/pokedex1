import { useState } from "react";

export const CaughtPokemon = (props) => {
  const [cought2, setCount] = useState([]);
  const [cought1, setCount1] = useState(0);
  const [pokemonNameInput, setPokemonNameInput] = useState("");
   function CaughtPokemon () {
  setCount1(cought1 + 1);
  setCount(cought2.concat(pokemonNameInput));
  setPokemonNameInput("");
  }
  // const pokemonNameInput = ("");
function handleInputChange (event) {
console.log(event.target.value);
setPokemonNameInput(event.target.value);
}

// function getRandomPokemon() {
//     const pokemon = ["Ditto", "Eevee", "Pikachu", "Butterfree", "Spearow"];
//     return pokemon[Math.floor(Math.random() * pokemon.length)];
  // }
return (
    <div>
        <p>Caught {cought1} Pokemon on {props.date}</p>
        <input type="text" value={pokemonNameInput} onChange={handleInputChange}/>
        <button onClick={CaughtPokemon}>Caught Pokemon</button>
        {cought2.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
        </div>
    );
};
