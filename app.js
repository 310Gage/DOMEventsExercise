const button1 = document.getElementById('one');

button1.onclick = function(){alert(`Dont do that`)}


const h3 = document.querySelector('h3');

h3.addEventListener('mouseover', () => alert('Im only here to annoy you <3'))

const form = document.querySelector('form')

form.addEventListener('submit', () => alert(form.entry.value))