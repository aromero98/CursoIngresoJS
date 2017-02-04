/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	alert("la suma es");
	var numero1
	var numero2
	var resultado
	numero1=document.getElementById('numeroUno').value;
    numero2=document.getElementById('numeroDos').value;
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    resultado=numero1+numero2;
    alert(resultado);
	
}

function restar()
{
	alert("la resta es");
	var numero1
	var numero2
	var resultado
	numero1=document.getElementById('numeroUno').value;
    numero2=document.getElementById('numeroDos').value;
    
     resultado=numero1-numero2;
    alert(resultado);
	
}

function multiplicar()
{ 
	alert("la multiplicacion es");
	var numero1
	var numero2
    var resultado
	numero1=document.getElementById('numeroUno').value;
    numero2=document.getElementById('numeroDos').value;
    
     resultado=numero1*numero2;
    alert(resultado);
	
}

function dividir()
{
	alert("la dvicion es");
	var numero1
	var numero2
	var resultado
	numero1=document.getElementById('numeroUno').value;
    numero2=document.getElementById('numeroDos').value;
    
     resultado=numero1/numero2;
    alert(resultado);
	
}

