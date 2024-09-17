

function calcolatre(valore) {
    for (let i = 1; i <= valore; i++) {
if (i % 15 == 0 ) {
    console.log(`fizzBuzz`)
}
     else if (i % 5 == 0 ) {
            console.log(`Buzz`)
    }

     else if (i % 3 ==0)
     {
        console.log(`Fizz`);
     }

     else{
        console.log(i)
     }
}
}


calcolatre(20)