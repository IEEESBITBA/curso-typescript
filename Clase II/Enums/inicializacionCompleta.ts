enum Color {
    Rojo = "ROJO",   // "ROJO"
    Verde = "VERDE", // "VERDE"
    Azul = "AZUL"    // "AZUL"
}

console.log(Color.Rojo) // "ROJO"

const miColorFavorito = Color.Rojo;
console.log(Color.Rojo === miColorFavorito ); // true siempre y cuando no se modifique la constante miColorFavorito