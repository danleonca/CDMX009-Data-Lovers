import data from './data/pokemon/pokemon.js';
import {
  candys, filterData, filterWeak, findYourPokemon, printData, printInfoPokemon,
}
  from './data.js';

const tablePokemonKanto = document.querySelector('#bodyTable'); // dibujamos la tabla
data.pokemon.forEach((infodatos) => { // recorremos todos los productos
  const tr = document.createElement('tr');// creamos un tr

  const tdNumber = document.createElement('td'); // creamo un td
  tdNumber.textContent = infodatos.num;// lo adjuntamos al tr
  tr.appendChild(tdNumber);

  const tdName = document.createElement('td');
  tdName.textContent = infodatos.name;
  tr.appendChild(tdName);

  const tdImg = document.createElement('img');
  tdImg.src = infodatos.img;
  tdImg.addEventListener('click', () => {
    document.getElementById('FirstPage').style.display = 'none';
    document.getElementById('FourthPage').style.display = 'block';
    const showResulterPokemon = document.getElementById('result2');
    const putImage = document.getElementById('imgPokedex');
    const showMyPokemon = findYourPokemon(infodatos.name);
    printInfoPokemon(showMyPokemon, showResulterPokemon, putImage);
  });
  tr.appendChild(tdImg);
  tablePokemonKanto.appendChild(tr);
});

const buttonTop = document.querySelectorAll('.goToTheTop');
for (let i = 0; i < buttonTop.length; i += 1) {
  buttonTop[i].addEventListener('click', () => {
    document.getElementById('FirstPage').style.display = 'block';
    document.getElementById('SecondPage').style.display = 'none';
    document.getElementById('ThirdPage').style.display = 'none';
    document.getElementById('FourthPage').style.display = 'none';
    window.location.reload(true);
  });
}

export function numberOfCandys() {
  const insertedName = document.getElementById('NameForcandy').value;
  const insertedRealName = insertedName.charAt(0).toUpperCase() + insertedName.slice(1);
  const showMeCandy = candys(insertedRealName);
  const inPutPlace = document.getElementById('result');

  data.pokemon.forEach((checkname) => {
    if (insertedName !== '') {
      if (showMeCandy !== '') {
        if (insertedRealName === checkname.name) {
          inPutPlace.innerHTML = `${insertedName} needs ${showMeCandy} candys to evolve`;
        } else {
          console.log('noo');
        }
      } else {
        inPutPlace.innerHTML = `${insertedName} is the last evolution, doesn't need more candy`;
      }
    } else {
      inPutPlace.innerHTML = 'Pokemon name is empty please verify';
    }
  });
}

function pokemonName() {
  const showResulterPokemon = document.getElementById('result2');
  const putImagen = document.getElementById('imgPokedex');
  const nameInserted = document.getElementById('NamePokemon2').value;
  const inserted = nameInserted.charAt(0).toUpperCase() + nameInserted.slice(1);
  const inputName = document.getElementById('resultName');
  // let showMyPokemon= findYourPokemon(inserted);
  const showMyPokemon = findYourPokemon(inserted);

  data.pokemon.forEach((namePoke) => {
    if (inserted === namePoke.name) {
      document.getElementById('FirstPage').style.display = 'none';
      document.getElementById('FourthPage').style.display = 'block';
      printInfoPokemon(showMyPokemon, showResulterPokemon, putImagen);
    } else {
      inputName.innerHTML = `${inserted} isn't a pokemon's name, please check `;
    }
  });
}

const printFilter = document.getElementById('filterResult'); // para saber donde se tienen que imprimir los resultados del filtro type
const pokemonType = document.querySelectorAll('.elementType'); // que me traiga el valor o nombre de cada elemnto

for (let i = 0; i < pokemonType.length; i += 1) {
  pokemonType[i].addEventListener('click', () => {
    document.getElementById('FirstPage').style.display = 'none';
    document.getElementById('SecondPage').style.display = 'block';
    const elementPokemon = pokemonType[i].id;
    const elePokemon = elementPokemon.charAt(0).toUpperCase() + elementPokemon.slice(1);
    const types = filterData(elePokemon);
    printData(types, printFilter);
  });
}

const pokemonWeak = document.getElementsByClassName('elementTypeW');
for (let i = 0; i < pokemonWeak.length; i += 1) {
  pokemonWeak[i].addEventListener('click', () => {
    document.getElementById('FirstPage').style.display = 'none';
    document.getElementById('ThirdPage').style.display = 'block';
    const elementWeaks = pokemonWeak[i].id;
    const weaks = filterWeak(elementWeaks);
    document.getElementById('pokemonsweaks').innerHTML = `Pokemons that are weaks against to ${elementWeaks}`;
    const tablePokemonKantoW = document.querySelector('#bodyTableW'); // dibujamos la tabla
    weaks.forEach((infodatosW) => { // recorremos todos los productos
      const tr = document.createElement('tr');// creamos un tr
      const tdNumberW = document.createElement('td'); // creamo un td
      tdNumberW.textContent = infodatosW.num;// lo adjuntamos al tr
      tr.appendChild(tdNumberW);
      const tdNameW = document.createElement('td');
      tdNameW.textContent = infodatosW.name;
      tr.appendChild(tdNameW);
      const tdTypeW = document.createElement('td');
      tdTypeW.textContent = infodatosW.type;
      tr.appendChild(tdTypeW);
      const tdHeightW = document.createElement('td');
      tdHeightW.textContent = infodatosW.height;
      tr.appendChild(tdHeightW);
      const tdWeightW = document.createElement('td');
      tdWeightW.textContent = infodatosW.weight;
      tr.appendChild(tdWeightW);
      const tdWeaknessesW = document.createElement('td');
      tdWeaknessesW.textContent = infodatosW.weaknesses;
      tr.appendChild(tdWeaknessesW);
      const tdImgW = document.createElement('img');
      tdImgW.src = infodatosW.img;
      tr.appendChild(tdImgW);
      tablePokemonKantoW.appendChild(tr);
    });
  });
}
document.getElementById('findYourCandy').addEventListener('click', numberOfCandys);
document.getElementById('findYourPokemon').addEventListener('click', pokemonName);
