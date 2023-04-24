import IEquipo from "../Interfaces/IEquipo";

export default class Equipo implements IEquipo {
    private readonly _club: string;
    private readonly _edadPromedio: number;
    private readonly _tamanioEquipo: number;
    private readonly _vMPromedioJugador: number;
    private readonly _valorMercado: number;
    private readonly _vmTop18Jugadores: number;

    get club(): string {
        return this._club;
    }

    get edadPromedio(): number {
        return this._edadPromedio;
    }

    get tamanioEquipo(): number {
        return this._tamanioEquipo;
    }

    get vMPromedioJugador(): number {
        return this._vMPromedioJugador;
    }

    get valorMercado(): number {
        return this._valorMercado;
    }

    get vmTop18Jugadores(): number {
        return this._vmTop18Jugadores;
    }

    constructor(club: string, edadPromedio: number, tamanioEquipo: number, valorMercado: number,
                vMPromedioJugador: number, vmTop18Jugadores: number) {
        this._club = club;
        this._edadPromedio = edadPromedio;
        this._tamanioEquipo = tamanioEquipo;
        this._vMPromedioJugador = vMPromedioJugador;
        this._valorMercado = valorMercado;
        this._vmTop18Jugadores = vmTop18Jugadores;
    }

    public toJson(): Partial<IEquipo> {
        return {
            tamanioEquipo: this._tamanioEquipo,
            vMPromedioJugador: this._vMPromedioJugador,
            valorMercado: this._valorMercado,
            vmTop18Jugadores: this._vmTop18Jugadores,
            club: this._club,
            edadPromedio: this._edadPromedio
        }
    }
}
