import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons'

const Issue = ({issue: { id, status, description, severity, assignedTo }, dispatch}) => {
  return (
    <div style={{backgroundColor: '#f5f5f5'}} className="col-md-11 mx-auto rounded mt-4 p-4">
      <div>
        <small>Issue ID: {id}</small>
        <div className="w-100"></div>
        <div className={`badge my-3 ${status === 'Open' ? 'badge-info' : 'badge-danger'}`}>{status}</div>
        <h3 className="mb-2">{description}</h3>
        <p>
          <span className="mr-1"><FontAwesomeIcon icon={faClock} /></span> {severity}
        </p>
        <p className="my-3">
          <span className="mr-1"><FontAwesomeIcon icon={faUser} /></span> {assignedTo}
        </p>
        <button
          onClick={() => dispatch({ type: 'CLOSE_ISSUE', payload: { id } })}
          className="btn btn-warning mr-2"
        >
          Close
        </button>
        <button
          onClick={() => dispatch({ type: 'DELETE_ISSUE', payload: { id } })}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Issue;
