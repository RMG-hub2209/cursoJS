//Tipo de dato string
//Las variables en JS son dinámicas, es decir, pueden ser reasgnados sus valores
//Con typeof podemos saber que tipo de dato es
var nombre = "carlos";
console.log(typeof nombre);

//tipo numerico
var numero = 1000;
console.log(numero);

//tipo obejct
var objeto = {
    nombre: "juan",
    apellido: "perez"
}
console.log(objeto)

//Tipo boolean (true/false)
//Las variables de tipo booleano se conocen como "banderas"
var bandera = true;
console.log(typeof bandera);

//tipo function
function mifuncion(){}
console.log(typeof mifuncion);

//tipo Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//tipo clase
//tipo clase es una funcion/function

class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof persona);

//tipo undefined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

//tipo null / null = ausencia de valor
//null, realmente es un tipo "object", no es un tipo de dato "null"
var y = null;
console.log(typeof y);

//arreglos
var autos = ['Audi','Ford','BMW'];
console.log(autos);
console.log(typeof autos);

var z = ''
console.log(z);
console.log(typeof z);