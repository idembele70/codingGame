const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    const num = parseInt(readline());
    print(parseInt(num.toString(2).replace(/1/,0),2))
}
