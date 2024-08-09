/* 
1. Recupero l'elemento d'interesse all'interno del DOM.

2. Scrivere un programma che stampi in console i numeri da 1 a 100.
    2a. Creare un elemento per contenere i dati creati.

3. Per i numeri che sono sia multipli di 3 che di 5 deve stampare 
“FizzBuzz” al posto del numero.
    
4. Per i multipli di 3 deve stampare “Fizz” al posto del numero.

5. Per i multipli di 5 deve stampare “Buzz” al posto del numero.

6. Stampare i dati elaborati all'interno dell'elemento creato e 
poi inserirlo all'interno dell'elemento d'interesse del DOM.

7. Applicare delle classi per stilizzare gli elementi a seconda del suo contenuto.

*/

/*  Fase di Preparazione */

//1. Recupero l'elemento d'interesse all'interno del DOM.
const card = document.getElementById('boxes');

/* Fase di Elaborazione  Dati */

//2. Scrivere un programma che stampi in console i numeri da 1 a 100.
let i = ''
let text = '';
for (let i = 1; i <= 100; i++) {
    text = i;

    //2a. Creare un elemento per contenere i dati creati.
    const box = document.createElement('div');

    /* 3. Per i numeri che sono sia multipli di 3 che di 5 deve stampare 
    “FizzBuzz” al posto del numero. */
    if (i % 3 == 0 && i % 5 == 0) {
        text = 'fizzbuzz'
    }
    else {

        //4. Per i multipli di 3 deve stampare “Fizz” al posto del numero.
        if (i % 3 == 0) {
            text = 'fizz'
        }

        //5. Per i multipli di 5 deve stampare “Buzz” al posto del numero.
        else if
            (i % 5 == 0) {
            text = 'buzz'
        }
    }
    console.log(text)

    /* 6. Stampare i dati elaborati all'interno dell'elemento creato e 
     poi inserirlo all'interno dell'elemento d'interesse del DOM. */
    box.append(text);
    card.appendChild(box)

}
