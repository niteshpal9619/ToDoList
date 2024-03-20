import React from "react";

const ErrorMessage = ({message}) => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="alert alert-danger" role="alert">
              <b>{message}</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorMessage;
