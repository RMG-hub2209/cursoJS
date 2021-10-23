let numero = 4;

if (numero == 1) {
    console.log("Numero 1");
}
else if(numero == 2){
    console.log("Numero 2");
}
else if(numero == 3){
    console.log("Numero 3");
}
else if(numero == 4){
    console.log("Numero 4");
}

//Ejercicio estación del año
let mes = 1;
let estacion;

if (mes == 12 || mes == 1 || mes == 2){
    estacion = "Invierno"
}
else if (mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera"
}
console.log(estacion)

//Ejercicio Hora del día
let hora = 18;
let mensaje;
if (hora >= 0 && hora <= 6){
    mensaje = "Durmiendo";
}
else if (hora >= 6 && hora <=11){
    mensaje = "Buenos días";
}
else if (hora >= 12 && hora <= 18){
    mensaje = "Buenas tardes";
}
else if (hora >= 19 && hora <= 24){
    mensaje = "Buenas noches"
}
console.log(mensaje);

//Sentencia Switch
//Switch hace comparaciones estrictas, es decir valores y tipos
let number = 2;
let numberText;

switch(number){
    case 1:
        numberText = 'Número uno';
        break;
    case 2:
        numberText = 'Número dos';
        break;
    default:
        numberText = 'Caso no encontrado';
}
console.log(numberText);