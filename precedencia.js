//la precedncia solo se trata de la jerarquía de los operadores para ejecutar diferentes expresiones
//Tenemos la imágen de la precendia en la carpeta de este curso
//Las expresiones se leen de izquierda a derecha

let a = 2, b = 6, c = 4, d = 3;
let z = a * b + c / d;
console.log(z);

z = a + c * d - b;
console.log(z);

//el paréntesis tiene la preferencia o jerarquía más alta

z = (a + c) * d - b;
console.log(z);

//primero se ejecutó la operación entre paréntesis 2+4=6,
//luego se multiplicó por d, ya que la multiplicación tiene preferencia sobre suma o resta; 6*3=18,
//finalmente, se le restó el valor de b; 18-6=12