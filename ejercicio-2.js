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
     let text = 'la ruta nos aporto otro paso natural'
        let arr = text.replaceAll(' ', '').split('')
        let aciertos = 0, i=0, l = arr.length-1
    
        while(i<arr.length-1){
            if(arr[i] == arr[l]){
                aciertos++
            }
            i++
            l--
        }
    
        if(aciertos == arr.length-1){
            console.log("es palindromo")
        }
        else{
            console.log("no es palindromo")
        }
}
function eje9(){
    function Persona(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    
    
    Persona.prototype.obtDetalles = function () {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}`);
    };
    
    
    function Estudiante(nombre, edad, genero, curso, grupo) {
        Persona.call(this, nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }
    
    
    Estudiante.prototype = Object.create(Persona.prototype);
    Estudiante.prototype.constructor = Estudiante;
    
    
    Estudiante.prototype.registrar = function () {
        console.log(`${this.nombre} ha sido registrado en el curso ${this.curso}, grupo ${this.grupo}.`);
    };
    
    
    function Profesor(nombre, edad, genero, asignatura, nivel) {
        Persona.call(this, nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    
    
    Profesor.prototype = Object.create(Persona.prototype);
    Profesor.prototype.constructor = Profesor;
    
    
    Profesor.prototype.asignar = function () {
        console.log(`${this.nombre} imparte la asignatura ${this.asignatura} en nivel ${this.nivel}.`);
    };
    
    
    function print() {
        const persona1 = new Persona("Carlos", 30, "Masculino");
        persona1.obtDetalles();
    
    
        const estudiante1 = new Estudiante("Ana", 20, "Femenino", "Matemática", "A");
        estudiante1.obtDetalles();
        estudiante1.registrar();
    
    
        const profesor1 = new Profesor("Luis", 45, "Masculino", "Física", "Secundaria");
        profesor1.obtDetalles();
        profesor1.asignar();
    }
    
}
function eje10(){
    var dado1, dado2, result, array = [0,0,0,0,0,0,0,0,0,0,0,0,0]
    for(i=0; i<36000; i++){
        dado1 = parseInt(Math.random() * 7)
        dado2 = parseInt(Math.random() * 7)
        result = dado1 + dado2
        array[result]++
    }
    for(r=2; r<=12; r++){
        console.log(r+":"+array[r])
    }
}
