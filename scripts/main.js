// index.js
document.querySelector('form').addEventListener('submit',myFunction);

let data = [];
function myFunction(){
    event.preventDefault();
    let form = document.querySelector('form');

    let names = form.name.value;
    let email = form.email.value;
    let address = form.address.value;
    let amount = form.amount.value;

    let obj = new user_data(names,email, address, amount);
    data.push(obj);

    localStorage.setItem('user',JSON.stringify(data));

    form.name.value = null;
    form.email.value = null;
    form.address.value = null;
    form.amount.value = null;
}

function user_data(names,email, address, amount) {
    this.name = names
    this.email = email
    this.address = address
    this.wallet = amount
}