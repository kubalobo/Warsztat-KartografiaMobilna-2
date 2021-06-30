
const hello = "Cześć";
let firstName = "Ala";

console.log(hello + " " + firstName);

firstName = "Ola";

console.log(hello + " " + firstName + "🐈🐈🐈");




function showContact(contactText) {
    const contactSpace = document.querySelector('#contactSpace');
    contactSpace.innerHTML = contactText;
}
