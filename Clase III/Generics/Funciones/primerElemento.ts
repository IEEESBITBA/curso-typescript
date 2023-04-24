export default function primerElemento<T>(arr: T[]): T {
    if (arr.length === 0) {
        throw new Error("La lista está vacía");
    }
    return arr[0];
}
