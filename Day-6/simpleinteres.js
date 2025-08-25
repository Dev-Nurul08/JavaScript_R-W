let p , r , t;

    p=10000;
    r=12;
    t=5;

    let SI = p * r * t / 100 ;
    let net_price = SI + p;

    console.log(`Principe :  ${p}`);
    console.log(`Rate Of Interest : ${r} %`);
    console.log(`Time : ${t} years `);
    console.log(`Simple interest : ${SI}  `);
    console.log(`Principle After ${t} years : ${net_price}`);