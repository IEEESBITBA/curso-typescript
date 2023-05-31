import express from "express";
import {Request, Response} from 'express';
import {StatusCodes} from "http-status-codes";
import EquiposHandler from "./Clases/EquiposHandler";

const PORT = 3000;

async function main() {
    const equiposHandler = new EquiposHandler();
    const app = express();

    app.listen(PORT, () => console.log("El servidor está corriendo en el puerto " + PORT));

    // POST falso
    app.post('/equipos', async (req: Request, res: Response) => await equiposHandler.leerEquipos(req,res));

    // GET
    app.get('/equipos', (req: Request, res: Response) => equiposHandler.obtenerPrimerosN(req, res));
    app.get('/equipos/:equipo', (req: Request, res: Response) => equiposHandler.obtenerEquipo(req, res));
    app.get('*', (req, res) => res.status(StatusCodes.NOT_FOUND).send('URL inválida'));
}

main();
