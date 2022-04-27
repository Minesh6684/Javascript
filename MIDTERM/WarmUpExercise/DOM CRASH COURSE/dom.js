const heading = document.querySelector('#heading');
console.log(heading.innerText) //innerText takes into consideration of applied style to the element
console.log(heading.textContent) //textContent ignores applied style

console.log(heading.innerHTML) // returns all elements along with all nodes present