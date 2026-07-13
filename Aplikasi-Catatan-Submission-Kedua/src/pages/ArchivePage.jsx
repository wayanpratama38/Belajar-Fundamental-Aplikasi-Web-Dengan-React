import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/network-data";
import useSearch from "../hooks/useSearch";
import useNote from "../hooks/useNote";

export default function ArchivePage() {
  const [archivedNotes, _, isArchivedLoading] = useNote(getArchivedNotes);
  const [keyword, setKeyword] = useSearch("title");

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
        <NoteList notes={archivedNotes} />
      )}
    </section>
  );
}
