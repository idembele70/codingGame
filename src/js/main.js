/* let str = "", res = '';
function CaractereEnBinaire(char = 'Ch') {
    for (const i of char) {
        str += char.charCodeAt(i).toString(2);
        console.log(str);
    }
    const reg0 = /0{1,}|1{1,}/gi;
    str = str.match(reg0).map(x => {
        return x[0] == 1 ? "0 " + "0".repeat(x.length) : "00 " + "0".repeat(x.length)
    }).join(' ');
    res+= str;
    return res
}
console.log(CaractereEnBinaire());
console.log("%".charCodeAt().toString(2));  
  */


/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 r=readline
 n=parseInt(r())
 c=n
 for (i=0;i<n;i++){
 s=r();if(s.match(/-<|>-/g));else c--}print(c*100/n+'%')

