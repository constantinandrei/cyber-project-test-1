// creao la variabile 'readline' fhe userò per prendere gli imput dell'utente
const readline = require("readline-sync")


  //funzione che prende in ingresso due numeri e una stringha, ritorna la stringa se il primo numero divisibile per il secondo,

  function outputModulo(num1, num2, str){
    if (num1 % num2 === 0){
      // ho aggiunto lo spazio per la stampa in console
      return " " + str
    }

    return ''
  }

// funzione che prende tre numeri e due stringhe e richiama la funzione outputModulo n volte e stampa le stringhe in output
// il primo numero decide quante volte stampare il ciclo
// il secondo numero decide ogni quante riche stampare la prima stringa e lo stesso comportamento ha la seconda stringa

function printResults(fine, num1, str1, num2, str2){
  for (let i = 1; i <= fine; i++){
    console.log(parseInt(i) + outputModulo(i, num1, str1) + outputModulo(i, num2, str2))
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
    printResults(fine, 3, str3, 5, str5)
}


//funzione che chiede all'utente i valori delle variabili e controlla il parametro "fine" che sia un numero e che sia maggiore di zero
// il parametro "tipo" non presenta particolari problemi, il programma funziona anche se il campo è lasciato vuoto
function program(){
  let looping = true
  let fine
  while (looping){
    fine = readline.question("Inserisci il valore della variabile \"fine\": ")
    if (isNaN(parseInt(fine))){
      console.log("Non è stato inserito un numero valido")
    } else if (parseInt(fine) < 1){
      console.log("Il numero inserito deve essere positivo")
    } else {
      looping = false
    }
  }
  
  let tipo = readline.question("Inserisci il valore della variabile \"tipo\": ")
  app(fine, tipo)
}
    
//avvio app
program()
