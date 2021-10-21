let a = 3, b = 2;
let z = a + b;
console.log("El resultado de la suma es: " + z);

z = a - b;
console.log("Resultado de la resta es: " + z);

z = a * b;
console.log("Resultado de la multiplicación es: " + z);
 
z = a / b;
console.log("Resultado de la división es: " + z);

z = a % b;//Residuo/modulo
console.log("Resultado del modulo(residuo) es: " + z);

z = a ** b;
console.log("Resultado del exponente es: " + z);

//incrementos y decrementos
//incrementos
//pre-incremento
z = ++a;
console.log(a);
console.log(z);

//post-incremento
z = b++;
console.log(b);
console.log(z);
//el post-incremento primero aigna el valor de b(2) a z, y va a hacer el incremento la siguiente vez que se 
//utilice la variable b, por eso, z vale 2, después se hace el incremento en 1 de b, valiendo 3.

//decrementos
//pre-decremento
z = --a;
console.log(a);
console.log(z);
//aquí, el valor de a era 4, por el incremento del ejercicio anterior, entonces se hace el decremento
//respecto a ese valor

//post-decremento
z = b--;
console.log(b);
console.log(z);
//igual que con el pre-decremento, se toma el valor previo de b(3), el cual primero se asigna a z,
//despues se hace el decremento pendiente, modificando el valor de b a 2.
