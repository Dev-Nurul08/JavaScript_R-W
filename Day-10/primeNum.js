let num = 20;
for (let i = 1; i <= num; i++) {
    let count = 0;
    for (let j = 1; j <= num; j++) {
        if (i % j == 0) {
            count++
        }
    }
    if (count <= 2) {
        console.log(i);
    }
}





