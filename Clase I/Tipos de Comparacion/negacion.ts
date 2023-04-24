console.log(0, !0, !!0); // 0, true, false
console.log(1, !1, !!1); // 1, false, true
console.log(null, !null, !!null); // null, true, false
console.log(undefined, !undefined !!undefined); // undefined, true, false
console.log("", !"", !!""); // "", true, false ("" es la representación del string vacío)
console.log("hola", !"hola", !!"hola") // hola, false, true