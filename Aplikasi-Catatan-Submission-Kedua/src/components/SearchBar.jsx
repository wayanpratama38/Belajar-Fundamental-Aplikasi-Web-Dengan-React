export default function SearchBar({ text, placeholder, keyword, onSearch }) {
  return (
    <>
      <h2>{text}</h2>
      <section className="search-bar">
        <input value={keyword} onChange={(event) => onSearch(event.target.value)} type="text" placeholder={placeholder} />
      </section>
    </>
  );
}
