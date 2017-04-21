#include <stdio.h>
#include <stdlib.h>
struct S_Pelicula
{
    char titulo[50];
    int year;
    char nacionalidad[50];

    int idDirector;
    int idPelicula;
    int flagLibre;
};
typedef struct S_Director director;

struct S_Director
{
    char nombre[50];
    char fechaDeNac [15];
    char PaisOrigen [20];
    int id;
    int flagLibre;
};
typedef struct S_Pelicula pelicula;

void cargarDirector(director directores [],int index,int id)
{
    printf("nombre director");
    scanf("%s",directores[index].nombre);

    printf("pais director");
    scanf("%s",directores[index].PaisOrigen);

    printf("fecha de nacimiento director");
    scanf("%s",directores[index].fechaDeNac);
    directores[index].id=id;
    directores[index].flagLibre=0; //ocupamos el lugar del flag
}
void cargarPelicula(pelicula peliculas[],int index,int id)
{
    printf("titulo");
    scanf("%s",peliculas[index].titulo);

    printf("nacionalidad");
    scanf("%s",peliculas[index].nacionalidad);

    printf("director");
    scanf("%d",peliculas[index].idDirector);
}

int buscarLugarVacioEnListaDirectores(director directores[],int len)//len tamaño de una lista
{
    int i;
    for(i=0; i<len; i++)
    {
        if(directores[i].flagLibre ==1)
        {
            return i;
        }

    }
    return -1;
}

int buscarLugarVacioEnListaPelicula(pelicula peliculas[],int len)//len tamaño de una lista
{
    int i;
    for(i=0; i<len; i++)
    {
        if(peliculas[i].flagLibre ==1)
        {
            return i;
        }

    }
    return -1;
}

int buscarDirectoresPorElIdEnLaListaDirectores(director directores[], int len, int idAbuscar)//para buscar o no el id
{
   int i;
   for(i=0; i<len;i++)
   {
       if(directores[i].id==idAbuscar); //se busca si el id esta
       return i;
   }
   return -1;
}


int main()
{
    int i;
    printf("Hello world!\n");
    director directores [500];
    pelicula peliculas [1000];
    int contadorGeneradorIdDirector=0;
    int contadorGeneradorIdPelicula=0;
    //hacer funciones para inicializar
    for(i=0;i<500;i++)
    {
        directores[i].flagLibre=1;
    }
    for(i=0;i<1000;i++)
    {
        peliculas[i].flagLibre=1;
    }
return 0;
}

