import Combinacion from "./Combinacion";

export default class Producto extends Combinacion {
    evaluar(x: number): number {
        return this.f.evaluar(x)*this.g.evaluar(x); // f(x)*g(x)
    }
}
