# React

Nasce dalla necissita di facebook di avere grandi performance a livello di user experience per interpretazione e visualizzazione dei dati

## Motivi per cui scegliere react

1. Scalabilità: scafolding, la struttura deve essere riutilizzabile per n applicazioni

2. Virtual Dom : reinterpretazione del DOM, che si basa su cicli di vita

3. Js Nativo

4. Possibilità di intergrare un gestore di stati (**redux**) : ovvero step di vita, es: comunico dopo il loggin che l'applicazione è loggata e quindi sono dentro

5. React Native, creazine app mobile, covertire il codice javascipt in nativo

## Dipendenze

* **Babel**

Programma che trascive il codice di una versione di javascript in un'altra in automatico

* **ES6**


## Cose veramente importanti

* **Moduli**

```js
import {function} from "....";  
export default function(a, b, c);
```

* **Costanti**

```js
    let x;
    const y;
```

* **array function**

non è piu necessario usare il this per la scrittura di funzioni anomime

```js
getData(data => {
    this.data = data;
})
```

* **map** 

funzione [JSX](https://jsx.github.io/) è il modo in cui noi scrivimao un componente react, ovverro javascrit e hml

```js
return(
    { 
        array.map((item, i) =>
            <div key={i}>
                <MenuItem item={item}/>
            </div>
        )
    }
);
```

## WebPack

è un budler ovvero un processo che unisce un insieme di modulu di codice(e le loro dipendenze), in un singolo file(o gruppi di file), in ordine corretto

permette di avere due tipi di rilascio **sviluppo** e **Produzione** 

```sh
npm build app
```

crea l'applicazione vera e propria che si trova nella cartella **dist**

## Come é fatto un componente

react si appoggia jsx.

```js
    import React, {Component} from "react";

    class MainContainer extendes Components{
        /*lo stato iniziale del componente*/
        constructor(props){
            super(props);
            this.state =  {initialState: 'bellaLi'};
        }

        /**qui in messo ci sono i cicli di vita del componente importati dalla lib react*/

        render(){
            return(
                <div>Yo bella li</div>
            )
        }
    }

    export default MainContainer;
```

struttura base

```
src
│   README.md
│   index.js o index.hmtl (entry point dell'applicazione)    
│
└───Components
│      button.js
│      form.js
|      navbar.js    
|   
└───Containers 
|      paginLogin.js
|      secondPage.js
|      ErrorPage.js
|      button.js
│     
└───Styles
|    │   paginLogin.scss
|    │   secondPage.scss
|    |   ErrorPage.scss
|    |   yo.scss
|    │   button.scss
│     
└───utils
     │   paginLogin.js
     │   secondPage.js
         ErrorPage.js

```


## Virtual DOM

é un astrazione del dom che permette di modifiche rapide senza l'interazione diretta al mio DOM. 
Applicazione parte il dom statico è stampato del browser
Voglio cambiare lo stato di un componente.
Allora di quell'elemento viene fatta una copia astratta con cui se ne fa una copia profondae vengono invertiti i valori tra l'attuale ed il virtaule del DOM

## Cicli di Vita

è inportante perchè nel momento in cui renderizziamo un componente questo deve essere intercettatato in ogni momento della sua vita, e su ognuno di questi fare delle azioni

**Macro momenti**

* **Mounting** :
    * *constructor* : faccio nascere l'oggetto
    * *ComponentWillMount* : è vivio ma non è stato ancora renderizzato
    * *Render* (diff tra virtual dom e dom) * a sintassi va infondo
    * *ComponentDidMount* (append Dopo la prima renderizazione) , chiamate che avvengo quando carico un componente(window.onload())

* **Updating** Eventi che avvegono quando io ricevo dei dati o voglio fare un'azione

    * *ComponentWillReciveProps*: abbiamo accesso alle nextProps e alla prevProvs, se le prevPros sono uguali alle nextPropos non faccio niente
    * *shouldComponentApdate* : permettere di decidere se l'aggiornamento dei dati deve avvenire in background oppure scatenerare il virtual dom, es aggiornamento del token (true o false)
    * *ComponentWillUpdate* : il momento prima che il componenete vada aggiornato
    * *render*
    * *componentDidUpdate*: dopo che il componenete è andato in update

* **Umounting**

## State And Props

Ovveero i metodi con cui gestire ed agirire sugli stati di vita di un componente. Lo stato è un oggetto e viene instanziato con il **setState()** e scatana il ciclo di render

**Props()** servono per far parlare un componente con un altro, o meglio il padre con il figlio. Posso mutare lo stato del compient figlio tramite le props
**this.props.ilnome.lostato**