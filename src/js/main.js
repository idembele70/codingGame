function highAndLow(numbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6") {
  return Math.max.apply(0, []);
}
/* console.log(highAndLow()); */

/* bois bandé 0675590818 */
n = 10;
let hauteur = 0;

for (let i = 1; i <= n; i++) {
  n -= i;
  hauteur++;
}


/*
CONSIGNE :
  Ligne 1 : Speed (Vmax) KM/H
  Ligne 2 : nombre Feux
  Ligne 3+ : Distance M + durée du feu S
  
  EXEMPLE 1 :
  speed : 50
  nb Feux : 1
  distance : 200 + durée : 15 
  (200/15*3.6) = 48


  EXEMPLE 2 :
  speed : 50
  nb Feux : 1
  distance : 200 + durée : 10
  (200 / 10) * 3.6) = 72;
  */
console.log((200 / 10) * 3.6);
console.log(5);