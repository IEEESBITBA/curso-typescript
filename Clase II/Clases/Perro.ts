interface HistorialClinico {
    operaciones: string[];
    enfermedades: string[];
}

interface Vacunas {
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

class Perro implements IPerro {
    private _nombre: string;
    private _raza: string;
    private _edad: number;
    private _peso: number;
    private _color: string;
    private _comidasFavoritas: string[];
    private _gustaJugar: boolean;
    private _vacunas?: {
        rabia: boolean;
        moquilloCanino: boolean;
        parvo: boolean;
    };
    private _historialClinico: HistorialClinico;
    private _madre?: IPerro;
    private _padre?: IPerro;

    constructor(
        nombre: string,
        raza: string,
        edad: number,
        peso: number,
        color: string,
        comidasFavoritas: string[],
        gustaJugar: boolean,
        vacunas?: Vacunas,
        historialClinico?: HistorialClinico,
        madre?: IPerro,
        padre?: IPerro,
    ) {
        this._nombre = nombre;
        this._raza = raza;
        this._edad = edad;
        this._peso = peso;
        this._color = color;
        this._comidasFavoritas = comidasFavoritas;
        this._gustaJugar = gustaJugar;
        this._vacunas = vacunas;
        this._historialClinico = historialClinico || {operaciones: [], enfermedades: []};
        this._madre = madre;
        this._padre = padre;
    }

    get nombre() {
        return this._nombre;
    }

    get raza() {
        return this._raza;
    }

    get edad() {
        return this._edad;
    }

    get peso() {
        return this._peso;
    }

    get color() {
        return this._color;
    }

    get comidas_favoritas() {
        return this._comidasFavoritas;
    }

    get gusta_jugar() {
        return this._gustaJugar;
    }

    get vacunas() {
        return this._vacunas;
    }

    get historial_clinico() {
        return this._historialClinico;
    }

    get madre() {
        return this._madre;
    }

    get padre() {
        return this._padre;
    }

    crecer() {
        this._edad++;
        this._peso += 2;
    }

    añadirOperacion(operacion: string) {
        if (!!operacion) {
            this._historialClinico.operaciones.push(operacion);
        }
    }

    añadirEnfermedad(enfermedad: string) {
        if (!!enfermedad) {
            this._historialClinico.enfermedades.push(enfermedad)
        }
    }

    añadirInformacionPadre(padre: IPerro) {
        this._padre = padre;
    }

    añadirInformacionMadre(madre: IPerro) {
        this._madre = madre;
    }

    añadirVacunas(vacunas: Vacunas) {
        this._vacunas = vacunas
    }
}

const miPerro = new Perro("Fido", "Golden Retriever", 5, 25, "Dorado", ["carne", "queso"], true, {
    rabia: true,
    moquilloCanino: true,
    parvo: true
}, {
    operaciones: [],
    enfermedades: [],
});

console.log(miPerro.nombre); // imprime "Fido". No hay que escribir get
miPerro.crecer(); // hace que el perro crezca un año y aumente su peso
console.log(miPerro.edad); // imprime 6
miPerro.añadirEnfermedad("gripe canina"); // agrega una enfermedad al historial clínico del perro
