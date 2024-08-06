class TodoList {
    constructor() {
        this.input = document.querySelector('input');
        this.addButton = document.querySelector('.btn-add');
        this.ul = document.querySelector('.empty');
        this.emptyMessage = document.querySelector('.empty');
        this.addButton.addEventListener('click', (event) => this.addTask(event));
    }

    addTask(event) {
        event.preventDefault();

        const taskText = this.input.value.trim();

        if (taskText === '') {

        }

        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('btn btn-delete');

        li.appendChild(p);
        li.appendChild(deleteButton);

        this.ul.appendChild(li);
        this.input.value = '';
        this.emptyMessage.style.display = 'none';

        deleteButton.addEventListener('click', (event) => this.deleteTask(event));
    }

    deleteTask(event) {
        const taskItem = event.target.parentElement;
        this.ul.removeChild(taskItem);

        if (this.ul.children.length === 0) {
            this.emptyMessage.style.display = 'block';
        }
    }
}

const TodoList = new TodoList();