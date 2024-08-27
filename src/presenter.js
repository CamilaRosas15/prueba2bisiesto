import esBisiesto from "./esBisiesto";

const numero = document.querySelector("#numero");
const form = document.querySelector("#bisiesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const bisiesto = Number.parseInt(numero.value);

  if(esBisiesto(bisiesto) === true)
  {
    div.innerHTML = "<p>" + "El numero: " + bisiesto + " Es bisiesto" + "</p>";
  }
  else{
    div.innerHTML = "<p>" + "El numero: " + bisiesto + " No es bisiesto" + "</p>";
  }

});
