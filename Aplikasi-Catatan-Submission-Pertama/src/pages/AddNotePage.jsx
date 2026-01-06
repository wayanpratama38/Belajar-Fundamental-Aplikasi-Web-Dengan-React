import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import DoneIcon from "../../public/done.svg?react";

export default function AddNotePageWrapper({ onAdd }) {
  const navigate = useNavigate();
  return <AddNotePage navigate={navigate} onAdd={onAdd} />;
}

class AddNotePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState({ title: event.target.value });
  }

  onBodyChangeHandler(event) {
    this.setState({ body: event.target.value });
  }

  onAddNoteHandler() {
    this.props.onAdd({
      title: this.state.title,
      body: this.state.body,
    });
    this.props.navigate("/");
  }

  render() {
    return (
      <section className="add-new-page">
        <div className="add-new-page__input">
          <input
            className="add-new-page__input__title"
            placeholder="Note Title"
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
          />
          <textarea
            className="add-new-page__input__body"
            placeholder="Body"
            value={this.state.body}
            onChange={this.onBodyChangeHandler}
          />
        </div>
        <div className="add-new-page__action">
          <Button
            type="submit"
            image={DoneIcon}
            altImage={"Add Icon"}
            onClick={this.onAddNoteHandler}
          />
        </div>
      </section>
    );
  }
}
