let v = function (x) {
    return x * 2;
};

let a = (x) => x * 2;
//console.log(a(20));

function fatorial(n) {
    let fat = 1;
    for (c = n; c > 1; c--) {
        fat *= c;
    }
    return fat;
}

console.log(fatorial(5));
