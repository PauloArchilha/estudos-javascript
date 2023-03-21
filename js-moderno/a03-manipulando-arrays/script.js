// 1. for ... of

for (let item of usPresidents) {
    // console.log(item.president);
}

// 2. forEach
usPresidents.forEach((item, index) => {
    console.log(`${index}: ${item.president} , ${item.party}`);
});

// 3. map
let names = usPresidents.map((item) => item.president);

// 4. filter
let republicans = usPresidents
    .filter((item) => item.party == "Republican")
    .map((item) => item.president);

let democratics = usPresidents
    .filter((item) => item.party == "Democratic")
    .map((item) => item.president);

// 5. find encontra o primeiro elemento
let p1 = usPresidents.find((item) => item.party == "xxxx");

// 6. sort ordena em ordem
usPresidents.sort((i1, i2) => {
    if (i1.birth_year < i2.birth_year) {
        return -1;
    } else if (i1.birth_year > i2.birth_year) {
        return 1;
    } else {
        return 0;
    }
});
