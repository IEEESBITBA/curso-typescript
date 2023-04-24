import Polinomica from "../Funciones/Clases/Polinomica";
import IFuncion from "../Funciones/Interfaces/IFuncion";
import ArgumentoNoEsNumeroError from "./Prompt/Clases/ArgumentoNoEsNumeroError";
import NumeroEsNegativoError from "./Prompt/Clases/NumeroEsNegativoError";

const prompt = require("prompt-sync")({ sigint: true });



const leerNumero = (): number | never => {
    const nuevoNumero = parseFloat(prompt('Por favor, ingrese un número para evaluar la función: '));
    if( isNaN(nuevoNumero) ) {
        throw new ArgumentoNoEsNumeroError;
    }
    if (nuevoNumero < 0) {
        throw new NumeroEsNegativoError;
    }
    return nuevoNumero;
}

const main = (): void => {
    let funcionPoderosa: IFuncion = new Polinomica([0,0,1]) // f(x) = x^2
    let numeros: number[] = [];
    let nuevoNumero: number;
    while( numeros.length < 5 ) {
        try {
            nuevoNumero = leerNumero();
            numeros.push(nuevoNumero);
        } catch (e: any) {
            if( e instanceof  ArgumentoNoEsNumeroError ) {
                console.log('Ha ingresado un valor incorrecto.');
            }
            if(e instanceof NumeroEsNegativoError) {
                console.log('Ha ingresado un valor erróneo.');
            }
        }
    }

    for( let numero of numeros) {
        console.log(funcionPoderosa.evaluar(numero));
    }
}

main();
