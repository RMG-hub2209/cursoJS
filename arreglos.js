/**existen varios tipos de sintáxis para crear arreglos (arrays)
 * con el operador "new" y la clase Array, sin embargo está es una sintaxis antigua
 * ya no se usa
*/
// let autos = new Array ('BMW, Mercedez-Benz, Audi');
//tambien con "const"
const autos = ['BMW','Mercedes-Benz','Audi'];
console.log(autos);

console.log(autos[0]);

for (let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos [i]);
}

/*así se pueden modificar los elementos de un arreglo*/
autos[1] = 'MercedesBenz';
console.log(autos);

/*con push, agregamos más elementos al arreglo*/
autos.push('McLaren');
console.log(autos);

// con autos.length podemos agregar tambien valores al sigueinte índice en el arreglo
autos [autos.length] = 'RUF';

/*tambien podemos agregar elementos específicamente a un índice, pero esto dejaría espacios en blanco
entre los índices*/
autos[6] = 'Porsche';
console.log(autos);

//para preguntar si es un arreglo podemos usar Array.isArray()
console.log(Array.isArray(autos));

// tambien podemos usar instanceof
console.log(autos instanceof Array);
