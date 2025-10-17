const modal = document.getElementById('modal');
const taskForm = document.getElementById('taskForm');
const taskId = document.getElementById('taskId');
const taskTitle = document.getElementById('taskTitle');
const taskCourse = document.getElementById('taskCourse');
const taskDeadline = document.getElementById('taskDeadline');

export const showModal = (title, task = null) => {
    document.getElementById('modalTitle').textContent = title;
    modal.showModal();

    const today = new Date().toISOString().split('T')[0];
    taskDeadline.setAttribute('min', today);

    if (task) {
        taskId.value = task.id;
        taskTitle.value = task.title;
        taskCourse.value = task.course;
        taskDeadline.value = task.deadline;
    } else {
        taskForm.reset();
        taskId.value = '';
    }
};

export const hideModal = () => modal.close();

