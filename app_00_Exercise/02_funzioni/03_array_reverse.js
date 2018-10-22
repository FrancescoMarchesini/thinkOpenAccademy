/**
 * 0. Invertire l'ordine degli elementi di un array, scrivendo la funzione **reverseArray** 
 * che accetta come argomneto un vettore  e produce un nuovo vettore che contiente gli stessi 
 * elementi in ordine in verso. **reverersArrayInPlace** fa la stessa cosa ma senza creare un nuovo 
 * vettore. Alla fine fai il calcolo di quale dei due è piu veloce
 */

range = (start, stop, step) =>{
    let res = [];

    if (step == 0){
        step = 1;
    }else if(step > 0){
        for( let i = start; i < stop; i = i + step ){
            res.push(i);
        }
    }else if(step < 0){
        step = step * (-1);
        for( let i = stop; i > start; i = i - step ){
            res.push(i);
        }
    }

    return res;
};

 reversArray = (array) =>{
    let newArray = [];
    for(let i = array.length; i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray;
 };

 reversArrayInPlace = (array) =>{

  //  for(let j = 0; j < array.length; j++){   
        for(let i = array.length; i >= 0; i--){
            array[i] = array[i];
        }
   // }
    return array;
 }; 

 let array = range(0, 10, 2);
 console.log(`il vettore di partenza ${array} ed il suo reverso ${reversArray(array)} ed il suo reverso in place ${reversArrayInPlace(array)}`);