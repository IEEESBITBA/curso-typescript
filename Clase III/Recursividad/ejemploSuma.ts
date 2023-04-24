function sumaPrimerosN(n: number): number {
    if (n === 0) {
        return 0;
    } else {
        return n + sumaPrimerosN(n - 1);
    }
}

console.log(sumaPrimerosN(5)); // 15
