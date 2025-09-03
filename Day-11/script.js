let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let ans = document.getElementById("ans");
const sum = () =>{
        let val1 = parseFloat(value1.value);
        let val2 = parseFloat(value2.value);

        ans.value = val1 + val2;
        value1.value = '';
        value2.value = '';
}

const sub = () =>{
        let val1 = parseFloat(value1.value);
        let val2 = parseFloat(value2.value);

        ans.value =  val1 - val2;

        value1.value = '';
        value2.value = '';
}

const multy = () =>{
        let val1 = parseFloat(value1.value);
        let val2 = parseFloat(value2.value);

        ans.value = val1 * val2;

        value1.value = '';
        value2.value = '';
}

const div = () =>{
        let val1 = parseFloat(value1.value);
        let val2 = parseFloat(value2.value);

        ans.value = val1 / val2;

        value1.value = '';
        value2.value = '';
}