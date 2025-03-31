var valores = [true, 5, false, "hola", "adios",2];
function eje2(){
if(valores[3]>valores[4])
{
    console.log(valores[0]);
    console.log("adios es mayor a hola");
    console.log(valores[1]+valores[5]);
    console.log(valores[1]-valores[5]);
    console.log(valores[1]*valores[5]);
    console.log(valores[1]/valores[5]);
    console.log(valores[1]**valores[5]);
}
}
function eje3(){
    let numero1 =5;
    let numero2 =8;

    if(numero1<numero2) 
        {
        console.log(numero1+" no es mayor que "+numero2);
        }
    if(numero2>0)
         {
        console.log(numero2+" es positivo ");
        }
    if(numero1>0) 
        {
        console.log( numero1+" es negativo o distinto de cero ");
        }
    if(numero1+1<=numero2)
       {
        console.log(" Incrementar en 1 unidad el valor de "+numero1+" no lo hace mayor o igual que "+
        numero2);
       }             
}     
function eje4(){
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'];
    let DNI = prompt("Ingrese el DNI");
    let resto = DNI%23;
    console.log("Su letra es"+letras[resto]);
    
    
}                                                             
function eje5(){
    let numero = prompt("Ingrese un número")
    for(var i=numero; i<=0; i--)
    {
        console.log(numero*(numero-1)); 
        
    }
}
function eje6(){
    let numerito = prompt("Ingrese un numero");
    let resto = numerito%2;
    if(resto==1)
    {
        console.log("El número ingresado es impar")
    }
    else{
        console.log("El número ingresado es par")
    }
}
function eje7(){
    
}
function eje8(){

}
function eje9(){

}
function eje10(){
   let number = [1, 2, 3, 4, 5, 6];
}