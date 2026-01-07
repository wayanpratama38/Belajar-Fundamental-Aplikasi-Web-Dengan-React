import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";

export default function ArchivePage({ archivedNotes }) {
  return (
    <section className="archivepage">
      <SearchBar
        text={"Catatan Arsip"}
        placeholder={"Silahkan isi dengan nama catatan arsip"}
      />
      <NoteList notes={archivedNotes} />
    </section>
  );
}
