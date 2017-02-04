/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var resultado;
	var divisor;
	var dividendo;
	divisor=document.getElementById('numeroDivisor').value;
	dividendo=document.getElementById('numeroDividendo').value;
	divisor=parseInt(divisor);
	dividendo=parseInt(dividendo);
	resultado=(divisor%dividendo);
	alert("el resto es "+resultado);


	/*resultado=2%10;
	alert(resultado);
	resultado=10%2;
	alert("el resto es");*/

	







} 
