import NotFoundPage from "./NotFoundPage";
import { showFormattedDate } from "../utils";
import { useParams, useNavigate } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/network-data";
import Button from "../components/Button";
import ArchiveIconDown from "../assets/archive-down.svg";
import DeleteIcon from "../assets/delete.svg";
import ArchiveIconUp from "../assets/archive-up.svg";
import useNote from "../hooks/useNote";
import { useLocale } from "../contexts/LocaleContext";
import Loading from "../components/LoadingComponent";

export default function DetailNotePage() {
  const { id } = useParams();
  const [note, _, isNoteLoading] = useNote(() => getNote(id));
  const { text } = useLocale();
  const navigate = useNavigate();

  if (!note) {
    return <NotFoundPage />;
  }

  const actionHandler = async (apiFunction) => {
    const { error } = await apiFunction(id);
    if (!error) navigate("/");
  };

  return (
    <div className="detail-page">
      {isNoteLoading ? (
        <Loading />
      ) : (
        <>
          <h1 className="detail-page__title">{note.title}</h1>
          <p className="detail-page__createdAt">
            {showFormattedDate(note.createdAt)}
          </p>
          <p className="detail-page__body">{note.body}</p>
          <div className="detail-page__action">
            <Button
              type="submit"
              image={note.archived ? ArchiveIconUp : ArchiveIconDown}
              altImage={
                note.archived ? text.unarchiveAltImage : text.archiveAltImage
              }
              onClick={() =>
                actionHandler(note.archived ? unarchiveNote : archiveNote)
              }
            />
            <Button
              type="submit"
              image={DeleteIcon}
              altImage={text.deleteAltImage}
              onClick={() => actionHandler(deleteNote)}
            />
          </div>
        </>
      )}
    </div>
  );
}
