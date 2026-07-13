import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailNotePage from "./pages/DetailNotePage";
import ArchivePage from "./pages/ArchivePage";
import NavigationBar from "./components/NavigationBar";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AddNotePage from "./pages/AddNotePage";
import { useSession } from "./contexts/SessionContext";
import { useTheme } from "./contexts/ThemeContext";

export default function AppWrapper() {
  const { user } = useSession();
  const { theme } = useTheme();

  if (user === null) {
    return (
      <div className="app-container" data-theme={theme}>
        <header>
          <NavigationBar />
        </header>
        <main>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </main>
      </div>
    );
  }

  return (
    <div className="app-container" data-theme={theme}>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/:id" element={<DetailNotePage />} />
          <Route path="/new" element={<AddNotePage />} />
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="/register" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
