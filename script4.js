
const btn = document.querySelector("#button");

btn.addEventListener("click" , () => {
    const userName = document.querySelector("#input");
    const save = localStorage.setItem('user', userName.value);
})

const Name = document.querySelector('#Name');

const text = localStorage.getItem('user');


const div = document.createElement('div');
div.className = 'div';

const displayed = document.createElement("p");
displayed.textContent = text
displayed.className = 'displayed_name'

div.append(displayed);
Name.append(div);
