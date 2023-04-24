import Combinacion from "./Combinacion";

export default class Composicion extends Combinacion {
    evaluar(x: number): number {
        return this.f.evaluar(this.g.evaluar(x)); // f(g(x))
    }
}
