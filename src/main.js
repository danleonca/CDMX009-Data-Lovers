
import data from './data/pokemon/pokemon.js';
import {candys,
filterData,
filterWeak,
findYourPokemon,}
from './data.js'

const tablePokemonKanto = document.querySelector('#bodyTable'); //dibujamos la tabla
data.pokemon.forEach(infodatos =>{ //recorremos todos los productos
  const tr= document.createElement("tr");//creamos un tr

  let tdNumber = document.createElement("td"); //creamo un td
  tdNumber.textContent = infodatos.num;//lo adjuntamos al tr
  tr.appendChild(tdNumber);

  let tdName= document.createElement("td");
  tdName.textContent = infodatos.name;
  tr.appendChild(tdName);

  let tdImg = document.createElement("img");
    tdImg.src= infodatos.img;

    tr.appendChild(tdImg);


    tablePokemonKanto.appendChild(tr);

});






document.getElementById("findYourCandy").addEventListener('click', numberOfCandys);
document.getElementById('findYourPokemon').addEventListener('click',pokemonName);

let buttonTop= document.querySelectorAll('.goToTheTop');
for (let i = 0; i < buttonTop.length; i++) {
  buttonTop[i].addEventListener('click', () => {
document.getElementById("FirstPage").style.display= 'block';
document.getElementById("SecondPage").style.display='none';
document.getElementById("ThirdPage").style.display= 'none'
document.getElementById("FourthPage").style.display= 'none';
location.reload();
});
}


function numberOfCandys(){
let insertedName = document.getElementById('NameForcandy').value;
let insertedRealName= insertedName.charAt(0).toUpperCase() + insertedName.slice(1);
console.log(insertedRealName);
let showMeCandy = candys(insertedRealName);
let inPutPlace= document.getElementById('result');
inPutPlace.innerHTML= " Your pokémon needs " +  showMeCandy + " candys to evolve";

}

function pokemonName (){
  document.getElementById("FirstPage").style.display= 'none';
  document.getElementById("FourthPage").style.display= 'block';
  let showResulterPokemon= document.getElementById(result2);
  let nameInserted= document.getElementById('NamePokemon2').value;
  let inserted= nameInserted.charAt(0).toUpperCase() + nameInserted.slice(1);
  //let showMyPokemon= findYourPokemon(inserted);
  let pokemon= findYourPokemon(inserted);
  console.log(pokemon);
  //printPokemon(showMyPokemon, showResulterPokemon);
////}
////
////  function printPokemon  (cosaParaimprimir,whereToPrint) {
////
    //showMyPokemon.map(pokemon => {
      let infoToShow= `<div class='tarjet'> <h2> ${pokemon.num} </h2> <h3> ${pokemon.name} </h3>    <figure> <img = class "imageBox" src ="${pokemon.img}"> </figure>
      <p> TYPE: ${pokemon.type} </p>
      <p>HEIGHT:${pokemon.height}</p>
      <p>WEIGHT:${pokemon.weight}</p>
      <p>CANDY:${pokemon.candy}</p>
      <p>CANDY COUNT:${pokemon.candy_count}</p>
      <p>EGG: ${pokemon.egg}</p>
      <p>SPAWN CHANCE: ${pokemon.spawn_chance}</p>
      <p>AVERANGE SPAWNS: ${pokemon.avg_spawns}</p>
      <p>SPAWN TIME:${pokemon.spawn_time}</p>
      <p>MULTIPLIERS:${pokemon.multipliers}</p>
      <p>WEAKNESSES:</p>
      <p>${pokemon.weaknesses}</p> </div>
      `
      showResulterPokemon.insertAdjacentHTML('afterend', infoToShow);
      console.log(infoToShow);
      }




let printFilter= document.getElementById('filterResult'); //para saber donde se tienen que imprimir los resultados del filtro type
let pokemonType= document.querySelectorAll('.elementType'); //que me traiga el valor o nombre de cada elemnto


function printData  (cosaParaimprimir) {

  cosaParaimprimir.forEach(pokemons => {
    let infoPokemon = `<div class='tarjet'> <h2> ${pokemons.num} </h2> <h3> ${pokemons.name} </h3>    <figure> <img = class "imageBox" src ="${pokemons.img}"> </figure>
    <p> TYPE: ${pokemons.type} </p>
    <p>HEIGHT:${pokemons.height}</p>
    <p>WEIGHT:${pokemons.weight}</p>
    <p>CANDY:${pokemons.candy}</p>
    <p>CANDY COUNT:${pokemons.candy_count}</p>
    <p>EGG: ${pokemons.egg}</p>
    <p>SPAWN CHANCE: ${pokemons.spawn_chance}</p>
    <p>AVERANGE SPAWNS: ${pokemons.avg_spawns}</p>
    <p>SPAWN TIME:${pokemons.spawn_time}</p>
    <p>MULTIPLIERS:${pokemons.multipliers}</p>
    <p>WEAKNESSES:</p>
    <p>${pokemons.weaknesses}</p> </div>
    `

    printFilter.insertAdjacentHTML('beforeend', infoPokemon);
  })}



for (let i = 0; i < pokemonType.length; i++) {
  pokemonType[i].addEventListener('click', () => {
    document.getElementById("FirstPage").style.display= 'none';
    document.getElementById("SecondPage").style.display= 'block';
    let elementPokemon = pokemonType[i].id;
    let types = filterData(elementPokemon);
    console.log(types);
    printData(types);
});
}


let pokemonWeak= document.getElementsByClassName('elementTypeW');
for (let i = 0; i < pokemonWeak.length; i++) {
pokemonWeak[i].addEventListener('click', () => {
    document.getElementById("FirstPage").style.display= 'none';
    document.getElementById("ThirdPage").style.display= 'block'
    let elementWeaks = pokemonWeak[i].id;
    console.log(elementWeaks);
    let weaks= filterWeak(elementWeaks);
    console.log(weaks);
document.getElementById('pokemonsweaks').innerHTML= 'Pokemons that are weaks against to '+  elementWeaks;
const tablePokemonKantoW = document.querySelector('#bodyTableW'); //dibujamos la tabla
weaks.forEach(infodatosW =>{ //recorremos todos los productos
  const tr= document.createElement("tr");//creamos un tr

  let tdNumberW = document.createElement("td"); //creamo un td
  tdNumberW.textContent = infodatosW.num;//lo adjuntamos al tr
  tr.appendChild(tdNumberW);

  let tdNameW= document.createElement("td");
  tdNameW.textContent = infodatosW.name;
  tr.appendChild(tdNameW);

  let tdTypeW= document.createElement("td");
  tdTypeW.textContent = infodatosW.type;
  tr.appendChild(tdTypeW);

  let tdHeightW= document.createElement("td");
  tdHeightW.textContent = infodatosW.height;
  tr.appendChild(tdHeightW);

  let tdWeightW= document.createElement("td");
  tdWeightW.textContent = infodatosW.weight;
  tr.appendChild(tdWeightW);

  let tdWeaknessesW= document.createElement("td");
  tdWeaknessesW.textContent = infodatosW.weaknesses;
  tr.appendChild(tdWeaknessesW);


  let tdImgW = document.createElement("img");
    tdImgW.src= infodatosW.img;

    tr.appendChild(tdImgW);


    tablePokemonKantoW.appendChild(tr);

});});
}
