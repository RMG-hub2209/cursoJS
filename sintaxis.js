//Actualmente ya no se usa la palabra reservada "var" para definir una variable
var nombre = 'juan';
console.log(nombre);
//Se puede asignar una literal (las literales son los valores de las variables),
//sin definirla previamente
nombre = "juan";
console.log(nombre); 

//La forma correcta de definir una variable es mediante la palabra reservada "let" o "const", segúnsea el caso
let usuario = "rafa";
console.log(usuario);


const apellido = "Perez";
apellido = "Lara"

//marca un error, debido a que ya se asignó la literal "Perez" como una constatnte
console.log(typeof apellido);
