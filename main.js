
/* function calcular() {

	var quantia = document.querySelector("#quantia").value;
	var ciclo = document.querySelector("#ciclo").value;

	 var resultado = parseFloat(quantia).toFixed(2) / parseInt(ciclo) - parseFloat(quantia);

	document.getElementById('resultado').value = resultado; 
	//var resultado = document.querySelector(".resultado").innerHTML = resultado;//

}; */

function calcular() {

	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;

	var resultadoII = parseFloat(num1).toFixed(2) / parseInt(num2) - parseFloat(num1);
	document.getElementById('resultadoII').value = Math.abs(resultadoII).toFixed(2).replace(".",",");
}