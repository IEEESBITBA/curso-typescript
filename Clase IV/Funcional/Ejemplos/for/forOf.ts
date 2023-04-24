import IAlumno from "../../Interfaces/IAlumno";
import alumnos from "../../Datos/alumnos";

let alumnosAprobados: IAlumno[] = [];

for (const alumno of alumnos) {
    if (alumno.notaCursada >= 6) {
        alumnosAprobados.push(alumno);
    }
}

console.log(alumnosAprobados);
