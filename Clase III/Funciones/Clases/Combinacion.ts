import IFuncion from "../Interfaces/IFuncion";

export default abstract class Combinacion implements IFuncion {
    protected f: IFuncion;
    protected g: IFuncion;

    constructor(f: IFuncion, g: IFuncion) {
        this.f = f;
        this.g = g;
    }

    abstract evaluar(x: number): number;
}
