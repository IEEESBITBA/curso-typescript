function sumaArreglo(arregloNumeros: number[]): number{
    let suma = 0;
    for(let i = 0; i < arregloNumeros.length; i++){
        suma += arregloNumeros[i]
    }
    return suma;
}

function main(): void{
    let numeros= [1, 5, 1, 5, 1, 5, 1, 5, 1, 5];
    console.log(sumaArreglo(numeros)); // 30
}

main();