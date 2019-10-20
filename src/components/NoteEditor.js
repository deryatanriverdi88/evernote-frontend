import React, { Component } from 'react';

class NoteEditor extends Component {

  render() {
    console.log("I, NoteEditor rendered")
    return (
      <form className="note-editor">
        <input onChange={this.props.handleEdit} value={this.props.note.title}type="text" name="title" />
        <textarea  onChange={this.props.handleEdit} value={this.props.note.body}name="body" />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
