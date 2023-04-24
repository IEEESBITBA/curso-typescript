import Equipos from "./Equipos";
import {Request, Response} from 'express';
import {ReasonPhrases, StatusCodes} from "http-status-codes";

export default class EquiposHandler {
    private _equipos = new Equipos();

    public leerEquipos = async (req: Request, res: Response): Promise<void> => {
        try {
            await this._equipos.leerEquipos('./equipos_mas_valiosos.xlsx');
            res.status(StatusCodes.CREATED).send();
        } catch (e) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
        }
    }

    public obtenerEquipo = (req: Request, res: Response): void => {
        const equipo = req.params.equipo.toString();
        try {
            const datosEquipo = this._equipos.obtenerEquipo(equipo);
            res.status(StatusCodes.OK).send(datosEquipo);
        } catch (e) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
        }
    }

    public obtenerPrimerosN = (req: Request, res: Response): void => {
        if (!!req.query.N) {
            try {
                const N = parseInt(<string>req.query.N);
                const datosEquipo = this._equipos.obtenerPrimerosN(N);
                if (datosEquipo == null) {
                    res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
                } else {
                    res.status(StatusCodes.OK).send(datosEquipo);
                }
            } catch (e) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
            }
        } else {
            res.status(StatusCodes.BAD_REQUEST).send('Cantidad de equipos (N) faltante');
        }
    }

    public obtenerEdadPromedioPrimerosN = (req: Request, res: Response): void => {
        if (!!req.query.N) {
            try {
                const N = parseInt(<string>req.query.N);
                const edadPromedioPrimerosN = this._equipos.obtenerEdadPromedioPrimerosN(N);
                res.status(StatusCodes.OK).send({edadPromedioPrimerosN: edadPromedioPrimerosN});
            } catch (e) {
                console.log(e)
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
            }
        } else {
            res.status(StatusCodes.BAD_REQUEST).send('Cantidad de equipos (N) faltante');
        }
    }
}
