import { getNotes } from '../services/notesServices';

import Link from 'next/link';

import { AiOutlinePlaySquare, AiOutlinePlus } from 'react-icons/ai';

function Home({ notes }) {
  return (
    <section className="py-10">
      <div className="container mx-auto px-10">
        <h3 className="text-center text-blue-500 font-bold text-4xl mb-10 drop-shadow-lg">Notes Application:</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {
            notes.map(note => (
              <div key={note.id} className="p-4 border-slate-100 shadow-lg text-center rounded-md" style={{ backgroundColor: '#21262d' }}>
                <h3 className="text-blue-500 font-semibold text-lg my-2">{note.name}</h3>
                <p className="my-2 text-sm text-gray-400">{note.description}</p>
                <div className="flex justify-between mt-5">
                  <Link
                    href={`/note-edit/${note.id}`}
                  >
                    <button className="bg-blue-500 text-white py-1 px-4 text-sm rounded-sm">Edit</button>
                  </Link>
                  <button className="border border-red-500 text-red-500 py-1 px-4 text-sm rounded-sm hover:bg-red-500 hover:text-white duration-300">Delete</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Link href="/note-create">
        <div className='fixed bottom-2 right-2 w-12 h-12 rounded-full bg-blue-500 text-white text-center cursor-pointer'>
          <AiOutlinePlus className='text-center mx-auto mt-3 text-2xl' />
        </div>
      </Link>
    </section>
  )
}

export default Home;

export async function getStaticProps() {

  const notes = await getNotes();

  return {
    props: {
      notes: notes,
    },
  }
}