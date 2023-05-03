import Coordenada from "./Coordenada";

class Particula{
	private posicion: Coordenada;
    private velocidad: Coordenada;
	private masa: number;

	constructor( posicionInicial: Coordenada, velocidadInicial: Coordenada, masa: number) {
		this.posicion = posicionInicial;
        this.velocidad = velocidadInicial;
		this.masa = masa;
    }

    modificarVelocidad(nuevaVelocidad: Coordenada, tiempoDeAceleracion: number): Coordenada {
        const cambioVelocidad = nuevaVelocidad.diferencia(this.velocidad);
        this.velocidad = nuevaVelocidad;
        const aceleracion = cambioVelocidad.divisionPorMagnitud(tiempoDeAceleracion);
        return aceleracion;
    }

    calcularInercia() : number {
        return (this.posicion.modulo() ** 2) * this.masa;
    }

    calcularMomento(): number {
        return this.masa * this.posicion.modulo() * this.velocidad.modulo();
    }

    moverHacia(nuevaPosicion: Coordenada): number {
        const distanciaARecorrer = nuevaPosicion.diferencia(this.posicion);
        this.posicion = nuevaPosicion;
        const tiempo = distanciaARecorrer.divisionPuntoAPunto(this.velocidad);
        return tiempo.distanciaManhattan();
    }

    energiaCinetica(): number {
        return (1/2) * this.masa * this.velocidad.modulo() ** 2;
    }
}

export default Particula;

