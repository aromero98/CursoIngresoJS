#include <stdio.h>
#include <stdlib.h>

float promedio(int edad[], int cantidad)
{

    float retornoPromedio;
    int i, suma=0;

    for(i=0; i<cantidad; i++)
    {
        suma=suma+edad[i];
    }
    retornoPromedio=(float)suma/cantidad;

    return retornoPromedio;
}

void ordenar (int vec[],int largo)
{
    int i=0;
    int j=0;
    int aux;


    for(i=0; i<largo-1; i++)
    {
        for(j=i+1; j<largo; j++)
        {
            if(vec[i]<vec[j])
            {
                aux=vec[i];
                vec[i]=vec[j];
                vec[j]=aux;
            }
        }
    }
    for(i=0; i<largo; i++)
    {
        printf("%d \n",vec[i]);

    }
}
 int compactar(int vec [],int largo,int eliminar)
 {
     int i=0;

     for(i=eliminar; i<largo-1; i++)
     {
         vec[i]=vec[i+1];
     }
     int tamanio=largo-1;
     return tamanio;
 }
