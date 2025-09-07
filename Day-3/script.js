let val = 10;
const main = () =>{
    let val = 20;
        const subMain = () =>{
            let val = 30 ;
            const childMain = () =>{
                let val = 40 ;
                console.log(`Value from Child main = ${val}`);
            }
            childMain();
            console.log(`Value from sub main ${val}`);        
        }
        subMain();
        console.log(`Value from main ${val}`);        
}

main();
console.log(`Value from outside The function ${val}`);
