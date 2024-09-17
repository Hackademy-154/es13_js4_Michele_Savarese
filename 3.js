numeri = [1,3,5,6,12,15,20]

function mediatore(numeri) {
    let sommanumeri=  numeri.reduce((acc,n) => acc + n);
    let media = sommanumeri / numeri.length;
    console.log(`La media è ${media}`)
    for (let i = 0; i < numeri.length; i++) {
        if (numeri[i] < media) {
            console.log(`Valori inferiori alla media ${numeri[i]}`)
            
        }else if (numeri[i] > media) {
            console.log(`Valori Superiori alla media ${numeri[i]}`)
        }
        else {
            console.log(`i numeri sono pari alla media`)
        }
    }

}

mediatore(numeri)