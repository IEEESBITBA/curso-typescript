// @ts-ignore
import express from "express";
import {Request, Response} from 'express';
import {StatusCodes} from "http-status-codes";
import EquiposHandler from "./Clases/EquiposHandler";

// localhost:3000
const PORT = 3000;

function main() {
    const equiposHandler = new EquiposHandler();
    const app = express();

    app.listen(PORT, () => console.log("El servidor está corriendo en el puerto " + PORT));

    // POST falso
    // POST localhost:3000/equipos
    app.post('/equipos', async (req: Request, res: Response) => await equiposHandler.leerEquipos(req,res));

    // GET
    // GET localhost:3000/equipos
    app.get('/equipos', (req: Request, res: Response) => equiposHandler.obtenerPrimerosN(req, res));

    // GET localhost:3000/equipos/Bayern%20Munich
    app.get('/equipos/:equipo', (req: Request, res: Response) => equiposHandler.obtenerEquipo(req, res));

    // PARA TODO GET QUE NO SEA LOS DE ARRIBA, LOS VA A IGNORAR
    app.get('*', (req, res) => res.status(StatusCodes.NOT_FOUND).send('URL inválida'));
}

main();
