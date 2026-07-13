import { Link } from "react-router-dom";
import { useSession } from "../contexts/SessionContext";
import { useLocale } from "../contexts/LocaleContext";
export default function NavigationBar() {
  const { user, onLogout } = useSession();

  const { text, toggleLocale } = useLocale();

  if (user === null) {
    return (
      <>
        <h1>
          <Link>{text.appTitle}</Link>
        </h1>
        <nav className="navigation">
          <ul>
            <li>
              <button onClick={toggleLocale}>{text.toggleLanguage}</button>
            </li>
            <li>
              <Link to="/register">{text.register}</Link>
            </li>
            <li>
              <Link to="/login">{text.login}</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }

  return (
    <>
      <h1>
        <Link to="/">{text.appTitle}</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/archives">{text.archive}</Link>
          </li>
          <li>
            <button onClick={toggleLocale}>{text.toggleLanguage}</button>
          </li>
          <li>
            <button onClick={onLogout}>{text.logout}</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
