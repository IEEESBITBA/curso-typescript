interface HistorialClinico {
    operaciones: string[];
    enfermedades: string[];
}

interface Vacunas{
    rabia: boolean;
    moquilloCanino: boolean;
    parvo: boolean;
}

interface IPerro {
    readonly nombre: string;
    raza: string;
    edad: number;
    peso: number;
    color: string;
    comidas_favoritas: string[];
    gusta_jugar: boolean;
    vacunas?: Vacunas;
    historial_clinico: HistorialClinico;
    madre?: IPerro;
    padre?: IPerro;

    crecer: () => void;
    añadirOperacion: (operacion: string) => void;
    añadirEnfermedad: (enfermedad: string) => void;
    añadirInformacionPadre: (padre: IPerro) => void;
    añadirInformacionMadre: (madre: IPerro) => void;
    añadirVacunas: (vacunas: Vacunas) => void;
}