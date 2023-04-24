let diasDeSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
// Primera forma
for(let i = 0; i < diasDeSemana.length; i++){
    console.log(diasDeSemana[i]);
}
// Segunda forma
for(let diaDeSemana of diasDeSemana){
    console.log(diaDeSemana);
}
// Tercera forma
for(let i in diasDeSemana){
    console.log(diasDeSemana[i]);
}