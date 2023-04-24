import alumnos from "../../Datos/alumnos";

const notas: number[] = alumnos.map((alumno) => alumno.notaCursada);
const promedio: number = notas.reduce((promedio, nota) => promedio + nota / notas.length, 0);

console.log(promedio);
