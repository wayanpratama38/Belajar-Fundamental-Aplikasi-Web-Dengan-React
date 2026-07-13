import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/network-data";
import useSearch from "../hooks/useSearch";
import useNote from "../hooks/useNote";

export default function ArchivePage() {
  const [archivedNotes, isArchivedLoading] = useNote(getArchivedNotes);
  const [keyword, setKeyword] = useSearch("title");

  const filteredNotes = archivedNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="archivepage">
      <SearchBar
        text={"Catatan Arsip"}
        placeholder={"Silahkan isi dengan nama catatan arsip"}
        keyword={keyword}
        onSearch={setKeyword}
      />
      {isArchivedLoading ? (
        <p>Memuat Catatan Arsip</p>
      ) : (
        <NoteList notes={filteredNotes} />
      )}
    </section>
  );
}
