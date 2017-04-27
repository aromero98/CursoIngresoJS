 #include <stdio.h>
#include <stdlib.h>
typedef unsigned char t_byte;

//EJERCICIOS PARA MOSTRAR POR PANTALLA
/*int main(void)
{
    t_byte dato0;
    char dato1;
    dato0= -1;//al ser tipo unsigned le resta uno al maximo
    dato1=120;
    if(dato0<dato1)
        printf("mensaje\n");
    return 0;
}*/
int main()
{
    int i;
    int numeros[7]= {2,3,5,7,11,13,17};
    i=0;
    while(i<10)
    {
        i++;
        if(i==1)
            continue;
        if(i%2==0)
            printf("%d\n",numeros[i]);
        if(i==5)
            break;
    }
}
