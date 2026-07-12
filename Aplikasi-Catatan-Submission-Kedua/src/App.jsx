import React from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
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

export default function AppWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("title") || "";
  const onChangeSearchParams = (keyword) => {
    return setSearchParams({ title: keyword });
  }

  return <App searchKeyword={keyword} onSearchHandler={onChangeSearchParams} />
}

class App extends React.Component {
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
    this.onSearchHandler = this.onSearchHandler.bind(this)
  }

  onArchiveHandler(id) {
    archiveNote(id);
    this.setState({
      notes: this.props.searchKeyword ? [] : getActiveNotes(),
      archivedNotes: this.props.searchKeyword ? [] : getArchivedNotes(),
    });
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState({ notes: getActiveNotes(), archivedNotes: getArchivedNotes() });
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

  onSearchHandler(keyword) {
    this.props.onSearchHandler(keyword);
  }

  render() {
    const activeNotesDisplayed = this.state.notes.filter((note) => {
      return note.title.toLocaleLowerCase().includes(this.props.searchKeyword.toLocaleLowerCase());
    })

    const archiveNotesDisplayed = this.state.archivedNotes.filter((note) => {
      return note.title.toLocaleLowerCase().includes(this.props.searchKeyword.toLocaleLowerCase());
    })
    return (
      <div className="app-container">
        <header>
          <NavigationBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MainPage notes={activeNotesDisplayed} onSearch={this.onSearchHandler} keyword={this.props.searchKeyword} />} />
            <Route
              path="/archives"
              element={<ArchivePage archivedNotes={archiveNotesDisplayed} onSearch={this.onSearchHandler} keyword={this.props.searchKeyword} />}
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
