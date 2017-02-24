var miIntervalo ;

function inicio()
{	
	alert("function inicio.");
	miIntervalo = setInterval(SegundosEnElAire, 3000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {

    alert("Bienvenido a la UTN FRA");




    var ladodelcuadrado;
 	var resultado;

 	ladodelcuadrado=document.getElementById('ladodelcuadrado').value;
 	ladodelcuadrado*4;
 	alert(resultado);

//2-realiazar el algoritmo que lea un importe por de un producto por prompt y muestre el importe final
 //sumándole el IVA (21%)

 	var importedeproducto;
 	var importefinal;
 	importedeproducto=prompt("importedeproducto");
 	importefinal=importedeproducto*1.21;

 	//3- realizar el algoritmo que tome por ID dos datos, el largo y ancho de un terreno y luego que muestre
 	//cuantos metros de alambre se necesitan para colocarle 3 hilos de alambrado a su perímetro.


 	var largodelterreno;
 	var anchodelterreno;

 	perímetro=largodelterreno*anchodelterreno*3;


 	//(IF) realizar el algoritmo que pida dos números por prompt, si son iguales que los multiplique, si el
	//primero es mayor al segundo que los reste y si no que los sume, mostrar el resultado por document.write.


	var numero1;
	var numero2;
	numero1=prompt("numero1");
	numero2=prompt("numero2");
		if(numero1==numero2)
			{
		numero1*numero2;
			}
		if(numero1<numero1)
			{
		numero1-numero2;
			}
		else
		{
			numero1+numero2;
				}




}//FIN DE LA FUNCIÓN SegundosEnElAire

