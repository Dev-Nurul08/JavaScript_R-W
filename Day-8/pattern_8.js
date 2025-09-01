let i = 1;

while(i <= 5){
    let str = '';
    let k = 1;
    while(k < i){
        str += "  ";
        k++;
    }

    let j = i;
    while(j <= 5*2-i){
        str += "* ";
        j++;
    }
    console.log(str);
    i++;
}