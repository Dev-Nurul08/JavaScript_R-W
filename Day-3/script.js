let val = 10;
const main = () =>{
    let val = 20;
        const subMain = () =>{
            let val = 30 ;
            childMain();
            subMain();
            console.log(`Value from submain = ${val}`);
            const childMain = () =>{
                let val = 40 ;
                console.log(`Value from Child main = ${val}`);

                
            }
        }
        console.log(`Value from main ${val}`);        
}

main();
console.log(`Value from outside The function ${val}`);
