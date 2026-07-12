import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";

export default function ArchivePage({ archivedNotes, keyword, onSearch }) {
  return (
    <section className="archivepage">
      <SearchBar
        text={"Catatan Arsip"}
        placeholder={"Silahkan isi dengan nama catatan arsip"}
        keyword={keyword}
        onSearch={onSearch}
      />
      <NoteList notes={archivedNotes} />
    </section>
  );
}
