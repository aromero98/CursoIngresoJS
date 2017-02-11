function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

	switch (mesDelAño)
	{
		case "Enero":
		case "Febero":
		case "Marzo":
   		case "Abril":
  		case "Mayo":
       	case "Junio":
        	alert("ya pasamos frio, ahora hace calor");
        	break;
        case "Julio":
        case "Agosto":
        	alert("abrigate que hace frio");
        	break;
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
         	alert("falta para el invierno");
        	break;



	}
	




}//FIN DE LA FUNCIÓN