let sym1 = Symbol("sym1");
let sym2 = Symbol("sym1");

console.log(sym1); // Symbol(sym1)
console.log(sym2); // Symbol(sym1)
console.log(sym1 === sym2); // false
console.log(sym1 == sym2); //
