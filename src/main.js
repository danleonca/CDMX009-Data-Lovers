import { example } from './data.js';

console.log(example);
//Llamámos a todos los botones
document.getElementById("FilterByType").addEventListener('click',filterType);
document.getElementById("FilterByWeackness").addEventListener('click',filterWeackness);
//document.querySelectorAll("goToTheTop").addEventListener('click',goingBack);
//document.getElementByClassName("goToTheTop").addEventListener('click',goingBack);
document.getElementById('ButtonSecondPage').addEventListener('click', goToTheTopSP);
document.getElementById('ButtonThirdPage').addEventListener('click', goToTheToTP);
document.getElementById('ButtonFourthPage').addEventListener('click', goToTheTopFP);
//document.getElementById("findYourCandy").addEventListener('click', numberOfCandys);
//aquí me falta darle funcionalidad a cada uno de los pokemoes al darles click para que muestren su descripción
//hacemos las funciones de cada botón

function filterType() {
  document.getElementById("FirstPage").style.display= 'none';
  document.getElementById("SecondPage").style.display= 'block';


}

function filterWeackness() {
  document.getElementById("FirstPage").style.display= 'none';
  document.getElementById("SecondPage").style.display='none';
  document.getElementById("ThirdPage").style.display= 'block'
  document.getElementById("FourthPage").style.display= 'none';
}

function goToTheTopSP(){
 document.getElementById("FirstPage").style.display= 'block'
 document.getElementById("SecondPage").style.display= 'none';

}

function goToTheToTP(){
  document.getElementById("FirstPage").style.display= 'block'

  document.getElementById("ThirdPage").style.display= 'none';

}

function goToTheTopFP() {
  document.getElementById("FirstPage").style.display= 'block'
  document.getElementById("FourthPage").style.display= 'none';
}


//function numberOfCandys() {
//
//}
