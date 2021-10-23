let miNumero = "17n";
let edad = Number(miNumero);
if(isNaN(edad)){
    console.log("No es un número");
}
else{
    let resultado = (edad >= 18) ? "Puedes votar" : "Eres muy joven";
    console.log(resultado);
}

