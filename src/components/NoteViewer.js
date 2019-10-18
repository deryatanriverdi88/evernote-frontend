import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>Select a Title</h2>
      <p></p>
      {props.note ?
      <button>Edit</button> :
        null}
    </Fragment>
  );
}

export default NoteViewer;
