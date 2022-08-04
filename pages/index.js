import { getNotes } from '../services/notesServices';

function Home({ notes }) {
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          {note.name}
          <br />
          <span>{note.description}</span>
          <br />
          <span>{note.isDone}</span>
        </div>
      ))}
    </div>
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