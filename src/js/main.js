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
  distance : 200 + durée de feu : 15 
  (200/15*3.6) = 48
  (200 / x * 3.6) = 50 ===> 200 / 50 * 3.6 = x = 14
  (200 / x * 3.6) = 50 ===> 200 / 20 * 3.6 = x = x


  EXEMPLE 2 :
  speed : 50
  nb Feux : 1
  distance : 200 + durée de feu : 10
  (200 / 10) * 3.6) = 72;
  (200 / x * 3.6) = 50 ===> 200 / 50 * 3.6 = x = 14
  (200 / x * 3.6) = 50 ===> 200 / 20 * 3.6 = x = x


  Speculation Reponse
  variables VitesseMoyenne, compteur
  on calcul TempsPourDepasseFeux =  distance / speed * 3.6
    si TempsPourDepasseFeux > duréeFeux 
    alors vitesseMoyenne += speed
    compteur++
    sinonSi TempsPourDepasseFeux < duréeFeux 
    alors {
      TempsPourDepasseFeux =(Math.ceil(TempsPourDepasseFeux/10))*10
      const vNeccessaire = d / TempsPourDepasseFeux * 3.6
      TempsPourDepasseFeux += vNeccessaire
      compteur++
    }
  retourne vMoyenne / compteur
  */

console.log((200 / 20) * 3.6);
console.log(5);
