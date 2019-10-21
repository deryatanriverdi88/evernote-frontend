import React from 'react';
import Truncate from 'react-truncate';

const NoteItem = (props) => {
  // console.log(props)
  return(

  <li onClick={() => props.handleNoteViewer(props.note)}>
    <h2>{props.note.title}</h2>
    <Truncate>
    <p>{props.note.body}</p>
    </Truncate>
  </li>

 );
}

export default NoteItem;
