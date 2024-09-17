function lunghezza(num) {
    
    for (let i = 0; i < num; i++) {
        if ( i > 99 && i > 1000)
            {
            console.log(`Il numero contiene 3 cifre.`);
            return
        } 
        else if (i > 9 && i < 100) {
            console.log(`Il numero contiene 2 cifre.`);
            return
        }
        else if (i > 0 && i < 10){
            console.log(`il numero contiene 1 cifra`);}
            return
            
        }
        
    }
    
    lunghezza(200)
    
    
    