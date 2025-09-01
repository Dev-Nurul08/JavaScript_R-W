let i = 1;

while(i <= 5){
    let str = '';
    let k = 5;
    while(k > i){
        str += "  ";
        k--
    }
    let j = 1; 
    while(j <= i ){
        str += `${j} `;
        j++;
    }
    let l = i-1;
    while(l >= 1 ){
         str += `${l} `;
        l--;
    }
    console.log(str);
    i++;
}