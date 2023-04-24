let a = 1, b = '01';
// Desigualdad estricta
console.log(a !== b) // true
console.log(undefined !== null) // true
console.log(NaN !== NaN) // true
console.log(Infinity !== Infinity) // false
// Desigualdad abstracta
console.log(a == b) // false
console.log(undefined == null) // false
console.log(NaN == NaN) // true
console.log(Infinity == Infinity) // false