import { Link } from "react-router-dom";
export default function NavigationBar() {
  return (
    <>
      <h1>
        <Link to="/">Aplikasi Catatan</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/archives">Archive</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
