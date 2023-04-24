import React from "react";

const Modal = props => {

  if(props.show) {
    return null
  }



  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title"> {props.title}</h4>
        </div>
        <div className="modal-body"> {props.children}</div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="button">Close</button>          
          {/* <button onClick={props.onSubmit} className="button">Submit</button>           */}
        </div>
      </div>
    </div>
  )
}

export default Modal;


//https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a?  Great resource to create modal
