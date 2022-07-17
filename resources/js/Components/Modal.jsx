import React from "react";

export default function Modal(props) {
  return (
    <>
      <a href={"#"+props.modal_id} className="btn">{props.btntxt}</a>
      <div className="modal" id={props.modal_id}>
        <div className="modal-box  w-10/12 max-w-5xl">
          { props.children }
        </div>
      </div>
    </>
  )
}