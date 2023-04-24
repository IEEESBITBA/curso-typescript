import IAlumnoModificado from "../../Interfaces/IAlumnoModificado";
import alumnos from "../../Datos/alumnos";
import IAlumno from "../../Interfaces/IAlumno";

const alumnosModificados: readonly IAlumnoModificado[] = alumnos.map( (alumno: IAlumno) =>
                                                                ({ ...alumno, ... {aprobado: alumno.notaCursada > 6}})
);

console.log(alumnosModificados);

export default alumnosModificados;
