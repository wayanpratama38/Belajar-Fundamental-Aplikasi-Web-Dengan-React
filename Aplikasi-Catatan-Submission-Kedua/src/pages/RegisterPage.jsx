import React from "react";
import useInput from "../hooks/useInput";
import { register } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import { useLocale } from "../contexts/LocaleContext";

export default function RegisterPage() {
  const [name, handleNameChange] = useInput("");
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [confirmPassword, handleConfirmPasswordChange] = useInput("");
  const { text } = useLocale();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert(text.passwordAndConfirmFailed);
      return;
    }
    const result = await register({ name, email, password });
    if (result.error) {
      alert(result.message);
    } else {
      alert(text.successRegisterAlert);
      navigate("/login");
    }
  };

  return (
    <section className="register-page">
      <form action="post" onSubmit={handleSubmit}>
        <label for="name-input">{text.nameLabelForm}</label>
        <input
          type="text"
          value={name}
          placeholder="budi"
          onChange={handleNameChange}
          id="name-input"
        />
        <label for="name-input">{text.emailLabelForm}</label>
        <input
          type="email"
          value={email}
          placeholder="email@gmail.com"
          onChange={handleEmailChange}
          id="email-input"
        />
        <label for="name-input">{text.passwordLabelForm}</label>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={handlePasswordChange}
          id="password-input"
        />
        <label for="name-input">{text.confirmPasswordLabelForm}</label>
        <input
          type="password"
          value={confirmPassword}
          placeholder="confirm password"
          onChange={handleConfirmPasswordChange}
          id="confirm-password-input"
        />
        <button>Register</button>
      </form>
    </section>
  );
}
