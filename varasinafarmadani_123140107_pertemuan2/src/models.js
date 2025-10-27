export class Task {
    constructor({ id, title, priority = 'med', createdAt = Date.now(), done = false } = {}) {
        this.id = id ?? crypto.randomUUID();
        this.title = title;
        this.priority = priority;
        this.createdAt = createdAt;
        this.done = done;
    }
}

export class Note {
    constructor({ id, title, body, createdAt = Date.now() } = {}) {
        this.id = id ?? crypto.randomUUID();
        this.title = title;
        this.body = body;
        this.createdAt = createdAt;
    }
}

