let value: any;

value = true; //Ok
value = 35; // Ok
value = "Heisenberg"; // Ok
value = []; // Ok
value = {}; // Ok
value = Math.random; // Ok
value = null; // Ok
value = undefined; // Ok
value = new TypeError() // Ok
value = Symbol("type") // Ok

value.foo.bar // Ok
value.trim() // Ok
value() // Ok
new value() // Ok
value[0][1] // Ok