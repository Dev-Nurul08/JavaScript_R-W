let i= 1 ;

while(i <=5){
    let str ='';
    let j = 6 -i ;
    while(j >= 1){
        str += `${j}`;
        j--;
    }
    i++;
    console.log(str);
}