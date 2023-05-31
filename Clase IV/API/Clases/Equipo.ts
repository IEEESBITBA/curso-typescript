import IEquipo from "../Interfaces/IEquipo";

export default class Equipo implements IEquipo {
    private readonly _club: string;
    private readonly _pais: string;
    private readonly _puntajeActual: number;
    private readonly _puntajeAnterior: number;
    private readonly _ranking: number;

    constructor(club: string, pais: string, puntajeActual: number, puntajeAnterior: number, ranking: number) {
        this._club = club;
        this._pais = pais;
        this._puntajeActual = puntajeActual;
        this._puntajeAnterior = puntajeAnterior;
        this._ranking = ranking;
    }

    get club(): string {
        return this._club;
    }

    get pais(): string {
        return  this._pais;
    }

    get puntajeActual(): number {
        return this._puntajeActual;
    }

    get ranking(): number {
        return this._ranking;
    }

    get puntajeAnterior(): number {
        return this._puntajeAnterior;
    }

    get cambioPuntaje(): number {
        return Math.abs(this.puntajeActual - this.puntajeAnterior);
    }

    get cambioPuntajeSigno(): string {
        const cambioPuntaje = this.cambioPuntaje;
        return cambioPuntaje > 0 ? '+': (cambioPuntaje < 0 ? '-' : '');
    }

    toJson(): Partial<IEquipo> {
        return {
            club: this._club,
            pais: this._pais,
            puntajeActual: this._puntajeActual,
            puntajeAnterior: this._puntajeAnterior,
            cambioPuntaje: this.cambioPuntaje,
            ranking: this._ranking,
            cambioPuntajeSigno: this.cambioPuntajeSigno,
        };
    }

}
