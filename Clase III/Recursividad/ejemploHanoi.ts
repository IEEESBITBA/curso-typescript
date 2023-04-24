function torresDeHanoi(
    n: number,
    desde: string,
    hacia: string,
    auxiliar: string
) {
    if (n === 1) {
        console.log(`Mover disco 1 desde ${desde} hacia ${hacia}`);
    } else {
        torresDeHanoi(n - 1, desde, auxiliar, hacia);
        console.log(`Mover disco ${n} desde ${desde} hacia ${hacia}`);
        torresDeHanoi(n - 1, auxiliar, hacia, desde);
    }
}

// Ejemplo de uso:
torresDeHanoi(3, "A", "B", "C");
