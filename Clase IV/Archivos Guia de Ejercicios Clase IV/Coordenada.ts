class Coordenada {
    private x: number;
    private y: number;
    private z: number;

    constructor( x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    modulo(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    }

    distanciaManhattan() {
        return this.x + this.y + this.z;
    }

    diferencia(coordenada: Coordenada): Coordenada {
        return new Coordenada( this.x - coordenada.x, this.y - coordenada.y, this.z - coordenada.z);
    }

    divisionPorMagnitud( cantidad: number): Coordenada {
        return new Coordenada(this.x/cantidad, this.y/cantidad, this.z/cantidad);
    }

    divisionPuntoAPunto( coordenada: Coordenada ): Coordenada {
        return new Coordenada(this.x/coordenada.x, this.y/coordenada.y, this.z/coordenada.z);
    }
}

export default Coordenada;
