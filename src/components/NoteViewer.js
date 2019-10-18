import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>{props.note.title}</h2>
      <p>{props.note.body}</p>
      {props.note ?
      <button>Edit</button> :
        null}
    </Fragment>
  );
}

export default NoteViewer;
