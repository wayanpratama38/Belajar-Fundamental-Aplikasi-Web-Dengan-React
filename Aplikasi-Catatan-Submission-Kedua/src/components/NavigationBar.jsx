import { Link } from "react-router-dom";
import { useSession } from "../contexts/SessionContext";
export default function NavigationBar() {
  const { user, onLogout } = useSession();

  if (user === null) {
    return (
      <>
        <h1>
          <Link>Aplikasi Catatan</Link>
        </h1>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }

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
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
