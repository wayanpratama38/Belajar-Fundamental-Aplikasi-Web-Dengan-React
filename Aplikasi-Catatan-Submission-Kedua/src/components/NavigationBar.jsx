import { Link } from "react-router-dom";
import { useSession } from "../contexts/SessionContext";
import { useLocale } from "../contexts/LocaleContext";
import { useTheme } from "../contexts/ThemeContext";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

export default function NavigationBar() {
  const { user, onLogout } = useSession();
  const { theme, toggleTheme } = useTheme();
  const { text, toggleLocale } = useLocale();

  return (
    <>
      <h1>
        <Link to="/">{text.appTitle}</Link>
      </h1>
      <nav className="navigation">
        <ul>
          {user !== null && (
            <li>
              <Link to="/archives">{text.archive}</Link>
            </li>
          )}

          <li className="toggle-locale">
            <button onClick={toggleLocale}>{text.toggleLanguage}</button>
          </li>
          <li className="toggle-theme">
            <button onClick={toggleTheme}>
              {theme === "dark" ? <img src={sun} alt="Sun" /> : <img src={moon} alt="Moon" />}
            </button>
          </li>

          {user === null ? (
            <>
              <li className="input-login">
                <Link to="/login">{text.login}</Link>
              </li>
              <li className="input-register">
                <Link to="/register">{text.register}</Link>
              </li>
            </>
          ) : (
            <li >
              <button className="button-logout" onClick={onLogout}>{text.logout}</button>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
