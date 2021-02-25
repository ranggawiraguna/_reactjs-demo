import React from 'react';
import './ModalUpdate.css';

function getTitleTextFromColumn(col) {
  let titleText = "";

  for (let i = 0; i < col.length; i++) {
    if (i === 0) titleText += col[i].toUpperCase();
    else if (col[i] === col[i].toUpperCase()) titleText += (" " + col[i]);
    else titleText += col[i];
  }

  return titleText
}

function ModalUpdate(props) {
  return (
    <div className="modal fade" id="ModalUpdate" tabIndex="-1" aria-labelledby="Update Modal" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content" data-path={props.pathUpdate} data-id={props.idUpdate}>
          <div className="modal-header">
            <h5 className="modal-title" id="ModalTitle"> Update Data - {props.titleUpdate} </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div id="ModalBody" className="modal-body">
            {props.columnUpdate.map((col) => <span key={col}> <label htmlFor={col}>{getTitleTextFromColumn(col)}</label> <span name={col} type="text" className="form-control" contentEditable="true" suppressContentEditableWarning={true}>{props.dataUpdate[col]}</span> </span>)}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalUpdate