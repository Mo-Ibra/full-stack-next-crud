import { useState } from "react";
import { updateNote, getNote, getNotes } from "../../services/notesServices";

function NoteEdit({ note }) {

    const [name, setName] = useState(note.name);
    const [description, setDescription] = useState(note.description);

    const updateNoteHandler = async (e) => {

        e.preventDefault();

        // const data = { name, description, isDone: true };

        const update = await updateNote({name, description, isDone: true, id: note.id});

        console.log(update);
    }

    return (
        <section className="py-10">
            <div className="container mx-auto px-20">
                <h3 className="text-center text-blue-500 font-bold text-4xl mb-10 drop-shadow-lg">Notes Application:</h3>
                <form onSubmit={updateNoteHandler} className="mx-auto">
                    <input
                        placeholder="Note Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block mx-auto my-5 p-2 text-gray-200 w-full rounded-sm border border-slate-700 outline-none"
                        style={{backgroundColor: '#21262d'}}
                    />
                    <input
                        placeholder="Note Description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="block mx-auto my-5 p-2 text-gray-200 w-full rounded-sm border border-slate-700 outline-none"
                        style={{backgroundColor: '#21262d'}}
                    />
                    <button className="mx-auto text-center rounded-sm bg-blue-500 py-1 px-4 text-white">Update!</button>
                </form>
            </div>
        </section>
    )
}

export default NoteEdit;

export async function getStaticPaths() {

    const notes = await getNotes();

    const paths = notes.map((note) => ({
        params: { id: note.id.toString() }
    }));

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {

    const id = context.params.id.toString();

    const note = await getNote(id);

    return {
        props: {
            note: note
        }
    }
}