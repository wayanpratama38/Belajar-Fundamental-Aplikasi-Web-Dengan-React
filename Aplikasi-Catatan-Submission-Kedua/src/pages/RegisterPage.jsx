
import React from 'react';
import useInput from '../hooks/useInput';
import { register } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';


export default function RegisterPage() {
  const [name, handleNameChange] = useInput('');
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');
  const [confirmPassword, handleConfirmPasswordChange] = useInput('');

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password do not match');
      return;
    }
    const result = await register({ name, email, password });
    if (result.error) {
      alert(result.message);
    } else {
      alert('Registration successful');
      navigate('/login');
    }
  }

  return (
    <section className="register-page">
      <form action='post' onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder='budi' onChange={handleNameChange} />
        <input type="email" value={email} placeholder='email@gmail.com' onChange={handleEmailChange} />
        <input type="password" value={password} placeholder='password' onChange={handlePasswordChange} />
        <input type="password" value={confirmPassword} placeholder='confirm password' onChange={handleConfirmPasswordChange} />
        <button>Register</button>
      </form>
    </section>
  );
}
