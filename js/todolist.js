
const todoMain = document.querySelector('.todo-button');
const todoToggle = document.querySelector('.todo-popup');
const todoBtn = document.querySelector('.new-todo-button');
const todoContainer = document.querySelector('.todo-list-content');
const todoNewList = document.querySelector('#new-todo');
const completeList = document.getElementsByClassName('todo-item-title');

//todo main click
todoMain.addEventListener('click', () => {
    todoToggle.classList.toggle('active');
})

todoBtn.addEventListener('click', () => {
    document.getElementById('new-todo').style.visibility = 'visible';
    todoBtn.style.opacity = 0;
})

todoNewList.addEventListener('keypress', (event) =>{
    if(event.key === 'Enter' && todoNewList.value !== ''){
        let emptyList = document.getElementsByClassName('empty');
        emptyList[0].style.display = 'none';
        
        let toDo = document.createElement('li');
        let toDoCheckBox = document.createElement('input');
        let toDoText = document.createElement('span');
        let toDoLabel = document.createElement('label');
        let moreOption = document.createElement('div');
        let ellipsis = document.createElement('img');

        todoContainer.dataset.total = Number(todoContainer.dataset.total) + 1;
        toDoCheckBox.id = todoContainer.dataset.total;

        toDoCheckBox.setAttribute('type', 'checkbox');
        toDo.className = 'todo-item visible';
        toDoText.className = 'todo-item-title';
        moreOption.className = 'more';
        ellipsis.className = 'ellipsis-icon';
        ellipsis.src = './pics/dots.png';

        toDoText.innerHTML = todoNewList.value;

        todoContainer.appendChild(toDo);
        toDo.appendChild(toDoLabel);
        toDoLabel.appendChild(toDoCheckBox);
        toDo.appendChild(toDoText);
        toDo.appendChild(moreOption);
        moreOption.appendChild(ellipsis);

        todoNewList.value = '';
    }
})

document.addEventListener('click', (event) => {
    let selectedItem = event.target.id;
    const optionList = document.getElementsByClassName('more');
       
    selectedItem -= 1

    if (selectedItem !== -1 && selectedItem !== NaN){
        completeList[selectedItem].classList.toggle('completetask');
        optionList[selectedItem].classList.toggle('active');
    }
})

// todoToggleOption.addEventListener('click', (event) => {
//     let selectedItem = event.target.id;

//     selectedItem -= 1
//     const optionList = document.getElementsByClassName('more');
//     optionList[selectedItem].classList.toggle('active');
//     console.log(selectedItem)
// })