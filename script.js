document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const task = taskInput.value.trim();

        if (task === '') return;

        const taskItem = document.createElement('li');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <span>${task}</span>
            <button>Delete</button>
        `;
        taskList.appendChild(taskItem);

        taskInput.value = '';

        // Add event listener for delete button
        taskItem.querySelector('button').addEventListener('click', function() {
            taskItem.remove();
        });
    });
});
