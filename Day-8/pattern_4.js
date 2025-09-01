let i =1 ;

while(i <= 5){
    let str = '';
    let j= 5;
    while(j >= 6-i ){
        str += `${j} `;
        j--
    }

    console.log(str);
    i++
}