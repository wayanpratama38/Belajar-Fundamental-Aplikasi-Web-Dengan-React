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

  if (user === null) {
    return (
      <>
        <h1>
          <Link>{text.appTitle}</Link>
        </h1>
        <nav className="navigation">
          <ul>
            <li className="toggle-locale">
              <button onClick={toggleLocale}>{ text.toggleLanguage}</button>
            </li>
            <li className="toggle-theme">
              <button onClick={toggleTheme}>{ theme === "dark" ? <img src={sun} alt="Sun" /> : <img src={moon} alt="Moon" /> }</button>
            </li>
            <li className="input-login">
              <Link to="/login">{text.login}</Link>
            </li>
            <li className="input-register">
              <Link to="/register">{text.register}</Link>
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
          <li className="toggle-locale">
            <button onClick={toggleLocale}>{ text.toggleLanguage}</button>
          </li>
          <li className="toggle-theme">
            <button onClick={toggleTheme}>{ theme === "dark" ? <img src={sun} alt="Sun" /> : <img src={moon} alt="Moon" /> }</button>
          </li>
          <li className="button-logout">
            <button className="button-logout" onClick={onLogout} >{text.logout}</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
