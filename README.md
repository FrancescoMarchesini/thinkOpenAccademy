# GIT

Un sistema di controllo versione distribuito o decentralizzato che permette di tener traccia delle modifche e delle versioni apportate al codice sorgente del software, senza la necessità di dover utilizzare un server centerale

## Stati possibili di un file

1. **untrated**: il file non fa parte del progetto
2. **unModified**: il file è seguito(nel db) èd è uguale all'ultimo commit fatto
3. **modified**:  il file è stato modificato ma non ancora stato salvato
4. **stage**: è una via di mezzo prima del commit finale, se cambio il contenuto del file
        ritorna nello stato modificato, server per raggruppare i file che vogliono essere commitati successivamente
5. **commit**: il file fa ora parte del progetto, ed è l'ultima versione

## Configurazione inizialie

```sh
git config --global user.name "nome"
git config --global user.email "email"
git config --global core.editor "editor"
```

## Cartelle e File all'interno del Repository locale

* **.git** : è il db locale dove vengono salvati i file prima del push sul server

## Comandi

* Scaricare il repository in locale nella posizione in cui è stato lanciato il terminale

    ```sh
    git clone "uri delle repo"
    ```
* Vedere lo stato dei file ( **stage/untrated/modified/unmodified** ) all'interno del repo
    ```sh
    git status
    ```
* Aggiungere un file alla **stage** area
    ```sh
    git add "nome file"
    ```
* Togliere un file appenda aggiunto e farlo tornare **untracked**
    ```sh
    git rm --cached "nome file"
    ```
* Fare il commit del file specificando all'interno dell'editor il messaggio, una volta scritto salvare e chiudere il file
    ```sh
    git commit "nome file"
    or
    git commit -m "qui mettere il commennto in locale" "nome file"
    ```
* mettere il nome del file che deve essere ignorato da git
    ```sh
    echo "nome file da ignorare" >> .gitignore
    ```
## Branch
* Fare un branch dal mastert
    ```sh
    git branch "nome del branch"
    ```
* spostarsi dal mastest al branch
    ```sh
    git chekout "nome del branch"
    ```
## Merge
    * unire il branch al master da chiamare dal master

```sh
git merge "nome del branch"
```