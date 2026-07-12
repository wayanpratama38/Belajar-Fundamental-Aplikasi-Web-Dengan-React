
import React from 'react';
import useInput from '../hooks/useInput';
import { login, putAccessToken } from '../utils/network-data'


export default function LoginPage() {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login({ email, password });
    if (result.error) {
      alert(result.message);
    } else {
      putAccessToken(email);
      alert('Login successful');
    }

  };

  return (
    <section className='login-page' >
      <form onSubmit={handleSubmit}>
        <input type='email' value={email} placeholder='email@gmail.com' onChange={setEmail} />
        <input type='password' value={password} placeholder='password' onChange={setPassword} />
        <button type='submit'>Login</button>
      </form>
    </section>
  );
}
