import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>{}</h2>
      <p>{}</p>
      <button>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
