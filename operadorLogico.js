let a = 5;
let valMin = 0, valMax = 10;

//El operador AND se simboliza con &&
if( a >= valMin && a <= valMax){
    console.log("Dentro de rango");
}
else{
    console.log("Fuera de rango");
}

//El operador OR se simboliza con ||
let vacaciones = false, diaDescanso = false;
if(vacaciones || diaDescanso){
    console.log("El padre puede asistir al juego");
}
else{
    console.log("El padre está ocupado");
}

//Operador ternario
//el operador funciona con 
// (?) puede significar una división entre veradero
//(:) una division entre falso
let resultado = (5<10) ? "Verdadero" : "falso";
console.log(resultado);

/*Lo que significa este código es que si 5 es menor a 10 ? => verdadero, entonces se le asigna verdadero a
resultado; : => si fuera falso, asignale falso a resultado*/
 
