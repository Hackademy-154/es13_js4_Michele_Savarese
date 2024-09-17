numeri = [5,2,10,25,12,50,1,9,30,48];

function ordinatoredecrescente(numeri) {

    numeri.sort((a,b) => b-a);
console.log(numeri)

}

function ordinatorecrescente(numeri) {

    numeri.sort((a,b) => a-b);
console.log(numeri)

}

ordinatorecrescente(numeri)
ordinatoredecrescente(numeri)