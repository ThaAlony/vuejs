const btn = document.querySelector('button')
const list= document.querySelector('ul')
const input = document.querySelector('input')

function addGoal() {
    const v = input.value
    const listItem = document.createElement('li')
    listItem.textContent = v
    list.appendChild(listItem)

    input.value=''
}

btn.addEventListener('click', addGoal)