//Single Element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('#my-form'))

//Multiple Element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));

// const ul = document.querySelector('.items')
// console.log(ul.firstElementChild.innerHTML)
// console.log(ul.children[0].innerHTML)

const myForm = document.querySelector('#my-form');
const myName = document.querySelector('#name');
const myEmail = document.querySelector('#email');
const output = document.querySelector('#users')
const errorMessage = document.querySelector('.msg')

myForm.addEventListener('submit', addUser)

function addUser(e) {
    e.preventDefault();
    if (myName.value === '' || myEmail.value === '') {
        errorMessage.innerHTML = '<p>Please fill all the fields</p>';
        setTimeout(() => errorMessage.innerHTML = '', 3000)
    }
    else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${myName.value} : ${myEmail.value}`))
        output.appendChild(li)
    } 

    //clear fields
    myName.value = ''
    myEmail.value = ''
}

