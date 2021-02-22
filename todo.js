
const todoInput = document.querySelector('#todo-input')
const addButton = document.querySelector('.add-button')



const container = document.querySelector('.container')



addButton.addEventListener('click', () => {

    if(todoInput.value) {
        const todoPlace = document.createElement('div')

        todoPlace.classList.add('todo-place')
        todoPlace.append(todoInput.value)
    
        container.append(todoPlace)

       
        const removeButton = document.createElement('button')
        removeButton.textContent = 'remove' 
        removeButton.classList.add('remove-button')
        container.append(removeButton)

        todoInput.value = ''

        removeButton.onclick = () => {
            todoPlace.style.display = 'none'
            removeButton.style.display = 'none'
        }

    }

})




