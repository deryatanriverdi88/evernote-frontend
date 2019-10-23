import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {


    // console.log(this.props.notes)
    return (
      <div className='master-detail-element sidebar'>
        <NoteList handleNoteViewer={this.props.handleNoteViewer}
           notes={this.props.notes}/>
        <button onClick={(event)=> this.props.handleNewClick(event)}> New</button>
      </div>
    );
  }
}

export default Sidebar;
