function Mostrar()
{

	var contador=0;
	var edad;
	var maximo;
	var minimo;
	var nombre;
	var nombreDelMayor;
	var nombreDelMenor;
	var sexo;
	var nota;
	var notaMinima;
	var sexoNotaMinima;
	var contadorAprobado;
	var cantidadDeFemeninosDesaprobados;
	var cantidadDeMasculinosDesaprobados;
	var promediosDeNotas;
	var acumuladorDeNotas;
	var acumuladorDeEdad;
	var promediosDeEdad;
	var bandera="nadie";
	var nombreDel10;
	var edadDel10;
	var sexoDel10;

	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		edad=prompt("ingrese edad");
		edad=parseInt(edad);
		while (edad>0 || edad<100)
		{
			edad=prompt("ingrese edad");
			edad=parseInt(edad);
		}
		sexo=prompt("ingre su sexo");
		while (sexo!="f" && sexo!="m")
		{
			sexo = prompt("ingrese f ó m .");

		}

		if(sexo="f")
		{
			acumuladorDeEdad=acumuladorDeEdad+edad;
		}
		
		while (nota>0 || nota<11)
		{
			nota=prompt("ingrese nota");
			nota=parseInt(nota); 
		}
		if(nota==10 && bandera=="nadie")
		{
			nombreDel10=nombre;
			edadDel10=edad;
			sexoDel10=sexo;
		}
		//cantidad de personas aprobadas
		
		contador++;
		nombre=prompt("por favor ingrese no");

		if (nota>3)//mostrar cuantas personas aprobaron
		{
			contadorAprobado++;
		}
		if (nota<3 && sexo="f")//mostar f y m desaprobados
		{
			cantidadDeFemeninosDesaprobados++;
		}
		if (nota<3 && sexo="m")
		{
			cantidadDeMasculinosDesaprobados++;
		}
		acumuladorDeNotas=acumuladorDeNotas+notas;
		if(sexo=="f")
			{
				acumuladorDeEdad=acumuladorDeEdad+edad;
				if (nota)
			}



		if(contador==1)
		{
			maximo=edad;
			minimo=edad;
			nombreDelMayor=nombre;
			nombreDelMenor=nombre;
			notaMinima=nota;

		}
		else
		{
			if(edad>maximo)
			{
				maximo=edad;
				nombreDelMayor=nombre;
			}

			if(edad<minimo)
			{
				minimo=edad;
				nombreDelMenor=nombre;
				
			}
			if (notaMinima<nota)
			{
				notaMinima=nota;
			}
		}
		acumuladorDeNotas=promediosDeNotas/contador;
		acumuladorDeEdad=acumuladorDeEdad/contador;


			//promedio de la edad de las mujeres 
			//cantidad de mujeres que aprobaron con nota par y son menores de edad














		respuesta=prompt("para salir teclee no");
	
	}




}//FIN DE LA FUNCIÓN