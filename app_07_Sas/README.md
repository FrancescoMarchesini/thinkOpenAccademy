# SAS e CSS

## Pseudo Classi

## Media queries

si possono utilizzare al posto di boostrap per la reattivitità definendo a priori le caratteristiche
degli schermi, e giostrarti all'interno

## Boostrap

Sistema a griglia per l'impaginazione, classi

## Pre Processori del CSS

Piu famosi sono il sass ed il less, il vantaggio dei pre processori è la possibilità di scrivere template ed utilizzare calcoli. I pre-processori anno alcune differenze:

0. **varibili**.
   $my-background : blanck
1. **Mixins**
   funzioni in css
2. **Operation**
3. **Ereditarietà**
   possibilità di definire classi innestati grazie ad una sintassi specifica

Il sas si può estender con l'estensione .sas.css, la differenza tra sas e less è il fatto che il sas non ha parantesi ma formattazione speficia(like: python). utilizzare Sas

Esempio di utilizzo dei pre-processori

definire progetto con file common con tutti gli import dei sotto file css, extend

## Esempio Con React.Js

```sh
 npm install -g create-react-app
 create-react-app hello-world
 cd hello-world
 npm install sass-loader node-sass --save-dev
 git add .
 git commit -m "fare un commit verso bo per bo" 
 npm run eject
 npm start
```

in webpack.config.config.dev.js add in(nel file in allegato è gia configurato):

**loaders**

```js
{
    test: /\.scss$/,
    include: paths.appSrc,
    loaders:["css-loader","style-loader","sass-loader"]
},
```

**exclude**
```js
{
   /\.sass$/,/\.scss$/
}
```
