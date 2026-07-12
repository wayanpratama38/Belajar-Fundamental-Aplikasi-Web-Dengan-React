import { showFormattedDate } from "../utils/index";
import { Link } from "react-router-dom";
export default function NoteItem({ note }) {
  return (
    <article className="note-item">
      <h3 className="note-item__title">
        <Link to={`/${note.id}`}>{note.title}</Link>
      </h3>
      <p className="note-item__createdAt">
        {showFormattedDate(note.createdAt)}
      </p>
      <p className="note-item__body">{note.body}</p>
    </article>
  );
}
