import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  addNote,
  archiveNote,
  deleteNote,
  getActiveNotes,
  getArchivedNotes,
  unarchiveNote,
} from "./utils/local-data";
import MainPage from "./pages/MainPage";
import DetailNotePage from "./pages/DetailNotePage";
import ArchivePage from "./pages/ArchivePage";
import NavigationBar from "./components/NavigationBar";
import AddNotePageWrapper from "./pages/AddNotePage";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      archivedNotes: getArchivedNotes(),
    };
    this.onAddHandler = this.onAddHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  onArchiveHandler(id) {
    archiveNote(id);
    this.setState({
      notes: getActiveNotes(),
      archivedNotes: getArchivedNotes(),
    });
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState({ notes: getActiveNotes() });
  }

  onAddHandler({ title, body }) {
    addNote({ title: title, body: body });
    this.setState({ notes: getActiveNotes() });
  }

  onUnarchiveHandler(id) {
    unarchiveNote(id);
    this.setState({
      notes: getActiveNotes(),
      archivedNotes: getArchivedNotes(),
    });
  }

  render() {
    return (
      <div className="app-container">
        <header>
          <NavigationBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MainPage notes={this.state.notes} />} />
            <Route
              path="/archives"
              element={<ArchivePage archivedNotes={this.state.archivedNotes} />}
            />
            <Route
              path="/:id"
              element={
                <DetailNotePage
                  onDelete={this.onDeleteHandler}
                  onArchive={this.onArchiveHandler}
                  onUnarchive={this.onUnarchiveHandler}
                />
              }
            />
            <Route
              path="/new"
              element={<AddNotePageWrapper onAdd={this.onAddHandler} />}
            />
          </Routes>
        </main>
      </div>
    );
  }
}
