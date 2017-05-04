/*2) Diseñar un programa para jugar a adivinar un número entre 0 y 100.
El juego tiene que dar pistas de si el número introducido por el jugador está por encima o por debajo.
El juego termina cuando se adivina el número o se decide terminar de jugar ingresando un número negativo.
Permitir jugar tantas veces como lo desee el jugador y al salir mostrar su mejor puntuación.
Utilizar la biblioteca del punto 1.*/
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numeroOculto;
    int numeroIngresado;
    int jugar;
    int respuesta = "s";



    respuesta="s";
    while(respuesta=="s")
    {
        numeroOculto = getNumeroAleatorio(1,100,1);
        jugar=1;
        while(jugar==1)
        {
            numeroIngresado= getInt("debe ingresar un numero entre (0-99)\n");
            if(numeroIngresado<0)
            {
                jugar=0;
            }
            else if(numeroIngresado==numeroOculto)
            {
                printf("felciitaciones cande ganaste\n");
                jugar=0;
            }
            else if(numeroIngresado<numeroOculto)
            {
                printf("casi cande,mas grande es el numero\n");
            }
            else if(numeroIngresado>numeroOculto)
            {
                printf("casi cande,mas chico es el numero\n");
            }


        }
         respuesta= getChar("desea jugar nuevamente (s/n)\n");


    }


}
