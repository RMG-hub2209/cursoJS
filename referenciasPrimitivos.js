/*un parámetro son las variables que se le dan a una función
un argumento son los valores que van a tomar esas variables*/


let resultado = sumarTodo(2, 5, 7, 9, 10);
console.log (resultado);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}

// no le entendí ni mierda a este ejercicio

//paso por valor en funciones

//Tipo primitivo

let x = 10;

function cambiarValor(a){
    a = 20
}

cambiarValor (x);
console.log(x);

// Básicamente, hemos asignado un valor a x de 10, luego, en el método cambiarValor, 
// se ha tratado de cambiar el valor con el parámetro "a", pero es una función, al tratar de invocarla 
// el valor de x no se puede cambiar, porque ya le fue asignado un valor previamente.

//Paso por referencia

const persona = {
    nombre: 'Juan',
    apellido: 'Pérez'
}

console.log(persona);

function cambiarValorobjeto(p1){
    p1.nombre = 'Carlos',
    p1.apellido = 'Salinas'
}

cambiarValorobjeto(persona);
console.log(persona);

//en este caso, hemos creado un objeto, con cualidades y atributos que es persona,
// creamos el método o función para cambiar el valor de los atributos de ese objeto 
// que es cambiarValorobjeto, al pasar como parametro persona en el metodo cambiarValorobjeto,
// pudimos cambiar el valor de los atributos de ese objeto

