import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';
import Sorting from './Sorting';

class NoteContainer extends Component {

  state = {
    notes: [],
    noteItem:{},
    title: "",
    body:"",
    showEditor: false,
    noteFilter: "",
    sortValue: false
  }

  fetchNote = () => {
   fetch("http://localhost:3000/api/v1/notes")
   .then(res=>res.json())
   .then(noteObject => {
     this.setState({
       notes: noteObject
     })
   })
  }

  componentDidMount(){
    this.fetchNote()
  }

  handleFilterChange = (event) => {
    console.log(event.target.value)
    this.setState({
      noteFilter: event.target.value
    })
  }

  handleSort =()=>{
    console.log("I, sort button, have been clicked", this.state.sortValue)
      this.setState({
        sortValue: !this.state.sortValue
      }, () => {
        if (this.state.sortValue === true ){
            // debugger
          //   this.state.notes.sort((a,b) =>{
          //     if(a.title.toLowerCase()  < b.title.toLowerCase()){
          //       return -1
          //     } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
          //       return 1
          //     }
          // })
          let sortedArray = this.state.notes.sort((a,b) =>{
                if(a.title.toLowerCase()  < b.title.toLowerCase()){
                  return -1
                }
                else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                  return 1
                }
          })
          this.setState({
            notes: sortedArray
          })
        }
       
      })
  }

  handleNoteViewer = (note) => {
    // console.log(note, "hello")
    this.setState({
      noteItem: note,
      // showEditor: false
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
        title: "title",
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

  handleEdit = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = (event, noteObject) => {
    console.log(event.target, this.state.showEditor, "hey")
    this.setState({
      title: noteObject.title,
      body: noteObject.body,
      showEditor: true
    })
  }

  handleDelete = (e, id) => {
    // console.log("hey from delete button", id)
    fetch(`http://localhost:3000/api/v1/notes/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(
      this.fetchNote
    )
    .then(
      this.setState({
        noteItem: {}
      })
    )
  }

  handleSubmit = (e, id) => {
    console.log(id)
    e.preventDefault()

    fetch(`http://localhost:3000/api/v1/notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body
      })
    })
    .then(res => res.json())
    .then(noteObject => {
      const notes = this.state.notes.map((note) => {
        return note.id === noteObject.id ? noteObject : note
      })
     this.setState({
       notes: notes,
       noteItem: noteObject,
       showEditor: false
     })
    })
  }

  handleCancel = () => {
    // console.log("I am clicked")
    this.setState({
      showEditor: false
    })
  }


  handleReverse = (e, note) => {
    console.log("I am clicked", note.title)
    this.setState({
      noteItem: {...this.state.noteItem, title: note.title.split("").reverse().join("")}
    })

  }





  render() {
    // console.log(this.props.notes, "I mounted")
    // console.log(this.state.title, this.state.body)
    // console.log(this.state.noteItem)
    let filterNotes = this.state.notes.filter(note => {
      return note.title.toLowerCase().indexOf(this.state.noteFilter.toLowerCase())
            !== -1
     })

    return (
      <Fragment>
        <Search handleFilterChange={this.handleFilterChange}/>
        <Sorting handleSort={this.handleSort}/>
        <div className='container'>

            <Sidebar notes={filterNotes}
              handleNoteViewer={this.handleNoteViewer}
              handleNewClick={this.handleNewClick}
            />
          <Content note={this.state.noteItem}
            handleEdit={this.handleEdit}
            handleClick={this.handleClick}
            handleDelete={this.handleDelete}
            showEditor={this.state.showEditor}
            handleSubmit={this.handleSubmit}
            handleCancel={this.handleCancel}
            handleReverse={this.handleReverse}/>
        </div>
      </Fragment>
    );
   }
  }

export default NoteContainer;
