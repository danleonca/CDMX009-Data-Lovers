import data from './data/pokemon/pokemon.js';


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

    tablePokemonKanto.appendChild(tr); //agregamos el tr a la tabla


});

//Llamámos a todos los botones
document.getElementById("FilterByType").addEventListener('click', filterType);
document.getElementById("FilterByWeackness").addEventListener('click', filterWeackness);
//document.querySelectorAll("goToTheTop").addEventListener('click',goingBack);
//document.getElementByClassName("goToTheTop").addEventListener('click',goingBack);
document.getElementById('ButtonSecondPage').addEventListener('click', goToTheTopSP);
document.getElementById('ButtonThirdPage').addEventListener('click', goToTheToTP);
//document.getElementById('ButtonFourthPage').addEventListener('click', goToTheTopFP);
//document.getElementById("findYourCandy").addEventListener('click', numberOfCandys);
//aquí me falta darle funcionalidad a cada uno de los pokemoes al darles click para que muestren su descripción
//hacemos las funciones de cada botón

function filterType() {
  document.getElementById("FirstPage").style.display = 'none';
  document.getElementById("SecondPage").style.display = 'block';


}

function filterWeackness() {
  document.getElementById("FirstPage").style.display = 'none';
  document.getElementById("SecondPage").style.display = 'none';
  document.getElementById("ThirdPage").style.display = 'block'
  document.getElementById("FourthPage").style.display = 'none';
}

function goToTheTopSP() {
  document.getElementById("FirstPage").style.display = 'block'
  document.getElementById("SecondPage").style.display = 'none';

}

function goToTheToTP(){
  document.getElementById("FirstPage").style.display= 'block'
  document.getElementById("ThirdPage").style.display= 'none';

}

function goToTheTopFP() {
  document.getElementById("FirstPage").style.display = 'block'
  document.getElementById("FourthPage").style.display = 'none';
}





//function numberOfCandys(){
//let insertedName = document.getElementById('NameForcandy').value
//let showMeCandy = candys(insertedName);
//inPutPlace= document.getElementById('result');
//inPutPlace.innerHTML= "tu pokémon necesita" +  showMeCandy + "para evolucionar";
//
//}

const found= data.pokemon.map(elemnt => elemnt==="Bulbasaur");
console.log(found + "hola");
