let numeros: number[] = [];

try{
    numeros[5].toFixed();
} catch( e: any ) { // Solo puede ser del tipo any o unknown. Si no se conoce a qué clase pertenece el error, dejar en any
    console.log("Se produjo un error: " + e.message);
}

console.log("El programa terminó de ejecutarse.");
