/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	/*var nombre;
	var edad;
	nombre=document.getElementById('elNombre').value;
	edad=document.getElementById('laEdad').value;
	alert("Usted se llama "+ nombre+" y tiene "+edad+" años");*/

	var nombre;
	var edad;
	var NuevoNombre;
	var NuevaEdad;
	var sueldo;
	var signoDelSodiaco;
	contador=0;
	

	nombre=prompt("ingrese nombre");
	edad=prompt("ingrese edad");
  	document.getElementById('elNombre').value=nombre;
  	document.getElementById('laEdad').value=edad;
  	NuevoNombre=document.getElementById('elNombre').value;
  	NuevaEdad=document.getElementById("laEdad").value;
  	NuevaEdad=parseInt(NuevaEdad);
  	while(NuevaEdad<0 || NuevaEdad>100)
  	{
  		NuevaEdad=prompt("ingrese su edad");
  		NuevaEdad=parseInt(NuevaEdad);
  	}
  	console.log(NuevaEdad);
  	if(NuevaEdad<13)
  	{
  		alert("es un niño");
  	}
  	else
  	{
  		if(NuevaEdad<18)
  		{
  			alert("es un adolescente");
  		}
  		else
  		{
  			sueldo=prompt("ingrese sueldo");
  			sueldo= parseInt(sueldo);
  			while(sueldo<1000 || sueldo>10000)
  			{
  				sueldo=prompt("ingrese sueldo");
  				sueldo= parseInt(sueldo);
  			}

  			if(NuevaEdad<21)
  			{
  				alert("es mayor de edad")
  			}
  			else
  			{
  				if(NuevaEdad<60)
  				{
  					alert("es adulto");
  				}
  				else
  				{
  					alert("es un viejo");
  				}
  			}
  		}
  			

  	}//if(edad<13)
  	signoDelSodiaco=prompt("ingrese su signo");
  	alert(signoDelSodiaco);
  	switch(signoDelSodiaco)
  	{
  		case "gemenis":
  		case "scorpio":
  		alert("suerte en el amor");
  		break;
  		default:
  		alert("suerte en el juego");
  	}


  	

}

