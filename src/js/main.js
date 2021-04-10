
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



/*
function Encode(MESSAGE = "%") {
    var res = "";
    var pre = -1;

    for (let i = 0; i < MESSAGE.length; i++) {
        for (let j = 6; j >= 0; j--) {
            const bit = MESSAGE.charCodeAt(i) >> j & 1;
            console.log(bit);
            if (bit !== pre) {
                if (-1 !== pre) {
                    res += " ";
                }
                res+= 1 == bit ? "0 " : "00 ";
                pre = bit;
            }
            res+="0"
        }
    }
    console.log(res);
}

Encode() */


r=readline
parseInt(r())
z=r().split(' ')
z.sort()
print(z.reverse().reduce((a,i) =>a+=i)!=0?z.join``:0)

