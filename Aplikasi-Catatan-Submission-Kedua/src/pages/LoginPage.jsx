
import React from 'react';
import useInput from '../hooks/useInput';
import { useSession } from '../contexts/SessionContext';



export default function LoginPage() {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const { onLogin } = useSession();

  const submitHandler = async (e) => {
    e.preventDefault();

    await onLogin({ email, password });
  }

  return (
    <section className='login-page' >
      <form onSubmit={submitHandler}>
        <input type='email' value={email} placeholder='email@gmail.com' onChange={setEmail} />
        <input type='password' value={password} placeholder='password' onChange={setPassword} />
        <button type='submit'>Login</button>
      </form>
    </section>
  );
}
