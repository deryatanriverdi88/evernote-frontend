import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  state = {
    notes: [],
    noteItem:{},
    title: "",
    body:"",
    show_editor: false,
    noteFilter: "",
    filteredNotes: []
  }

  handleFilterChange = (event) => {
    console.log(event.target.value)
    this.setState({
      noteFilter: event.target.value
    })
  }

  handleEdit = (event, noteObject) => {
    console.log(event.target)
  }

  handleClick = (event) => {
    console.log(event.target, this.state.show_editor, "hey")
    this.setState({
      show_editor: true
    })
  }

  handleNewClick = (event) =>  {
    // console.log(event.target, "hey")
    event.preventDefault()

    fetch("http://localhost:3000/api/v1/notes", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        user_id: 1,
        title: "default",
        body: "placeholder"
      })
    })
    .then(res => res.json())
    .then(newNote => {
      this.setState({
        notes: [...this.state.notes, newNote]
    })
   })
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
    // console.log(note, "hello")
    this.setState({
      noteItem: note
    })
  }


  render() {
    // console.log(this.props.notes, "I mounted")
    return (
      <Fragment>
        <Search handleFilter={this.handleFilterChange}/>
        <div className='container'>
          <Sidebar notes={this.state.notes}
            handleNoteViewer={this.handleNoteViewer}
            handleNewClick={this.handleNewClick}
            />
          <Content note={this.state.noteItem}
            handleEdit={this.handleEdit}
            handleClick={this.handleClick}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
