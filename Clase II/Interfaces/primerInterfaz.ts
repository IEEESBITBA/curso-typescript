interface IPerro { // Estamos definiendo al tipo de objeto Perro
    nombre: string;
    raza: string;
    edad: number;
    peso: number;
    color: string;
    comidasFavoritas: string[];
    gustaJugar: boolean;
    vacunas?: {
        rabia: boolean;
        moquilloCanino: boolean;
        parvo: boolean;
    }
}
