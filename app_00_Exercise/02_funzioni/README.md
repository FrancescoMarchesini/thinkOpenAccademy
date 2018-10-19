**Esercizio1**

sum(1, 10);

0.  Scrive una funzione che accetti come argomenti un **start** ed un **end** e resituisca un array compreso tra il range specificato

1. Scrive una funzione che accetti come come argomento un array e ne restituisca la somma degli elementi

2. Modificare la funzione 1 in modo che accetti un terzo argomento **step** per  la creazione dell'array, la chimata range(1, 10, 2) deve restituire [1, 3, 5, 7, 9 ] deve funzionare anche per gli step negativi ed in mancanza di step il valore è 1

**Esercizio 2**

0. Invertire l'ordine degli elementi di un array, scrivendo la funzione **reverseArray** che accetta come argomneto un vettore  e produce un nuovo vettore che contiente gli stessi elementi in ordine in verso. **reverersArrayInPlace** fa la stessa cosa ma senza creare un nuovo vettore. Alla fine fai il calcolo di quale dei due è piu veloce

1. Scrivere una funzione che converta questa dato un vettore [1, 2, 3] produca una list, ed una funzione che data la lista produca un vettore, inoltre due funzione **preappend** che accetti come argomento un numero ed una lista e appenda il numero al'inizio della lista producendo una nuova lista e una funzione **nth** che acetti una lista ed un nuomero per restiruire l'elelento che si trova nella posizione del numero e undefined se non c'è () ricorsiva

```js
    var List = {
        value = 1,
        rest: {
            value : 2,
            rest : {
                value: 3;
                rest: null;
            }
        }
    };
```