#include <stdio.h>
#include <stdlib.h>
#include "func.h"

int obtenerInt(char mensaje[],char mensajeError[],int maximo,int minimo)
{
    int buffer;
    printf("%s", mensaje);
    scanf("%d",&buffer);
    if(buffer<=minimo && buffer>=maximo)
    {
        printf("error reingrese el mensaje");
        scanf("&d",&buffer);
    }
    return buffer;

}
