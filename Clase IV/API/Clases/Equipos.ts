import * as dfd from "danfojs-node";
import Equipo from "../Clases/Equipo";

// Los campos (columnas) de la tabla de equipos de futbol. No visualizaremos todos los campos en el ejemplo
enum IndiceDato {
    Ranking, Team, Country, PointsScored, YearChange,
    PPS, SymbolChange
}

export default class Equipos {
    // Danfo tiene problemas con el tipo DataFrame en readExcel
    private _equipos: any;

    public leerEquipos = async (nombreArchivo: string): Promise<void | Error> => {
        try {
            this._equipos = await dfd.readExcel(nombreArchivo);
        } catch (e) {
            throw new Error("Ha fallado la lectura del archivo");
        }
    };

    private crearNuevoEquipo(equipoArreglo: any[]): Partial<Equipo> {
        return new Equipo(equipoArreglo[IndiceDato.Team], equipoArreglo[IndiceDato.Country], equipoArreglo[IndiceDato.PointsScored],
            equipoArreglo[IndiceDato.PPS], equipoArreglo[IndiceDato.Ranking]);
    }

    public obtenerEquipo = (equipo: string): Partial<Equipo> | null => {
        if (this._equipos.Team.str.includes(equipo)) {
            const equipoObtenido = this._equipos.query(this._equipos.Team.eq(equipo));
            const equipoObtenidoDatos = equipoObtenido.values[0];
            return this.crearNuevoEquipo(equipoObtenidoDatos).toJson();
        }
        return null;
    };

    public obtenerPrimerosN = (n: number): Partial<Equipo>[] => {
        const equiposOrdenados = this._equipos.sortValues("Ranking", {ascending: true});
        const primerosNDatos = equiposOrdenados.values.slice(0, n);
        return primerosNDatos.map((equipoDatos: any[]) => this.crearNuevoEquipo(equipoDatos).toJson());
    };
}
