import IFuncion from "../Interfaces/IFuncion";

export default class Polinomica implements IFuncion {
    private pol: number[]; // pol[n-1]*x^n + … + pol[1]*x + pol[0]

    constructor( pol: number []) {
        this.pol = pol;
    }

    evaluar(x: number): number {
        let res = 0;
        for( let i = 0; i < this.pol.length; i++ ) {
            res += Math.pow(x, i) * this.pol[i];
        }
        return res;
    }

}
