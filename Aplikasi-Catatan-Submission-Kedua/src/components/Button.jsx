import { Link } from "react-router-dom";
export default function Button({ image, to, altImage, onClick }) {
  if (to) {
    return (
      <Link to={to}>
        <button className="action">
          <img src={image} style={{ width: "100%" }} alt={altImage} />
        </button>
      </Link>
    );
  }
  return (
    <button className="action" type="button" onClick={onClick}>
      <img src={image} style={{ width: "100%" }} alt={altImage} />
    </button>
  );
}
