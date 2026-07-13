import React from 'react';
import { getUserLogged,login, putAccessToken } from '../utils/network-data';

// Buat context untuk session
const SessionContext = React.createContext();

// Buat provider untuk session
export const SessionProvider = ({ children }) => {
  // State untuk simpan informasi user
  const [user, setUser] = React.useState(null);

  // State untuk simpan inisialisasi sudah selesai atau belum
  const [isInitialized, setIsInitialized] = React.useState(true)


  // Check session dari localstorage pakai useEffect
  React.useEffect(() => {
    const checkActiveSession = async () => {
      const { error, data } = await getUserLogged();

      if (!error && data) {
        setUser(data)
      } else {
        setIsInitialized(false);
      }
    }

    checkActiveSession();
  }, [])


  const onLogin = async ({ email, password }) => {
    // Request login ke server
    const { error, data } = await login({ email, password });

    if (!error && data) {
      // Simpan access token ke localstorage
      putAccessToken(data.accessToken);

      // Request data user dari server
      const userResponse = await getUserLogged();
      // Kalau berhasil simpan data ke state user
      if (!userResponse.error && userResponse.data) {
        setUser(userResponse.data);
        return { success: true }
      }
    }
    return { success: false }
  }


  const onLogout = async () => {
    // Hapus access token dari local storage dan reset state user
    putAccessToken('');
    setUser(null);
  }

  return (
    <SessionContext.Provider value={{ user, isInitialized, onLogin, onLogout }}>
      {children}
    </SessionContext.Provider>
  );
}

// Custom hook untuk pakai session context
export const useSession = () => React.useContext(SessionContext);
