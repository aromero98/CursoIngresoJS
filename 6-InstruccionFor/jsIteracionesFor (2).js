function Mostrar()
{
	var contador=0;
	var mascota;
	var contadordemascota;
	var contadordemascotasi;
	var contadordemascotano;
	var tipodemascota;
	var edad;
	var edadmayor;

	for(cont=0;cont<5;cont++)
	{
		mascota=prompt("tiene mascota");
		
		while(mascota!="si" && mascota!="no")
		{
			mascota=prompt("tiene mascota? si o no?");
		}
		if(mascota=="si")
		{
			contadordemascotasi++;
			tipodemascota=prompt("que tipo de mascota es? perro o gato?");
			while(tipodemascota!="perro" && tipodemascota!="gato")
			{
				tipodemascota("no aceptamos esa respuesta, ¿perro o gato?")
			}

		}
		else
		{
			edad=prompt("por favor ingrese su edad");
			edadmayor=edad;

			contadordemascotano++;

		}

	}

//necesito saber el nombre del primer gato que sea de una mujer mayor a 30 años y el gato no tenga mas de cvinco años de edad

}