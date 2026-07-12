import NoNoteFound from "./NoNotesComponent";
import NoteItem from "./NoteItem";

export default function NoteList({ notes }) {
  return notes.length === 0 ? (<NoNoteFound />) : (
    <section className="notes-list">
      {notes.map((note) => (
        <NoteItem note={note} key={note.id} />
      ))}
    </section>)
}
