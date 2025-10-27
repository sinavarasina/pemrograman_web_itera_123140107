const KEY = {
    tasks: 'ng_tasks',
    notes: 'ng_notes',
};

const safeParse = (s, fallback) => {
    try { return JSON.parse(s) ?? fallback; } catch { return fallback; }
};

export class Store {
    static load(name) {
        return safeParse(localStorage.getItem(name), []);
    }
    static save(name, data) {
        localStorage.setItem(name, JSON.stringify(data));
    }
    static get tasks() { return this.load(KEY.tasks); }
    static set tasks(v) { this.save(KEY.tasks, v); }
    static get notes() { return this.load(KEY.notes); }
    static set notes(v) { this.save(KEY.notes, v); }
}

export const loadAll = () => ({
    tasks: Store.tasks,
    notes: Store.notes,
});

