function Mostrar()
{
 	var cont=0;
 	var numerorandom;
 	var cont1=0;
 	var cont2=0;
 	var cont3=0;
 	var cont4=0;
 	var cont5=0;
 	var cont6=0;
 	var cont7=0;
 	var cont8=0;
 	var cont9=0;
 	var cont10=0;


 	for(;cont<100000;cont++)                        //siempre debe aparecer los dos puntos y coma
 	{
 		
 		cont++;
 		numerorandom= Math.floor((Math.random() * 10) + 1);
 		//console.log(numerorandom);
		
		switch(numerorandom)
		{
			case 1:
				cont1++;
				break;
			case 2:
				cont2++;
				break
			case 3:
				cont3++;
				break;
			case 4:
				cont4++;
				break;
			case 5:
				cont5++;
				break;
			case 6:
				cont6++;
				break;
			if(cont==7)
			{
				continue;
			}
			case 7:
				cont7
				
			case 8:
				cont8++;
				break;
			case 9:
				cont9++;
				break;
			case 10:
				cont10++;
				break;
		}

	}
	console.log("la cantidad de 1 es: "+cont1*100/cont+"%");
	console.log("la cantidad de 2 es: "+cont2*100/cont+"%");
	console.log("la cantidad de 3 es: "+cont3*100/cont+"%");
	console.log("la cantidad de 4 es: "+cont4*100/cont+"%");
	console.log("la cantidad de 5 es: "+cont5*100/cont+"%");
	console.log("la cantidad de 6 es: "+cont6*100/cont+"%");
	console.log("la cantidad de 7 es: "+cont7*100/cont+"%");
	console.log("la cantidad de 8 es: "+cont8*100/cont+"%");
	console.log("la cantidad de 9 es: "+cont9*100/cont+"%");
	console.log("la cantidad de 10 es: "+cont10*100/cont+"%");
	

}
