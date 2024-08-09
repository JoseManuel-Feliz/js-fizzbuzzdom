/* 
1. Recupero l'elemento d'interesse all'interno del DOM.

2. Scrivere un programma che stampi in console i numeri da 1 a 100.
    2a. Creare un elemento per contenere i dati creati.
    2b. Applicare delle classi per stilizzare gli elementi a seconda del suo contenuto.


3. Per i numeri che sono sia multipli di 3 che di 5 deve stampare 
“FizzBuzz” al posto del numero.
    3a. Applicare delle classi per stilizzare gli elementi a seconda 
    del suo contenuto.

4. Per i multipli di 3 deve stampare “Fizz” al posto del numero.
    4a.Applicare delle classi per stilizzare gli elementi a seconda 
    del suo contenuto.

5. Per i multipli di 5 deve stampare “Buzz” al posto del numero.
    5a. Applicare delle classi per stilizzare gli elementi a seconda 
    del suo contenuto.

6. Stampare i dati elaborati all'interno dell'elemento creato e 
poi inserirlo all'interno dell'elemento d'interesse del DOM.

*/

/*  Fase di Preparazione */

//1. Recupero l'elemento d'interesse all'interno del DOM.
const card = document.getElementById('boxes');

/* Fase di Elaborazione  Dati */

//2. Scrivere un programma che stampi in console i numeri da 1 a 100.
for (let i = 1; i <= 100; i++) {
    let text = i;

    //2a. Creare un elemento per contenere i dati creati.
    const box = document.createElement('div');
    box.id = 'box'
    box.classList.add('number', 'rounded-4')
    /* 3. Per i numeri che sono sia multipli di 3 che di 5 deve stampare 
    “FizzBuzz” al posto del numero. */
    if (i % 3 == 0 && i % 5 == 0) {
        text = 'FizzBuzz'
        box.classList.add('FizzBuzz')
        box.classList.remove('number')
    }
    else {

        //4. Per i multipli di 3 deve stampare “Fizz” al posto del numero.
        if (i % 3 == 0) {
            text = 'Fizz'
            box.classList.add('Fizz')
            box.classList.remove('number')
        }

        //5. Per i multipli di 5 deve stampare “Buzz” al posto del numero.
        else if
            (i % 5 == 0) {
            text = 'Buzz'
            box.classList.add('Buzz')
            box.classList.remove('number')
        }
    }
    console.log(text)

    /* 6. Stampare i dati elaborati all'interno dell'elemento creato e 
     poi inserirlo all'interno dell'elemento d'interesse del DOM. */
    box.append(text);
    card.appendChild(box)

}
