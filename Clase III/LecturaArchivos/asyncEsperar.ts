function esperar(ms: number): Promise<void> {
    // @ts-ignore
    return new Promise(resolve => setTimeout(resolve, ms));
}

// @ts-ignore
async function ejemploAsincronico(): Promise<void> {
    console.log("Inicio de la función");

    // Esperamos 1 segundo antes de continuar con la ejecución
    await esperar(10000);

    console.log("Fin de la función");
}

ejemploAsincronico();
