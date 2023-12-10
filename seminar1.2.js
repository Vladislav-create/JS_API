const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const cloneButton = document.getElementById('cloneButton');
const container = document.getElementById('container');

addButton.addEventListener('click', ()=>{
    const count = container.childElementCount + 1
    container.insertAdjacentHTML('beforeend', `<div class="box">${count}</div>`)
})

removeButton.addEventListener('click', ()=>{
    if (container.childElementCount > 3) {
        container.lastChild.remove()
    }
})

cloneButton.addEventListener('click', ()=> {
    const lastBox = container.lastElementChild;
    const clone = lastBox.cloneNode(true);
    container.appendChild(clone);
})