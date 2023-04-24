import Cola from "./Clases/Cola";

const testCola = () => {
    const colaDeNumeros = new Cola<number>();
    colaDeNumeros.adicionarElemento(1).adicionarElemento(2)
                    .adicionarElemento(27).adicionarElemento(40);
    colaDeNumeros.imprimirCola(); // 1 2 27 40
}

testCola();
