let value: unknown;

let value1: unknown = value; // Ok
let value2: any = value; // Ok
let value3: boolean = value; // Error
let value4: number = value; // Error
let value5: string = value; // Error
let value6: object = value; // Error
let value7: any[] = value; // Error
let value8: Function = value; // Error

value.foo.bar // Error
value.trim() // Error
value() // Error
new value() // Error
value[0][1] // Error

function manejarUnknown(valor: unknown) {
    if (typeof valor=== "string") {
        // valor está ahora acotado al tipo 'string'
        console.log(valor.toUpperCase());
    } else if (valor instanceof Date) {
        // valor está ahora acotado al tipo 'Date'
        console.log(valor.getFullYear());
    } else {
        // valor es todavía del tipo 'unknown'
        console.log("Tipo desconocido:", valor);
    }
} // Esta función valida el tipo de datos antes de hacer uso de las propiedades y métodos específicos para cada tipo de datos. Ese sería el uso correcto de unknown