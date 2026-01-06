import NoteItem from "./NoteItem";

export default function NoteList({ notes }) {
  return (
    <section className="notes-list">
      {notes.map((note) => (
        <NoteItem note={note} key={note.id} />
      ))}
    </section>
  );
}
