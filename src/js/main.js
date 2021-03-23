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
// reverse Mode
 const L = parseInt(readline());
 const M = parseInt(readline());
 const N = parseInt(readline());
 const tabsLineOne = [], tabsLineTwo = [];
 tabsLineOne.push(L);
 tabsLineTwo.push(L);
 let valL = L; let valM = L;
 for(let i = 1; i < N; i++){
     valL+=M;
     tabsLineOne.push(valL);
     valM/=M;
     tabsLineTwo.push(valM);
 }
 
 console.log(tabsLineOne.join(' '));
 console.log(tabsLineTwo.join(' '));
 

