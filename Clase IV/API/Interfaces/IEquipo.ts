export default interface IEquipo {
    club: string;
    ranking: number;
    pais: string;
    puntajeActual: number
    puntajeAnterior: number;
    cambioPuntaje: number;
    cambioPuntajeSigno: string;
    toJson: () => Partial<IEquipo>;
}
