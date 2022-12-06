// creao il la variabile 'rl' fhe userò per prendere gli imput dell'utente
const { Console } = require("console");
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });


  //funzione che prende in ingresso un nuero e due stringhe, ritorna il numero se non è divisibile per 3 e 5, 
  //oppure ritorna la stringa(se divisibile sia per 3 che per 5 unisce le stringhe)

  function outputModulo(num, str3, str5){
    let finalString = num.toString() + " "
    if (num % 3 === 0 && num % 5 === 0){
        finalString += str3 + " " + str5
    } else if (num % 3 === 0){
        finalString += str3
    } else if (num % 5 === 0){
        finalString += str5
    }
    return finalString
  }

// funzione che prende un numero e due stringhe e richiama la funzione outputModulo n volte e stampa le stringhe in output

function printResults(fine, str3, str5){
  for (let i = 1; i <= fine; i++){
    console.log(outputModulo(i, str3, str5))
  }
}

// funzione che risolve l'esercizio:
//ha due variabili già definite con i valori "dot" e "cross"
//prende il primo parametro e lo passa alla funzione output modulo
//prima di invocare la funzione, se il secondo paramatro è "D" cambia i valori in "mar" e "print"

function app(fine, tipo){
    let str3 = "dot"
    let str5 = "cross"

    if (tipo === "D"){
        str3 = "mar"
        str5 = "print"
    }
    printResults(fine, str3, str5)
}

function checkNan(){
    rl.question("Inserisci il valore della variabile \"fine\"", function (answer) {
        if (isNaN(parseInt(answer))){
          console.log("Inserire un numero valido")
          checkNan()
        } else if (parseInt(answer) < 1){
            console.log("Inserire un numero positivo")
            checkNan()
        }
        else {
            return answer
        }
    })
    
    
}

//funzione che chiede all'utente i valori delle variabili e controlla il parametro "fine" che sia un numero e che sia maggiore di zero
// il parametro "tipo" non presenta particolari problemi, il programma funziona anche se il campo è lasciato vuoto

app(checkNan(), "dfd")
