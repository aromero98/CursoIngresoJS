/*1) Desarrollar una biblioteca "utn.h" que posea funciones para pedirle al usuario el ingreso de datos

getInt()
getFloat()
getChar()
*/

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int getInt(char mensaje[])
{
    int auxiliar;
    printf("%s",mensaje);
    scanf("%d",&auxiliar);
    return auxiliar;
}

float getFloat(char mensaje[])
{
    int auxiliar;
    printf("%s",mensaje);
    scanf("%f",&auxiliar);
    return auxiliar;
}

char getChar(char mensaje[])
{
    int auxiliar;
    printf("%s",mensaje);
    fflush(stdin);
    scanf("%c",&auxiliar);
    return auxiliar;
}

char getNumeroAleatorio(int desde,int hasta,int iniciar)
{
        if(iniciar)
        {
            srand(time(NULL));
            return desde+(rand()%(hasta+1-desde));
        }
}
