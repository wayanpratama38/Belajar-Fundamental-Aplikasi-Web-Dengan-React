import { useLocale } from "../contexts/LocaleContext";

export default function NoNoteFound() {
  const { text } = useLocale();
  return (
    <section className="notes-list-empty">
      <p className="notes-list_empty">{text.NoNoteFound}</p>
    </section>
  );
}
