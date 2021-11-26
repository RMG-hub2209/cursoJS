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
