export default interface IEquipo {
    club: string;
    edadPromedio: number;
    tamanioEquipo: number;
    valorMercado: number
    vMPromedioJugador: number;
    vmTop18Jugadores: number;
    toJson: () => Partial<IEquipo>;
}
