import React, { Component } from 'react';

class NoteEditor extends Component {

  render() {
    // console.log("I, NoteEditor rendered")
    return (
      <form  onChange={this.props.handleEdit} className="note-editor">
        <input defaultValue={this.props.note.title} type="text" name="title" />
        <textarea rows="15" cols="50" defaultValue={this.props.note.body} name="body" />
        <div className="button-row">
          <input onClick={(e) => this.props.handleSubmit(e, this.props.note.id)} className="button" type="submit" value="Save" />
          <button onClick={this.props.handleCancel} type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
