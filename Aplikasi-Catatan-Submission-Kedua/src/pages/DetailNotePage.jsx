import NotFoundPage from "./NotFoundPage";
import { showFormattedDate } from "../utils";
import { useParams, useNavigate } from "react-router-dom";
import { getNote } from "../utils/local-data";
import Button from "../components/Button";
import ArchiveIconDown from "../assets/archive-down.svg";
import DeleteIcon from "../assets/delete.svg";
import ArchiveIconUp from "../assets/archive-up.svg";

export default function DetailNotePage({ onDelete, onArchive, onUnarchive }) {
  const { id } = useParams();
  const note = getNote(id);
  const navigation = useNavigate();
  if (!note) {
    return <NotFoundPage />;
  }
  function deleteNoteHandler() {
    onDelete(id);
    navigation("/");
  }

  function archiveNoteHandler() {
    onArchive(id);
    navigation("/");
  }

  function unarchiveNoteHandler() {
    onUnarchive(id);
    navigation("/");
  }

  return (
    <div className="detail-page">
      <h1 className="detail-page__title">{note.title}</h1>
      <p className="detail-page__createdAt">
        {showFormattedDate(note.createdAt)}
      </p>
      <p className="detail-page__body">{note.body}</p>
      <div className="detail-page__action">
        <Button
          type="submit"
          image={note.archived ? ArchiveIconUp : ArchiveIconDown}
          altImage={"Unarchive Icon"}
          onClick={note.archived ? unarchiveNoteHandler : archiveNoteHandler}
        />

        {/* {note.archived ? (
          <Button
            type="submit"
            image={ArchiveIconUp}
            altImage={"Unarchive Icon"}
            onClick={unarchiveNoteHandler}
          />
        ) : (
          <Button
            type="submit"
            image={ArchiveIconDown}
            altImage={"Archive Icon"}
            onClick={archiveNoteHandler}
          />
        )} */}
        <Button
          type="submit"
          image={DeleteIcon}
          altImage={"Delete Icon"}
          onClick={deleteNoteHandler}
        />
      </div>
    </div>
  );
}
