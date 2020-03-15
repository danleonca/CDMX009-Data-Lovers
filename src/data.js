import data from './data/pokemon/pokemon.js';

export function candys(dataUser) {
  let newC = data.pokemon.filter(uspok => (uspok.name === dataUser));
  console.log(newC);
  let newCan = newC.map(count => count.candy_count);
  return newCan;
}
export function findYourPokemon(dataUser) {
  let player = data.pokemon.filter(pokedex => (pokedex.name === dataUser));
  console.log(player);
  return player;
}

export function filterData(elemento) {
  return data.pokemon.filter(poke => poke.type.includes(elemento)); //filtra elemento por tipo .includes
}

export function filterWeak(elementosW) {
  return data.pokemon.filter(filtW => {
    for (let i = 0; i < filtW.weaknesses.length; i++) {
      if (filtW.weaknesses[i] === elementosW) {
        return true
      }
    }
  });
}

export function printData(cosaParaimprimir, printPalce) {

  cosaParaimprimir.forEach(pokemons => {
    let infoPokemon = `<div class='tarjet'> <h2> ${pokemons.num} </h2> <h3> ${pokemons.name} </h3>    <figure> <img = class "imageBox" src ="${pokemons.img}"> </figure>
    <dt>TYPE: ${pokemons.type} </dt>
    <dt>HEIGHT:${pokemons.height}</dt>
    <dt>WEIGHT:${pokemons.weight}</dt>
    <dt>CANDY:${pokemons.candy}</dt>
    <dt>CANDY COUNT:${pokemons.candy_count}</dt>
    <dt>EGG: ${pokemons.egg}</dt>
    <dt>SPAWN CHANCE: ${pokemons.spawn_chance}</dt>
    <dt>AVERANGE SPAWNS: ${pokemons.avg_spawns}</dt>
    <dt>SPAWN TIME:${pokemons.spawn_time}</dt>
    <dt>MULTIPLIERS:${pokemons.multipliers}</dt>
    <dt>WEAKNESSES:</dt>
    <dt>${pokemons.weaknesses}</dt> </div>
    `

    printPalce.insertAdjacentHTML('beforeend', infoPokemon);
  });
}

export function printInfoPokemon(showMyPokemon1, showResulterPokemon1, putImagen1) {
  showMyPokemon1.map(pokemon => {
    let infoToShow = `<div class='card'> <h2> ${pokemon.num} </h2> <h3> ${pokemon.name} </h3>
    <dt>TYPE: ${pokemon.type} </dt>
    <dt>HEIGHT:${pokemon.height}</dt>
    <dt>WEIGHT:${pokemon.weight}</dt>
    <dt>CANDY:${pokemon.candy}</dt>
    <dt>CANDY COUNT:${pokemon.candy_count}</dt>
    <dt>EGG: ${pokemon.egg}</dt>
    <dt>SPAWN CHANCE: ${pokemon.spawn_chance}</dt>
    <dt>AVERANGE SPAWNS: ${pokemon.avg_spawns}</dt>
    <dt>SPAWN TIME:${pokemon.spawn_time}</dt>
    <dt>MULTIPLIERS:${pokemon.multipliers}</dt>
    <dt>WEAKNESSES:</dt>
    <dt>${pokemon.weaknesses}</dt> </div>
    `
    showResulterPokemon1.insertAdjacentHTML('afterbegin', infoToShow);
    console.log(infoToShow);
  });
  showMyPokemon1.map(imagen => {
    let imagen2 = `<div class= 'fotoPoke'> <img  style= 'width:200px; height: auto;' class="imageBox" src ="${imagen.img}"></div> `
    putImagen1.insertAdjacentHTML('afterbegin', imagen2);
  });
}
