
   import data from './data/pokemon/pokemon.js';


export function candys(dataUser){

let newC = data.pokemon.filter(uspok => (uspok.name === dataUser));
console.log(newC);
let newCan = newC.map(count => count.candy_count);

return newCan;
}
export function findYourPokemon(dataUser){
let player = data.pokemon.filter(pokedex => (pokedex.name === dataUser));
console.log(player);
return player;
}



export function filterData(elementos){
  return  data.pokemon.filter(fil=>{
  for (let i=0; i<fil.type.length; i++){
    if (fil.type[i]===elementos){
      return true
          }
       }
      }
   );
}

export function filterWeak(elementosW){
  return  data.pokemon.filter(filtW=>{
  for (let i=0; i<filtW.weaknesses.length; i++){
    if (filtW.weaknesses[i]===elementosW){
      return true
          }
       }
      }
   );
}
