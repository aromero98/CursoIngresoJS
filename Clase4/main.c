#include <stdio.h>
#include <stdlib.h>
#include "func.h"
#define MAX 100

int main()
{
    int i=5;
    int edad[MAX] = {22,11,33,55,66};
    char respuesta;
    int buffer;
    int tamanio=5;
    int j=0;
    int aux;
    ordenar(edad,5 );
    tamanio=compactar(edad,tamanio,2);

    /*for(i=0; i<MAX;i++){

        printf("\nIngrese la edad de la persona %d: ", i);
        scanf("%d", &edad[i]);

        printf("\n\nDesea seguir ingresando? [s/n]");
        fflush(stdin);
        scanf("%c", &respuesta);

        if(respuesta!='s'&&respuesta!='S'){
            break;
        }

        system("cls");
    }*/
    for(i=0;i<tamanio;i++)
    {
        printf("%d\n",edad[i]);
    }
    printf("\nEl promedio de las edades ingresadas es %.2f", promedio(edad, i+1));

    return 0;
}
