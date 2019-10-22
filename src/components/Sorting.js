import React from 'react';

const Sorting = (props) => {
  return (
    <div className="sort">
    <button onClick={props.handleSort}>Sort alphabetical</button>
    </div>
  );
}

export default Sorting;
