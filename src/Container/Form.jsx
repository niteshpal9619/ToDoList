import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from './ErrorMessage'

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputItems, setInputItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddItems = (e) => {
    if (inputValue !== "") {
      setInputItems([...inputItems, inputValue]);
    }
    setInputValue("");
  };

  const handleDeleteItem = (index) => {
    const updatedItems = inputItems.filter((_, i) => i !== index);
    setInputItems(updatedItems);
  };

  const handleEditItem = (index) => {
    setEditIndex(index);
    setEditText(inputItems[index]);
  };

  const handleSaveEdit = (index) => {
    const updatedItems = [...inputItems];
    updatedItems[index] = editText;
    setInputItems(updatedItems);
    setEditIndex(null);
    setEditText("");
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Todo List</h5>
              </div>
            </div>
            <div className="card-body mt-1">
              <div className="input-group mb-3">
                <input
                  className="form-control mb-2"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                ></input>
              </div>
              <div className="input-group-append">
                <button
                  onClick={handleAddItems}
                  className="btn btn-success btn-block"
                >
                  Add
                </button>
              </div>
              <br></br>
            </div>
            <ul className="list-group">
              {inputItems.map((item, index) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={index}
                >
                  {editIndex === index ? (
                    <>
                      <input
                        type="text"
                        className="form-control"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                      />
                      &nbsp;
                      <button
                        className="btn btn-success btn-sm ml-2"
                        onClick={() => handleSaveEdit(index)}
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <span>{item}</span>
                      <div>
                        <button
                          className="btn btn-primary btn-sm mr-2"
                          onClick={() => handleEditItem(index)}
                        >
                          Edit
                        </button>
                        &nbsp;&nbsp;
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDeleteItem(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>        
        {inputItems.length > 0 ? (
          <button className="btn btn-primary btn-block">Save</button>
        ) : (
          <ErrorMessage message="Please add your task"></ErrorMessage>
        )}
      </div>
    </div>
  );
};

export default Form;
