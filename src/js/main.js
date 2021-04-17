
/* const MESSAGE = "%%"
let str = "", res = '', strNew = "",tr ="";

for (let j = 0; j < MESSAGE.length; j++) {
    str += MESSAGE.charCodeAt(j).toString(2);
    if (str.length < 7) {
        for (let i = 6; i >= 0; i--) {
            strNew += str.charAt(i) !== "" ? str.charAt(i) : 0;
        }
    } else {
        strNew = str;
    }
    tr+=strNew;
    strNew ="";
}
console.log(tr);
// console.log(strNew);
const reg0 = /0{1,}|1{1,}/gi;
str = tr.match(reg0).map(x => {
    return x[0] == 1 ? "0 " + "0".repeat(x.length) : "00 " + "0".repeat(x.length)
}).join(' ');
res += str;
console.log(res);
console.log('%'.charAt(0).toString(2)); */

const Message = '%'
let res = "";
let pre = -1;
const myBit = Message.charCodeAt(0).toString(2).padStart(7, 0);
for (let i = 6; i >= 0; i--) {
    const bit = Message.charCodeAt(0) >> i & 1;
    if (bit != pre) {
        if (-1 !== pre) {
            res += " ";
        }
        res += 1 == bit ? "0 " : "00 ";
        pre = bit
    } res +=0
}
let nbr = 25;
let nbr2 = (25).toString(2);
console.log(nbr2);
console.log(parseInt("01100",2));
console.log(nbr >> 1); 

