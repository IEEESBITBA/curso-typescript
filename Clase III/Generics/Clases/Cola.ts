import INodo from "../Interfaces/INodo";
import ICola from "../Interfaces/ICola";

export default class Cola<T> implements ICola<T> {
    primerElemento?: INodo<T>;

    adicionarElemento(elemento: T): Cola<T> {
        let nodoActual = this.primerElemento;

        if( !nodoActual ) {
            this.primerElemento = {
                elemento: elemento,
                siguiente: this.primerElemento
            };
        } else {
            while( !!nodoActual ) {
                if( !nodoActual.siguiente) {
                    nodoActual.siguiente = {
                        elemento: elemento,
                        siguiente: nodoActual.siguiente
                    };
                    nodoActual = nodoActual.siguiente.siguiente;
                } else {
                    nodoActual = nodoActual.siguiente;
                }
            }
        }
        return this;
    }

    imprimirCola(): void {
        let nodoActual = this.primerElemento;
        while( !!nodoActual ) {
            console.log(nodoActual.elemento)
            nodoActual = nodoActual.siguiente;
        }
    }
}
