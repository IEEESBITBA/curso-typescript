export default class NumeroEsNegativoError extends Error {
    constructor( ) {
        super('El argumento ingresado debe ser un número positivo');
        Object.setPrototypeOf(this, NumeroEsNegativoError.prototype);   // Le indicamos a la instancia que es del tipo error
// Esto pasa debido a cómo Typescript maneja el constructor
    }
}
