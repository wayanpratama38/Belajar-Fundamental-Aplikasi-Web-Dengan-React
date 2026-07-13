import { useLocale } from "../contexts/LocaleContext";


export default function Loading() {
  const { text } = useLocale();

  return (
    <div className="loading-indicator">
      <p>{text.loading}</p>
    </div>
  );
}
