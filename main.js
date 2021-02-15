// let inputs = [1, -2, -8, 4, 5];
// let inputs = [-12, -5, -137];
let inputs = [42, -5, 12, 21, 5, 24];
// let inputs = [42, 5, 12, 21, -5, 24];
// let inputs = [-5, -4, -2, 12, -40, 4, 2, 18, 11, 5];
// let inputs = [];

if (inputs.length == 0) {
    console.log(0);
} else {
inputs.sort(function(a,b) {
    a =  Math.abs(a);
    b = Math.abs(b);
    return a-b;
});
if (inputs[0] < 0) {
    if (Math.abs(inputs[0]) == inputs[1]) {
        console.log(inputs[1]);
    } else {
        console.log(inputs[0]);
    }
} else {
    console.log(inputs[0]);
    
}
}

