import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {

  state = {
    title: "",
    body:""
  }

  handleEdit = (event) => {
    console.log(event.target.value)
    this.setState({
      title: event.target.value,
      boyd: event.target.value
    })

  }

   //  renderContent = () => {
   //   if (false) {
   //    return <NoteEditor />;
   //   } else if (false) {
   //    return <NoteViewer />;
   //   } else {
   //    return <Instructions />;
   //  }
   // }

  render() {
    return (
      <div className='master-detail-element detail'>
          {/*this.renderContent()*/}
           <NoteViewer note={this.props.note}
             handleEdit={this.handleEdit}/>
           <NoteEditor  handleEdit={this.handleEdit}/>

      </div>
    );
  }
}

export default Content;
