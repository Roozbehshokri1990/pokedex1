import { useState } from "react";

export const CaughtPokemon = () => {
  const [cought, setCount] = useState([]);

  //  function CaughtPokemon () {
  //   setCount(cought + 1);
  //   }
  function CaughtPokemon() {
   setCount(cought.concat("roozbeh"));
  }
return (
    <div>
        <p>Caught {cought} Pokemon on 26/2/2023</p>
        <button onClick={CaughtPokemon}>Caught Pokemon</button>
        {cought.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
        </div>
    );
};