import primerElemento from "./Funciones/primerElemento";

const numeros = [1, 2, 3, 4];
const primerNumero = primerElemento(numeros );
console.log(primerNumero) // devuelve 1

const cadenas = ["hola", "mundo"];
const primerCadena = primerElemento(cadenas );
console.log(primerCadena) // devuelve "hola"

interface Persona {
    nombre: string;
    edad: number;
}

const personas: Persona[] = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
];


const primerPersona = primerElemento(personas);
console.log(primerPersona) // devuelve { nombre: "Juan", edad: 25 }
