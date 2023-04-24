import IAlumno from "../../Interfaces/IAlumno";
import alumnos from "../../Datos/alumnos";

let alumnosAprobados: IAlumno[] = [];

alumnos.forEach(alumno => {
    if (alumno.notaCursada >= 6) {
        alumnosAprobados.push(alumno);
    }
});

console.log(alumnosAprobados);
