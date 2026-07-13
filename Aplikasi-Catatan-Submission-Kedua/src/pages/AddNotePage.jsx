import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import DoneIcon from "../assets/done.svg";
import useInput from "../hooks/useInput";
import { addNote } from "../utils/network-data";

export default function AddNotePage() {
  const [title, handleTitleChange] = useInput("");
  const [body, handleBodyChange] = useInput("");
  const navigate = useNavigate();

  const handleAddButton = async () => {
    const { error, data } = await addNote({ title, body });

    if (!error && data) {
      navigate("/");
    }
  };

  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          placeholder="Note Title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          className="add-new-page__input__body"
          placeholder="Body"
          value={body}
          onChange={handleBodyChange}
        />
      </div>
      <div className="add-new-page__action">
        <Button
          type="submit"
          image={DoneIcon}
          altImage={"Add Icon"}
          onClick={handleAddButton}
        />
      </div>
    </section>
  );
}
