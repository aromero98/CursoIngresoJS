#include <stdio.h>
#include <stdlib.h>

int main()
{
    int edadMaxima;
    int edadMinima;
    int edadAuxiliar;
    int i;
    int acumulador;
    int promedio;


    printf("ingrese su edad por favor\n");
    scanf("%d",&edadAuxiliar );
    edadMaxima = edadAuxiliar;
    edadMinima = edadAuxiliar;
    acumulador = edadAuxiliar;

    for(i=0; i<3; i++)
    {
        printf("ingrese su edad por favor\n");
        scanf("%d",&edadAuxiliar );
        acumulador= acumulador+edadAuxiliar;

        if(edadAuxiliar>edadMaxima)
        {
            edadMaxima=edadAuxiliar;
        }
        else if(edadAuxiliar<edadMinima)
        {
            edadMinima=edadAuxiliar;
        }
        promedio = acumulador/5;
    }
    printf("la edad maxima es %i\n",edadMaxima);
    printf("la edad minima es:%i\n", edadMinima);
    printf("la edad promedio es: %i\n", promedio);
}

