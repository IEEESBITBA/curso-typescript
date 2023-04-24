import IAlumno from "../../Interfaces/IAlumno";
import alumnos from "../../Datos/alumnos";

let alumnosAprobados: IAlumno[] = [];
for( let i: number = 0; i < alumnos.length; i++ ) {
    if (alumnos[i].notaCursada >= 6) {
        alumnosAprobados.push(alumnos[i]);
    }
}

console.log(alumnosAprobados);
