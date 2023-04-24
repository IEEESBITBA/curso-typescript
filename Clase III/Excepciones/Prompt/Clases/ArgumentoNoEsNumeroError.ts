export default class ArgumentoNoEsNumeroError extends Error {
    constructor( ) {
        super('El argumento ingresado debe ser un número');
        Object.setPrototypeOf(this, ArgumentoNoEsNumeroError.prototype); // Le indicamos a la instancia que es del tipo error
        // Esto pasa debido a cómo Typescript maneja el constructor
    }
}
