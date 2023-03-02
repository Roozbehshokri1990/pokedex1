const BestPokemon = (props) => {
    return(<div>
      <p>My favorite Pokemon is Squirtle</p>
     <ul>
     {props.abilities.map((item)=>{
        return (<p>{item}</p>);
     })}
     </ul>

      </div>
    );
};

export default BestPokemon;