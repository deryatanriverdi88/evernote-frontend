import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {

  state = {
    notes: []
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

  render() {

    return (
      <div className="app">
        <Header />
        <NoteContainer
        notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
