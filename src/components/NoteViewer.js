import React, { Fragment } from 'react';


const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>{props.note.title}</h2>
      <p>{props.note.body}</p>
      <button onClick={(e) => props.handleClick(e, props.note)}>Edit</button>
      {/* Find some logic so this edit button will be only displayed when there is a note*/}
    </Fragment>
  );
}

export default NoteViewer;
