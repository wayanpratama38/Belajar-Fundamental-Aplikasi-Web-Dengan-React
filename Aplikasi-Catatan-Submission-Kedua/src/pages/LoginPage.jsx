import React from "react";
import useInput from "../hooks/useInput";
import { useSession } from "../contexts/SessionContext";
import { useNavigate } from "react-router-dom";
import { useLocale } from "../contexts/LocaleContext";

export default function LoginPage() {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const { text } = useLocale();
  const navigate = useNavigate();

  const { onLogin } = useSession();

  const submitHandler = async (e) => {
    e.preventDefault();

    // Menggunakan onLogin dari sessionContext untuk login
    const { success } = await onLogin({ email, password });
    // Kirim alert gagal kalau kredensial tidak valid
    if (success) {
      // Kirim alert berhasil login dan nvaigate to root endpoint
      alert(text.successLoginAlert);
      navigate("/");
    }
  };

  return (
    <section className="login-page">
      <form onSubmit={submitHandler}>
        <div className="input-login">
          <label htmlFor="email">{text.emailLabelForm}</label>
          <input
            type="email"
            value={email}
            placeholder="email@gmail.com"
            onChange={setEmail}
            id="email"
          />
        </div>
        <div className="input-login">
          <label htmlFor="password">{text.passwordLabelForm}</label>
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={setPassword}
            id="password"
          />
        </div>
        <div className="input-login">
          <button type="submit">{text.login}</button>
        </div>
      </form>
    </section>
  );
}
