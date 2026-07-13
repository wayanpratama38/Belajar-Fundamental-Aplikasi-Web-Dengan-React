import React from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { SessionProvider } from './contexts/SessionContext';


export default function App1() {
  const [session, setSession] = useState(null);


  return (
    <SessionProvider value={{session, setSession}}>

    </SessionProvider>
  );
}
