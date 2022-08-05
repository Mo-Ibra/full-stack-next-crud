import { useState } from "react";
import { createNote } from "../services/notesServices";

import { ToastContainer, toast } from 'react-toastify';

function NoteCreate() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const createNoteHandler = (e) => {

        e.preventDefault();

        // const data = { name, description };

        try {

            const note = createNote({ name: name, description: description, isDone: true });

            note.then(data => {
                toast.success(data.message);
            });
    
            setName('');
            setDescription('');

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section className="py-10">
            <div className="container mx-auto px-20">
                <h3 className="text-center text-blue-500 font-bold text-4xl mb-10 drop-shadow-lg">Notes Application:</h3>
                <form onSubmit={createNoteHandler} className="mx-auto">
                    <input
                        placeholder="Note Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block mx-auto my-5 p-2 text-gray-200 w-full rounded-sm border border-slate-700 outline-none"
                        style={{ backgroundColor: '#21262d' }}
                    />
                    <input
                        placeholder="Note Description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="block mx-auto my-5 p-2 text-gray-200 w-full rounded-sm border border-slate-700 outline-none"
                        style={{ backgroundColor: '#21262d' }}
                    />
                    <button className="mx-auto text-center rounded-sm bg-blue-500 py-1 px-4 text-white">Create</button>
                </form>
            </div>
            <ToastContainer />
        </section>
    )
}

export default NoteCreate;