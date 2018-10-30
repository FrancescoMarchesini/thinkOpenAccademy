# Redux

Gestore di stati, che va oltre lo stato del singolo componenete ma in generale lo stato dell'applicazione stessa.

## Concetti Basi per la modifica degli stati dell'applicazione

1. Lo stato di un intera applicazione e memerizzata in un unico oggetto
2. non è possibile modificare lo stato dirattamente ma è demandato a redux
3. le modifiche vanno fatte con funzione pure

```js
//funzione pure ovverro non dipende da nessuna varibile o cosa dall'esterno ma è tutto al suo intero
function checkEta(let eta){
    let eta = 30;
    return eta > etaminima
}
```

[redux devTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

*

## ActionTypes

sono variabile che determino che stati può assumere il nostro gestore. Il reducer determina come deve essere lo stato suceessi

**flow chart del movimento di redux**
componenete -> actionCreator(dispace) -> dispacer -> reducers -> modifca stato

mapStatePr


## package json

per aggiornare il package json con i nuvo paccheti installati localmente

```sh
npm install pacchetto --save
``` 

per scegliere la versione del pacchetto
```sh
npm install pacchetto@x.x.x
```