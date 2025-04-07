function eje1(){
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    for(i=0; i<12; i++)
    {
        console.log(meses[i])
    }
}
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
    let p=numero
    for(var i=0; i<numero; i++)
    {
       p = p*(numero-1-i)
       console.log("El factorial de"+numero+"es "+ p) 
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
    let texto = prompt("ingrese texto")
    if (texto === texto.toUpperCase()) {
        console.log("La texto está formada solo por mayúsculas.");
      } else if (texto === texto.toLowerCase()) {
        console.log("La texto está formada solo por minúsculas.");
      } else {
        console.log("La texto es una mezcla de mayúsculas y minúsculas.");
      }
    }
    
function eje8(){
    let texto1 = prompt("Ingrese texto")
    function palindromo(texto){
    let as = texto2.toLowerCase().replace(/[^a-z0-9]/g, "")
    return as === as.split("").reverse().join("");
    }
    if(palindromo(texto1)==true)
    {
        console.log("El texto ingresado es un palindromo")
    }
    else
    {
        console.log("El texto ingresado no es un palindromo")
    }

}
function eje9(){
   
}
function eje10(){
    function lanzarDados() {
        return Math.floor(Math.random() * 6) + 1;
      }
      
      function simularLanzamientos(numLanzamientos) {
        const resultados = Array(11).fill(0); // Sumas posibles: 2-12
        for (let i = 0; i < numLanzamientos; i++) {
          const dado1 = lanzarDados();
          const dado2 = lanzarDados();
          const suma = dado1 + dado2;
          resultados[suma - 2]++; // Ajuste de índice
        }
        return resultados;
      }
      
      const lanzamientos = simularLanzamientos(36000);
      console.log(lanzamientos);
}