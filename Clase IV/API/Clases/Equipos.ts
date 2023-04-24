import * as dfd from 'danfojs-node';
import Equipo from "../Clases/Equipo";

// Los campos (columnas) de la tabla de equipos de futbol. No visualizaremos todos los campos en el ejemplo
enum IndiceDato {
    Club, Liga, EdadPromedio, TamanioEquipo, ValorMercado,
    VMPromedioJugador, VMTop18Jugadores, PorcentajeVMTop18Jugadores
}

export default class Equipos {
    // Danfo tiene problemas con el tipo DataFrame en readExcel
    private _equipos: any;

    public leerEquipos = async (nombreArchivo: string): Promise<void | Error> => {
        try {
            this._equipos = await dfd.readExcel(nombreArchivo);
        } catch (e) {
            console.log(e)
            throw new Error('Ha fallado la lectura del archivo');
        }
    }

    private crearNuevoEquipo(equipoArreglo: any[]): Equipo {
        return new Equipo(equipoArreglo[IndiceDato.Club], equipoArreglo[IndiceDato.EdadPromedio],
            equipoArreglo[IndiceDato.TamanioEquipo], equipoArreglo[IndiceDato.ValorMercado],
            equipoArreglo[IndiceDato.VMPromedioJugador], equipoArreglo[IndiceDato.VMTop18Jugadores])
    }

    public obtenerEquipo = (equipo: string): Equipo | null => {
        if (this._equipos.Club.str.includes(equipo)) {
            const equipoObtenido = this._equipos.query(this._equipos.Club.eq(equipo));
            const equipoObtenidoDatos = equipoObtenido.values[0];
            return this.crearNuevoEquipo(equipoObtenidoDatos);
        }
        return null;
    }

    public obtenerPrimerosN = (n: number): Equipo[] => {
        const equiposOrdenados = this._equipos.sortValues("ValorMercado(m)", {ascending: false});
        const primerosNDatos = equiposOrdenados.values.slice(0, n);
        return primerosNDatos.map((equipoDatos: any[]) => this.crearNuevoEquipo(equipoDatos));
    }

    public obtenerEdadPromedioPrimerosN = (n: number): number => {
        const equiposOrdenados = this._equipos.sortValues("ValorMercado(m)", {ascending: false});
        const primerosNDatos = equiposOrdenados.values.slice(0, n);
        const primerosN = primerosNDatos.map((equipoDatos: any[]) => this.crearNuevoEquipo(equipoDatos));

        return primerosN.reduce(((acum: number, actual: Equipo) => acum + actual.edadPromedio), 0);
    }
}
