import React, { useReducer } from 'react';
import Issues from '../Issues/Issues';
import Main from '../Main/Main';

const initialState = {
  issues: []
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_ISSUE':
      return {
        issues: [...state.issues, payload]
      }
    case 'CLOSE_ISSUE':
      const issues = [...state.issues];
      const issue = issues.find(issue => issue.id === payload.id);
      issue.status = 'Closed';
      return {
        issues
      }
    case 'DELETE_ISSUE':
      const remainingIssues = state.issues.filter(issue => issue.id !== payload.id);
      return {
        issues: remainingIssues
      }
    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="mb-4">
      <Main dispatch={dispatch}></Main>
      <Issues state={state} dispatch={dispatch}></Issues>
    </div>
  );
};

export default Home;
