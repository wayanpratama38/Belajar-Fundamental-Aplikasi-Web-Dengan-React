import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/network-data";
import useSearch from "../hooks/useSearch";
import useNote from "../hooks/useNote";
import { useLocale } from "../contexts/LocaleContext";
import Loading from "../components/LoadingComponent";

export default function ArchivePage() {
  const [archivedNotes, isArchivedLoading] = useNote(getArchivedNotes);
  const [keyword, setKeyword] = useSearch("title");
  const { text } = useLocale();

  const filteredNotes = archivedNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="archivepage">
      <SearchBar
        text={text.archiveNotes}
        placeholder={text.searchPlaceholder}
        keyword={keyword}
        onSearch={setKeyword}
      />
      {isArchivedLoading ? (
        <Loading />
      ) : filteredNotes.length === 0 ? (
        <p>{text.noNoteFound}</p>
        ) : (
        <NoteList notes={filteredNotes} />
      )}
    </section>
  );
}
