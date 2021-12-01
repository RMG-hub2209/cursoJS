// Tambien se puede llamar la función ANTES de declararla, a esto se le llama HOISTING
// miFuncion(5, 5);

// Declarando la función
// function miFuncion (a, b){
//     console.log("Suma: " + (a+b));    
// }

// Lamando la función
// miFuncion(2, 3);

function miFuncion (a, b){
    return a + b;
}

let resultado = (miFuncion(9, 1));
console.log(resultado);

//Con return, regresa el valor de una función, el cual, en este caso fue asignado a otra variable

//tambien se pueden declarar funciones anónimas o de tipo expresión
let sumar = function(c, d){return c + d};

resultados = sumar(9, 1);
console.log (resultados);

//Funciones Self Invoking
(function (){
    console.log("Ejecutando la función");
})();

//Las funciones anónimas que se mandan a llamar a sí mismas no se pueden reutilizar,
//ya que no tiene ningún nombre, o están asignadas a ninguna variable
//Tambien se le pueden agregar valores en los paréntesis del final, y agregando los parámetros al principio

(function (a, b){
    console.log("Ejecutando la función: "+ (a + b));
})(4, 6);

//Funciones tipo flecha
//utiliza la palabra const para que no se cambie el valor de la variable posteriormente
const funcionFlecha = (e, f) => e + f;
resultado = funcionFlecha(5, 6);
console.log(resultado);



