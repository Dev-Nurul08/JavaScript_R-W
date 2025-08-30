let i=1 ;

while(i <= 5){
    let str = '';
    let j = 6 - i ;
    while(j <= 5){
        str += `${j}`;
        j++;
    }
    console.log(str);
    i++;
}