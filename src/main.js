import { example } from './data.js';

console.log(example);
//Llamámos a todos los botones
document.getElementById("filterByType").addEventListener('click',filterType);
document.getElementById("filterByWeackness").addEventListener('click',filterWeackness);
document.getElementByClass("goToTheTop").addEventListener('click',goingBack);
document.getElementById("findYourCandy").addEventListener('click', numberOfCandys);
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

function goingBack() {
  document.getElementById("FirstPage").style.display= 'block'
  document.getElementById("SecondPage").style.display= 'none';
  document.getElementById("ThirdPage").style.display= 'none';
  document.getElementById("FourthPage").style.display= 'none';
}

function numberOfCandys() {
  document.getElementById("FirstPage").style.display= 'block'
  document.getElementById("SecondPage").style.display= 'none';
  document.getElementById("ThirdPage").style.display= 'none';
  document.getElementById("FourthPage").style.display= 'none';
}
