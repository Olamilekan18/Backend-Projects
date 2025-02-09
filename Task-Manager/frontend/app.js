document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskNameInput = document.getElementById('task-name');
    const tasksList = document.getElementById('tasks-list');

    const fetchTasks = async () => {
        try {