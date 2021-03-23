let str = "", res = '';
function CaractereEnBinaire(caratere = 'Ch') {
    for (const i of caratere) {
        str += caratere.charCodeAt(i).toString(2);
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
 