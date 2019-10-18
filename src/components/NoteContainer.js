import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  state = {
    note:{}
  }

  handleNoteViewer = (note) => {
    console.log(note)
    this.setState({
      note: note
    })
  }

  render() {
    // console.log(this.props.notes)



    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.props.notes}
            handleNoteViewer={this.handleNoteViewer}
            />
          <Content/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
