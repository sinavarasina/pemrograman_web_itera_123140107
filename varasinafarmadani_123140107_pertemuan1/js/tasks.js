import { getTasks, saveTasks } from "./storage.js";
import { showModal, hideModal } from "./modal-ui.js";

const totalEl = document.getElementById('statsTotal');
const doneEl = document.getElementById('statsDone');
const pendingEl = document.getElementById('statsPending');
const list = document.getElementById('taskList');

export const updateStats = tasks => {
    const done = tasks.filter(t => t.done).length;
    totalEl.textContent = tasks.length;
    doneEl.textContent = done;
    pendingEl.textContent = tasks.length - done;
};

export const toggleTask = id => {
    const tasks = getTasks().map(t => t.id === id ? { ...t, done: !t.done } : t);
    saveTasks(tasks);
    renderTask();
};

export const editTask = id => {
    const task = getTasks().find(t => t.id === id);
    showModal('Edit Tugas', task);
};

export const deleteTask = id => {
    if (confirm('Hapus tugas ini?')) {
        saveTasks(getTasks().filter(t => t.id !== id));
        renderTask();
    }
};

export const handleFormSubmit = e => {
    e.preventDefault();
    const id = document.getElementById('taskId').value;
    const title = document.getElementById('taskTitle').value.trim();
    const course = document.getElementById('taskCourse').value.trim();
    const deadline = document.getElementById('taskDeadline').value;

    if (!title || !course || !deadline) {
        alert('Semua field wajib diisi!');
        return;
    }

    const today = new Date();
    const selectedDate = new Date(deadline);

    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        alert('Tanggal deadline tidak dapat sebelum saat ini');
        return;
    }

    let tasks = getTasks();

    if (id) {
        tasks = tasks.map(t =>
            t.id === Number(id)
                ? { ...t, title, course, deadline }
                : t
        );
    } else {
        tasks.push({ id: Date.now(), title, course, deadline, done: false });
    }

    saveTasks(tasks);
    renderTask();
    hideModal();
};

export const renderTask = () => {
    const tasks = getTasks();
    const query = document.getElementById('searchBar').value.toLowerCase();

    const filtered = tasks.filter(t =>
        t.title.toLowerCase().includes(query) ||
        t.course.toLowerCase().includes(query) ||
        (query.includes('selesai') && t.done) ||
        (query.includes('belum') && !t.done)
    );

    updateStats(tasks);

    list.innerHTML = filtered.length
        ? filtered.map(t => `
        <li>
          <span><strong>${t.title}</strong> (${t.course}) - ${t.deadline}</span>
          <span>
            <button class="done" data-id="${t.id}">${t.done ? 'Set Belum Selesai' : 'Set Selesai'}</button>
            <button class="edit" data-id="${t.id}">Edit</button>
            <button class="delete" data-id="${t.id}">Hapus</button>
          </span>
        </li>
      `).join('')
        : '<li><em>Tidak ada tugas ditemukan</em></li>';

    list.querySelectorAll('.done').forEach(btn =>
        btn.addEventListener('click', e => toggleTask(Number(e.target.dataset.id)))
    );
    list.querySelectorAll('.edit').forEach(btn =>
        btn.addEventListener('click', e => editTask(Number(e.target.dataset.id)))
    );
    list.querySelectorAll('.delete').forEach(btn =>
        btn.addEventListener('click', e => deleteTask(Number(e.target.dataset.id)))
    );
};

