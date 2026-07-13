import React from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import {
  addNote,
  archiveNote,
  deleteNote,
  getActiveNotes,
  getArchivedNotes,
  unarchiveNote,
} from "./utils/network-data";
import MainPage from "./pages/MainPage";
import DetailNotePage from "./pages/DetailNotePage";
import ArchivePage from "./pages/ArchivePage";
import NavigationBar from "./components/NavigationBar";
import AddNotePageWrapper from "./pages/AddNotePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import useNote from "./hooks/useNote";

export default function AppWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("title") || "";
  const [archivedNotes, setArchivedNotes, isArchivedLoading] =
    useNote(getArchivedNotes);
  const [activeNotes, setActiveNotes, isActiveLoading] =
    useNote(getActiveNotes);

  const onChangeSearchParams = (keyword) => {
    return setSearchParams({ title: keyword });
  };

  return (
    <div className="app-container">
      <header>
        <NavigationBar />
      </header>
      <main>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              isActiveLoading ? (
                <p>Memuat Catatan Aktif</p>
              ) : (
                <MainPage
                  notes={activeNotes}
                  onSearch={onChangeSearchParams}
                  keyword={keyword}
                />
              )
            }
          />
          <Route
            path="/archives"
            element={
              isArchivedLoading ? (
                <p>Memuat Catatan Arsip</p>
              ) : (
                <ArchivePage
                  archivedNotes={archivedNotes}
                  onSearch={onChangeSearchParams}
                  keyword={keyword}
                />
              )
            }
          />
          {/* <Route
            path="/:id"
            element={
              <DetailNotePage
                onDelete={this.onDeleteHandler}
                onArchive={this.onArchiveHandler}
                onUnarchive={this.onUnarchiveHandler}
              />
            }
          />*/}
          {/* <Route
            path="/new"
            element={<AddNotePageWrapper onAdd={this.onAddHandler} />}
          />*/}
        </Routes>
      </main>
    </div>
  );
}
