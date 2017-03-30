#include <stdio.h>
#include <stdlib.h>
#include "func.h"
#define MAX 100

int main()
{
    int i, edad[MAX];
    char respuesta;
    int nroMax=0;
    int nroMin=0;
    int opcion;
    int seguir='s';
    do
    {

        printf("1 - cargar las edades\n");
        printf("2 - el numero maximo\n");
        printf("3 - el numero minimo\n");
        printf("4 - cargar los promedios\n");
        printf("5 - salir");
        scanf("%d", &opcion);

        switch(opcion)
        {
        case 1:
            for(i=0; i<MAX; i++)
            {

                printf("\nIngrese la edad de la persona %d: ", i);
                scanf("%d", &edad[i]);

                printf("\n\nDesea seguir ingresando? [s/n]");
                fflush(stdin);
                scanf("%c", &respuesta);
                if(i==0)
                {
                    nroMax=edad[i];
                    nroMin=edad[i];
                }
                else
                {
                    if(edad[i]>nroMax)
                    {
                        nroMax=edad[i];
                    }
                    else if(nroMin>edad[i])
                    {
                        nroMin=edad[i];
                    }

                }

                if(respuesta!='s'&&respuesta!='S')
                {
                    break;
                }
            }
                break;
            case 2:
                printf("el numero maximo es: %d", nroMax);
                system("pause");
                break;
            case 3:
                printf("el numero minimo es: %d", nroMin);
                system("pause");
                break;
            case 4:
                printf("\nEl promedio de las edades ingresadas es %.2f", promedio(edad, i+1));
                system("pause");
                break;
            case 5:
                seguir='n';
                break;


            }


            system("cls");
        }while(seguir=='s');



    return 0;
}
