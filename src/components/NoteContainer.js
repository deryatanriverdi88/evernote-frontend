import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  state = {
    notes: [],
    noteItem:{}
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/notes")
    .then(res=>res.json())
    .then(noteObject => {
      this.setState({
        notes: noteObject
      })
    })
  }

  handleNoteViewer = (note) => {
    console.log(note, "hello")
    this.setState({
      noteItem: note
    })
  }

  render() {
    // console.log(this.props.notes)



    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.notes}
            handleNoteViewer={this.handleNoteViewer}
            />
          <Content note={this.state.noteItem}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
