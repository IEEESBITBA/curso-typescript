export default interface INodo<T> {
    elemento: T;
    siguiente?: INodo<T>;
}
