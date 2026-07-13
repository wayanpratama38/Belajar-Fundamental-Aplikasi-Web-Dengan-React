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
    if (!success) {
      alert(text.failedLoginAlert);
    }

    // Kirim alert berhasil login dan nvaigate to root endpoint
    alert(text.successLoginAlert);
    navigate("/");
  };

  return (
    <section className="login-page">
      <form onSubmit={submitHandler}>
        <input
          type="email"
          value={email}
          placeholder="email@gmail.com"
          onChange={setEmail}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={setPassword}
        />
        <button type="submit">Login</button>
      </form>
    </section>
  );
}
