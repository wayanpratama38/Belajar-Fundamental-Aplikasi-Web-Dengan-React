import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import AddIcon from "../assets/add.svg";
import NoteList from "../components/NoteList";

export default function MainPage({ notes, onSearch, keyword }) {
  return (
    <section className="homepage">
      <SearchBar
        text={"Catatan Aktif"}
        placeholder={"Silahkan isi dengan nama catatan"}
        onSearch={onSearch}
        keyword={keyword}
      />
      <NoteList notes={notes} />
      <div className="homepage__action">
        <Button image={AddIcon} to={"/new"} altImage={"Add button image"} />
      </div>
    </section>
  );
}
