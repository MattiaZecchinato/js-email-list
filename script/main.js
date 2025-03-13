// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// how many email address user want to generate
const numEmailAddress = 10;
// array for store the email address
// const arrayEmail = [];

// get id of ul list on HTML
const listElement = document.getElementById('mail-list');

for (let i = 0; i < numEmailAddress; i++) {

    // client send a request to server
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail') // library.method(URI)
    .then(response => { // if request is validate by the server

        const result = response.data;
        console.log(result);

        const currentEmail = result.response;
        console.log(currentEmail);

        listElement.innerHTML += `<li>${currentEmail}</li>`;

        // arrayEmail.push(currentEmail);

        // console.log(arrayEmail);
    })
    .catch(error => { // if there is an error with the request

        console.error(error);
    })
}