import IFuncion from "../Interfaces/IFuncion";

export enum FuncionesTrigonometricas {
    Sin, Cos, Tan
}

export default class Trigonometrica implements IFuncion {
    private funcionTrigonometrica: FuncionesTrigonometricas ;

    constructor( funcionTrigonometrica: FuncionesTrigonometricas ) {
        this.funcionTrigonometrica = funcionTrigonometrica;
    }

    evaluar(x: number): number {
        switch(this.funcionTrigonometrica) {
            case FuncionesTrigonometricas.Sin: return Math.sin(x);
            case FuncionesTrigonometricas.Cos: return Math.cos(x);
            case FuncionesTrigonometricas.Tan: return Math.tan(x);
        }
    }
}
