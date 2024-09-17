frase1 = `otto`;
function comparatore(frase1) {
    let frase2 = frase1.split(``).reverse().join(``).replace(/\W/g, "");
let blocco1 =frase1.replace(/\W/g, "");    
    let blocco2=frase2.replace(/\W/g, "");
console.log(frase2)
    if (blocco1 == blocco2) {
        console.log(`True`);
        
    }
    else{
        console.log(`False`);
    }
    
}

comparatore(frase1)