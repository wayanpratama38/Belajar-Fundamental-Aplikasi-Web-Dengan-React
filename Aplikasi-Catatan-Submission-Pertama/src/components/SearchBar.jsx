export default function SearchBar({ text, placeholder }) {
  return (
    <>
      <h2>{text}</h2>
      <section className="search-bar">
        <input type="text" placeholder={placeholder} />
      </section>
    </>
  );
}
