import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import AddIcon from "../assets/add.svg";
import NoteList from "../components/NoteList";
import useNote from "../hooks/useNote";
import useSearch from "../hooks/useSearch";
import { getActiveNotes } from "../utils/network-data";
import { useLocale } from "../contexts/LocaleContext";
import Loading from "../components/LoadingComponent";

export default function MainPage() {
  const [activeNotes, isActiveLoading] = useNote(getActiveNotes);
  const [keyword, setKeyword] = useSearch("title");
  const { text } = useLocale();

  const filteredNotes = activeNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="homepage">
      <SearchBar
        text={text.activeNotes}
        placeholder={text.searchPlaceholder}
        onSearch={setKeyword}
        keyword={keyword}
      />
      {isActiveLoading ? (
        <Loading />
      ) : filteredNotes.length === 0 ? (
        <p>{text.noNoteFound}</p>
      ) : (
        <NoteList notes={filteredNotes} />
      )}
      <div className="homepage__action">
        <Button image={AddIcon} to={"/new"} altImage={text.addAltImage} />
      </div>
    </section>
  );
}
