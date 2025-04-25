/*  const number = document.getElementById("valor");
number.addEventListener("keypress", () => {
var numberlength = number.value.length;

   if (numberlength === 0 ) {
   number.value += "R$";
   }
}) */

//const correcao = document.getElementById("correcao");
/* correcao.addEventListener("keypress", () => {
var numberlength = correcao.value.length;

   if (numberlength === 0 ) {
   correcao.value += "R$";
   }
})  */
/* 
function clicar() {

	var valor = document.querySelector("#valor").value;
	var vida = document.querySelector("#vida").value;

	var resultado = parseFloat(valor).toFixed(2) / parseInt(vida) - parseFloat(valor);

	document.getElementById('resultado').value = Math.abs(resultado).toFixed(2).replace(".",",");

	//var resultado = document.querySelector(".resultado").innerHTML = resultado;//

}; */


function clicar() {

	var valor = document.querySelector("#valor").value;
	var vida = document.querySelector("#vida").value;

	var resultado = parseFloat(valor).toFixed(2) / parseInt(vida) - parseFloat(valor);

	document.getElementById('resultado').value = Math.abs(resultado).toFixed(2).replace(".",",");

	//var resultado = document.querySelector(".resultado").innerHTML = resultado;//

};





