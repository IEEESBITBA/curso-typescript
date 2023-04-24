import INodo from "./INodo";

export default interface ICola<T> {
    primerElemento?: INodo<T>;
    adicionarElemento: (elemento: T) => ICola<T>;
    imprimirCola: () => void;
}
