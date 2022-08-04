const URL = "http://localhost:8000";

/** Get All Notes */
export async function getNotes() {
    const response = await fetch(`${URL}/notes`);
    const data = await response.json();
    return data;
}

/** Get Specific Note */
export async function getNote(id) {
    const response = await fetch(`${URL}/notes/${id}`);
    const data = await response.json();
    return data;
}

/** Create Note */
export async function createNote({ name, description, isDone }) {
    const response = await fetch(`${URL}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, description: description, isDone: isDone }),
    });
    const data = await response.json();
    return data;
}

/** Update Note */
export async function updateNote({ name, description, isDone, id }) {
    const response = await fetch(`${URL}/notes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, description: description, isDone: isDone })
    });
    return await response.json();
}

/** Delete Note */
export async function deleteNote(id) {
    const response = await fetch(`${URL}/notes/${id}`, {
        method: "DELETE"
    });
    return await response.json();
}