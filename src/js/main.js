function highAndLow(numbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6") {
  return Math.max.apply(0,[])
}
console.log(highAndLow());

/* bois bandé 0675590818 */
n = 10
let hauteur = 0;

for(let i = 1; i <= n; i++) {
    n -= i;
    hauteur++;
}

console.log(hauteur, n);