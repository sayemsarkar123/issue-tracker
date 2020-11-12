import React from 'react';
import Issue from '../Issue/Issue';

const Issues = ({state, dispatch}) => {
  return (
    <div className="container">
      <div className="row">
        {state.issues.map((issue) => (
          <Issue key={issue.id} issue={issue} dispatch={dispatch}></Issue>
        ))}
      </div>
    </div>
  );
};

export default Issues;
