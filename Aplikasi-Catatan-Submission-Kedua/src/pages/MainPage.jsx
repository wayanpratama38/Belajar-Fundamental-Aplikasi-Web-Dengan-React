import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import AddIcon from "../assets/add.svg";
import NoteList from "../components/NoteList";
import useNote from "../hooks/useNote";
import useSearch from "../hooks/useSearch";
import { getActiveNotes } from "../utils/network-data";

export default function MainPage() {
  const [activeNotes, isActiveLoading] = useNote(getActiveNotes);
  const [keyword, setKeyword] = useSearch("title");

  const filteredNotes = activeNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="homepage">
      <SearchBar
        text={"Catatan Aktif"}
        placeholder={"Silahkan isi dengan nama catatan"}
        onSearch={setKeyword}
        keyword={keyword}
      />
      {isActiveLoading ? (
        <p>Memuat Catatan Aktif</p>
      ) : (
        <NoteList notes={filteredNotes} />
      )}
      <div className="homepage__action">
        <Button image={AddIcon} to={"/new"} altImage={"Add button image"} />
      </div>
    </section>
  );
}
