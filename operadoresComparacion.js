//igual o exactamente igual
//igual (=)
let a = 3, b = 2, c = "3";
let z = (a == b);
console.log(z);

z = (a == c);
console.log(z);
//el operador == solamente revisa que los datos sean iguales o difrerentes, sin importar  tipo
//a es de tipo number, c es un string, sin embargo se entiende que a = 3 y c = "3",
//por lo tanto al evaluar la expresión nos retorna true.

//extrictamente igual
z = (a === c);
console.log(z);
//el operador extrictamente igual (===) evalua la igualdad y tambien el tipo de dato
//como a es number y c es string, aunque los dos valgan 3, no son del mismo tipo, por eso es false.

//diferente de
z = (a != c);
console.log(z);
//al igual que con la expresión igual, se evalua la diferencia entre los valores, pero no los tipos

//exactamente diferente
z = (a !== c);
console.log(z);
//al igual que con la expresión exactamente igual, se evalua la diferencia y los tipos, 
//como son diferentes tipos devuelve falso.

