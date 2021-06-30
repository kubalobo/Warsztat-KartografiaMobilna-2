
const hello = "Cześć";
let firstName = "Ala";

console.log(hello + " " + firstName);

firstName = "Ola";

console.log(hello + " " + firstName + "🐈🐈🐈");




function showPhone() {
    console.log('☎');
    const phone = 'Telefon: 123-234-345';
    const contactSpace = document.querySelector('#contactSpace');
    contactSpace.innerHTML = phone;
}