import React from 'react';
import { useForm } from 'react-hook-form';

const Main = ({dispatch}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const { issueDescription: description, issueSeverity: severity, assignedTo } = data;
    dispatch({ type: 'ADD_ISSUE', payload: { id: ~~(Math.random() * 999999999), status: 'Open', description, severity, assignedTo } });
  };
  console.log('ERROR', errors);
  return (
    <div className="container mt-5">
      <div className="row">
        <div style={{backgroundColor: '#eee'}} className="col-md-12 p-5 rounded">
          <h3 className="mb-3">Add New Issue:</h3>
          <form className="wasValidated" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="font-weight-bold">Description</label>
              <input
                className={`form-control ${
                  errors.issueDescription ? 'is-invalid' : ''
                }`}
                placeholder="Describe the issue ..."
                type="text"
                name="issueDescription"
                ref={register({
                  required: {
                    value: true,
                    message: 'This field cannot be empty.',
                  },
                })}
              />
              <div className="invalid-feedback">
                {errors.issueDescription?.message}
              </div>
            </div>
            <div className="form-group my-3">
              <label className="font-weight-bold">Severity</label>
              <select
                className={`form-control ${
                  errors.issueSeverity ? 'is-invalid' : ''
                }`}
                name="issueSeverity"
                ref={register({
                  required: {
                    value: true,
                    message: 'This field cannot be empty.',
                  },
                })}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              <div className="invalid-feedback">
                {errors.issueSeverity?.message}
              </div>
            </div>
            <div className="form-group">
              <label className="font-weight-bold">Assigned To</label>
              <input
                className={`form-control ${
                  errors.assignedTo ? 'is-invalid' : ''
                }`}
                placeholder="Enter responsible ..."
                type="text"
                name="assignedTo"
                ref={register({
                  required: {
                    value: true,
                    message: 'This field cannot be empty.',
                  },
                })}
              />
              <div className="invalid-feedback">
                {errors.assignedTo?.message}
              </div>
            </div>
            <input
              className="btn btn-primary rounded mt-2"
              type="submit"
              value="Add"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
